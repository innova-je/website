import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import MapParallax from "./MapParallax";
import { useMediaQuery } from "react-responsive";

function JESection() {
  const theme = useTheme();

  const isSmallMobile = useMediaQuery({ maxWidth: 650 });
  const isMobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const getResponsiveValue = (
    smallMobileValue,
    mobileValue,
    tabletValue,
    defaultValue
  ) => {
    if (isSmallMobile) return smallMobileValue;
    if (isMobile) return mobileValue;
    if (isTablet) return tabletValue;
    return defaultValue;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 0",
        overflow: "hidden",
        background: "#F0F0F0",
      }}
    >
      <div style={{ width: "80dvw" }}>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            fontSize: getResponsiveValue("4.5dvw", "4.5dvw", "4dvw", "2.0dvw"),
          }}
        >
          We're part of the
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: getResponsiveValue("7.7dvw", "7.7dvw", "7.7dvw", "4dvw"),
          }}
        >
          Junior Enterprise Network
        </Typography>

        <div style={{ padding: "50px 0px 20px 0px" }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "400",
              fontSize: getResponsiveValue(
                "3.5dvw",
                "3.5dvw",
                "3.5dvw",
                "1.8dvw"
              ),
              textAlign: "center",
            }}
          >
            “Europe’s future is in the hands of its young people.
            <br /> (…) Europe’s Junior Enterprises are leading the way.”
          </Typography>
          <Typography
            variant="body2"
            sx={{
              padding: "20px 0px",
              textAlign: getResponsiveValue(
                "right",
                "right",
                "right",
                "center"
              ),
              color: theme.palette.primary.main,
              fontWeight: "300",
              fontSize: getResponsiveValue(
                "2.5dvw",
                "2.5dvw",
                "2.5dvw",
                "1.2dvw"
              ),
            }}
          >
            Jean-Claude Juncker
            <br />
            European Commission, Former President
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MapParallax />
          <Button
            variant="contained"
            href="https://jeportugal.pt/en/je-network/"
            sx={{
              backgroundColor: theme.palette.primary.main,
              fontWeight: "600",

              fontSize: getResponsiveValue("4dvw", "4dvw", "4dvw", "1.5dvw"),
              textTransform: "none",
              padding: "5px 50px",
              borderRadius: "15px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JESection;