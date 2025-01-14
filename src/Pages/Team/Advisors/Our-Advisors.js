import { Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import elements from "../../../Assets/Images/other/Elements.png";
import AdvisorComponent from "./Components/AdvisorComponent";
import AlumniComponent from "./Components/AlumniComponent";
import { useMediaQuery } from "react-responsive";

import Advisors from "../../../Assets/data/Advisors.json";

const CustomTitle = ({ title, theme }) => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <>
      <Typography
        align="center"
        sx={{
          fontWeight: "500",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          width: "100dvw",
          display: "flex",
          justifyContent: "center",
          fontSize: desktop ? "3dvw" : tablet ? "4dvw" : "6dvw",
        }}
      >
        {title}
      </Typography>
    </>
  );
};

const advisoryBoardData = Advisors.advisoryBoard[0]?.advisors;
const alumniBoardData = Advisors.alumniBoard[0]?.alumnis;

const OurAdvisors = () => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const theme = useTheme();

  return (
    <main
      style={{
        position: "relative",
        top: 0,
        background: "#F0F0F0",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", top: "10vh", width: "100%" }}>
        <img
          style={{
            width: "100%",
            top: 0,
            position: "relative",
            overflow: "hidden",
            zIndex: 0,
          }}
          src={elements}
          alt="elements"
        />

        <Typography
          align="center"
          gutterBottom
          sx={{
            fontSize: desktop ? "5dvw" : tablet ? "6dvw" : "8dvw",
            marginTop: mobile ? "-13%" : "-15%",
            zIndex: 2,
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            width: "100%",
            background: "#F0F0F0",
          }}
        >
          We are not alone
        </Typography>

        {/*
            
            <div className='Advisors' style={{position: "relative", zIndex: 1}}>
                <CustomTitle title="Advisory Board" theme={theme} />
            <div className='AdvisorsBoard' style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                placeItems: "center",
                position: "relative",
                marginTop: "5%"
            }}>
                
            <div style={{
                display: "grid",
                justifyContent: "center",
                columnGap: "10%",
                rowGap: "5%",
                gridTemplateColumns: (desktop ? "repeat(3, 1fr)" : (tablet ? "repeat(3, 1fr)" : "repeat(2, 1fr)")),
                gridTemplateRows: "repeat(2, 1fr)",
            }}>
                {advisoryBoardData.map((advisor, index) => (
                    <AdvisorComponent
                        key={index}
                        name={advisor.name}
                        description={advisor.description}
                        image={advisor.imgDirectory}
                        linkedin={advisor.linkedin}
                    />
                ))}
            </div>
        </div>

        </div>
            */}

        <section className="Alumnis" style={{ padding: "3rem 0" }}>
          <CustomTitle title="Alumni Board" theme={theme} />

          <div
            className="AlumnisBoard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              placeItems: "center",
              marginTop: mobile ? "15%" : tablet ? "5%" : "0%",
              marginBottom: mobile ? "30%" : "0%",
            }}
          >
            <div
              style={{
                display: "grid",
                placeContent: "center",
                placeItems: "center",
                rowGap: mobile ? "7%" : tablet ? "10%" : "5%",
                marginTop: "5%",
                columnGap: "10%",
                //paddingBottom: desktop ? "15%" : tablet ? "30%" : "20%",
                marginBottom: mobile ? "20%" : tablet ? "30%" : "10%",
                gridTemplateColumns: desktop
                  ? "repeat(3, 1fr)"
                  : tablet
                  ? "repeat(3, 1fr)"
                  : "repeat(2, 1fr)",
              }}
            >
              {alumniBoardData.map((alumni, index) => (
                <AlumniComponent
                  key={index}
                  name={alumni.name}
                  description={alumni.description}
                  image={alumni.imgDirectory}
                  testimony={alumni.testimony}
                  //TODO: adicionar link para o linkedin
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurAdvisors;
