import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import HeroImage from "../../../Assets/Images/other/CurrentMandate.webp";
import elements from "../../../Assets/Images/other/Elements.png";
import CustomComponent from "./Components/MemberComponents";
import CustomDepartment from "./Components/CustomDepartment";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import laso from "../../../Animations/laso-animation.json";

import Members from "../../../Assets/data/Members.json";
import { useMediaQuery } from "react-responsive";
import { green } from "@mui/material/colors";

const CustomTitle = ({ title, subtitle, theme, sizeTitle, sizeSubTitle }) => {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "Medium",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          marginBottom: 1,
          fontSize: sizeTitle,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "Regular",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          fontSize: sizeSubTitle,
        }}
      >
        {subtitle}
      </Typography>
    </>
  );
};

const OurTeam = () => {
  const theme = useTheme();

  const cexDepartment = Members.departments.find(
    (dept) => dept.name === "Conselho Executivo"
  );
  const salesDepartment = Members.departments.find(
    (dept) => dept.name === "Sales"
  );
  const marketingDepartment = Members.departments.find(
    (dept) => dept.name === "Marketing"
  );
  const projectsDepartment = Members.departments.find(
    (dept) => dept.name === "Projects"
  );
  const qualityDepartment = Members.departments.find(
    (dept) => dept.name === "Quality"
  );
  const humanResourcesDepartment = Members.departments.find(
    (dept) => dept.name === "Human Resources"
  );
  const generalAssembly = Members.departments.find(
    (dept) => dept.name === "General Assembly"
  );
  const fiscalCouncil = Members.departments.find(
    (dept) => dept.name === "Fiscal Council"
  );

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const lasoRef = useRef < LottieRefCurrentProps > null;

  return (
    <main>
      <div style={{ position: "relative", top: "60px", height: "72dvw" }}>
        <img
          style={{
            width: "100%",
            position: "absolute",
            top: "4%",
          }}
          src={elements}
          alt="elements"
        />
        <Typography
          align="center"
          sx={{
            fontSize: "7dvw",
            fontWeight: "Medium",
            position: "absolute",
            top: desktop ? "9%" : tablet ? "6%" : "5.5%",
            zIndex: 1,
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            width: "100%",
          }}
        >
          We are made of people
        </Typography>
        <img
          loading="lazy"
          style={{
            width: "100%",
            position: "absolute",
            bottom: "0",
          }}
          src={HeroImage}
          alt="Innova Tomada De Posse"
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "50%",
            backgroundImage:
              "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
          }}
        />

        <Lottie
          lottieRef={lasoRef}
          loop={false}
          animationData={laso}
          style={{
            position: "absolute",
            left: mobile ? "52%" : "50%",
            transform: "translateX(calc(50% - 20px))",
            top: desktop ? "6%" : "4%",
            width: "27dvw",
            zIndex: 1,
          }}
          speed={2}
        />
      </div>

      <Box
        marginTop={15}
        marginBottom={4}
        textAlign="center"
        position="relative"
        sx={{}}
      >
        <CustomTitle
          title="Our Board"
          subtitle="our problem-solvers"
          theme={theme}
          sizeTitle={desktop ? "3.5rem" : "2.5rem"}
          sizeSubTitle={desktop ? "2.5rem" : "1.5rem"}
        />
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: desktop ? "100%" : "80%",
          margin: "0 auto",
          paddingTop: "20px",
        }}
      >
        <CustomComponent
          title={cexDepartment.president.title}
          name={cexDepartment.president.name}
          image={cexDepartment.president.imgDirectory}
          emailAddress={cexDepartment.president.email}
          linkedinLink={cexDepartment.president.linkedin}
        />
        <CustomComponent
          title={cexDepartment.externalAffairsVicePresident.title}
          name={cexDepartment.externalAffairsVicePresident.name}
          image={cexDepartment.externalAffairsVicePresident.imgDirectory}
          emailAddress={cexDepartment.externalAffairsVicePresident.email}
          linkedinLink={cexDepartment.externalAffairsVicePresident.linkedin}
        />
        <CustomComponent
          title={cexDepartment.internalAffairsVicePresident.title}
          name={cexDepartment.internalAffairsVicePresident.name}
          image={cexDepartment.internalAffairsVicePresident.imgDirectory}
          emailAddress={cexDepartment.internalAffairsVicePresident.email}
          linkedinLink={cexDepartment.internalAffairsVicePresident.linkedin}
        />
        <CustomComponent
          title={cexDepartment.financialManager.title}
          name={cexDepartment.financialManager.name}
          image={cexDepartment.financialManager.imgDirectory}
          emailAddress={cexDepartment.financialManager.email}
          linkedinLink={cexDepartment.financialManager.linkedin}
        />

        <CustomComponent
          title={salesDepartment.director.title}
          name={salesDepartment.director.name}
          image={salesDepartment.director.imgDirectory}
          emailAddress={salesDepartment.director.email}
          linkedinLink={salesDepartment.director.linkedin}
        />
        <CustomComponent
          title={marketingDepartment.director.title}
          name={marketingDepartment.director.name}
          image={marketingDepartment.director.imgDirectory}
          emailAddress={marketingDepartment.director.email}
          linkedinLink={marketingDepartment.director.linkedin}
        />
        <CustomComponent
          title={projectsDepartment.director.title}
          name={projectsDepartment.director.name}
          image={projectsDepartment.director.imgDirectory}
          emailAddress={projectsDepartment.director.email}
          linkedinLink={projectsDepartment.director.linkedin}
        />
        <CustomComponent
          title={qualityDepartment.director.title}
          name={qualityDepartment.director.name}
          image={qualityDepartment.director.imgDirectory}
          emailAddress={qualityDepartment.director.email}
          linkedinLink={qualityDepartment.director.linkedin}
        />
        <CustomComponent
          title={humanResourcesDepartment.director.title}
          name={humanResourcesDepartment.director.name}
          image={humanResourcesDepartment.director.imgDirectory}
          emailAddress={humanResourcesDepartment.director.email}
          linkedinLink={humanResourcesDepartment.director.linkedin}
        />
        <CustomComponent
          title={generalAssembly.director.title}
          name={generalAssembly.director.name}
          image={generalAssembly.director.imgDirectory}
          emailAddress={generalAssembly.director.email}
          linkedinLink={generalAssembly.director.linkedin}
        />
        <CustomComponent
          title={fiscalCouncil.director.title}
          name={fiscalCouncil.director.name}
          image={fiscalCouncil.director.imgDirectory}
          emailAddress={fiscalCouncil.director.email}
          linkedinLink={fiscalCouncil.director.linkedin}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          p: 5,
          maxWidth: desktop ? "100%" : "800px",
          margin: "0 auto",
        }}
      />

      <div style={{ paddingBottom: "2rem" }}>
        <Box marginTop={5} marginBottom={5} textAlign="center">
          <CustomTitle
            title="Our Departments"
            subtitle="who make the magic happen"
            theme={theme}
            sizeTitle={desktop ? "3.5rem" : "2rem"}
            sizeSubTitle={desktop ? "2rem" : "1.5rem"}
          />
        </Box>
        {/* SALES TEAM */}
        <CustomDepartment department={salesDepartment} />{" "}
        {/*O department.name tem que estar no mesmo idioma que o site */}
        {/* MARKETING TEAM */}
        <CustomDepartment department={marketingDepartment} />
        {/* PROJECTS TEAM */}
        <CustomDepartment department={projectsDepartment} />
        {/* QUALITY TEAM */}
        <CustomDepartment department={qualityDepartment} />
        {/* HUMAN RESOURCES TEAM */}
        <CustomDepartment department={humanResourcesDepartment} />
        {/* General Assembly */}
        <CustomDepartment department={generalAssembly} />
        {/* Fiscal Council */}
        <CustomDepartment department={fiscalCouncil} />
      </div>
    </main>
  );
};

export default OurTeam;
