import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Typography, IconButton, useTheme } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email'; 
import { ContactUs } from "./ContactUs";

const PortfolioButton = () => {
  const theme = useTheme();
  const form = useRef();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [emailWasSent, setEmailWasSent] = useState(false);

  const toggleFormVisibility = () => {
      setIsFormVisible((prev) => !prev);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yb2gtvd", "template_1z75y5s", form.current, {
        publicKey: "bU18izKnnYVyMNe86",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsFormVisible(false);
          setEmailWasSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <button
        onClick={toggleFormVisibility}
        style={{
          backgroundColor: "white",
          opacity: "0.6",
          height: "45px",
          padding: "0px 15px",
          borderRadius: "20px",
          border: "none",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        CURIOUS ABOUT OUR LATEST WORK?
      </button>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          width: "auto",//Not sure
          padding: 40,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: isFormVisible ? "block" : "none",
          marginTop: "20px",
          opacity: 1,
          transition: "opacity 0.5s ease-in-out"
        }}
      >
        {!emailWasSent ? (
          isFormVisible && (
           <ContactUs type="newsletter"/>
          )
        ) : (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <EmailIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{
                color: theme.palette.primary.main,
                fontWeight: "normal",
              }}
            >
              Email Sent Successfully!
            </Typography>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioButton;
