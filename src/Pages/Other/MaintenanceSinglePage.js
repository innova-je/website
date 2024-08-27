import { Box, Typography, Link, Grid } from '@mui/material';
import React from 'react';
import bgImage from '../../Assets/Images/other/maintenance_single_page.png';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

import { useMediaQuery } from 'react-responsive';


const SocialMedia = () => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <div style={{
      display: "flex",
      justifyContent: desktop ? "left" : "center",
      gap: 2,
      width: "100%"
    }}>
      <Link href='https://www.instagram.com/in.nova.pt' style={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none"
      }}>
        <InstagramIcon
          style={{
            color: "#052533",
            width: mobile ? "5vh" : "7vh",
          }} />
      </Link>
      <Link href='https://www.linkedin.com/company/innova-consultoria-junior' style={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none"
      }}>
        <LinkedinIcon
          style={{
            color: "#052533",
            width: mobile ? "5vh" : "7vh"
          }} />
      </Link>
    </div>);
}

const MaintenanceSinglePage = () => {
  const theme = useTheme();

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <div style={{ flexGrow: 1 }}>
      <div
        style={{
          opacity: 0.25, // apply opacity to the outer Box component
          height: '100vh',
          position: 'relative', // change position to relative
          overflow: 'hidden', // hide any overflow
        }}
      >
        <div
          style={{
            position: 'relative', // keep position as absolute
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: 'center', // move the background image up by 50 pixels
            zIndex: -1,
            backgroundBlendMode: 'darken',
            overflow: "hidden"
          }}
        />
        
      </div>

      <div style={{position: "absolute", height: "100%", top: "0%", overflow: "hidden"}}>
        <Grid style={{display: "flex", flexDirection: "column", gap: mobile ? "5%" : "10%", justifyContent: desktop
       ? "left" : "center", alignItems: "center", overflow: "hidden", height: "100%"}}> 
          <div style={{width: "80%"}}>
            <Grid item xs={8}>
            <div style={{display: "flex", justifyContent: "center", zIndex: 10}}>
              <Typography variant='h3' style={{
              display: "flex",
              justifyContent: desktop ? "left" : "center",
              textAlign: mobile || tablet ? "center" : 'left',
              marginTop: desktop ? 20 : 0,
              color: "#732043",
              width: "100%",
              fontSize: desktop ? "4.5dvw" : (tablet ? "5vw" : "7.5vw"),
              fontWeight: '600',
              opacity: 1,
              zIndex: 100
            }}>
              Not so fast! <br />
              This is currently under construction, but we will be quick.
            </Typography>
            </div>
            
          </Grid>
          <Grid item>
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: desktop ? "left" : "center",
              alignItems: "center",
              marginTop: "2%",
              gap: "20px",
              width: desktop ? "auto" : "100%"
            }}>
              
              <Typography variant='h3' style={{
                textAlign: mobile || tablet ? "center" : 'left',
                color: "#052533",
                fontSize: desktop ? '2dvw' : (tablet ? "3vw" : "5vw"),
                fontWeight: '400',
                opacity: 1,
                zIndex: 20,
                justifyContent: desktop ? "left" : "center",
                width: "100%"
              }}>
                While you wait, why not check out our social media?
              </Typography>
              
              {SocialMedia({ theme: theme })}
            </div>
          </Grid>
          </div>
          
        </Grid>
      </div>

      

      
    </div>
  )
};

export default MaintenanceSinglePage;