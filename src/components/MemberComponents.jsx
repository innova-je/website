import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import {Email, LinkedIn } from '@mui/icons-material';


const CustomComponent = ({ title, name, image }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    backgroundColor: 'white',
    position: 'relative',
    width: '250px',
    height: '100%',
    overflow: 'visible',
    borderRadius: 15,
    marginBottom: 35,
  };

  const imageContainerStyle = {
    width: '100%',
    paddingBottom: '100%',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
    transition: 'filter 0.4s ease-in-out',
  };

  let overlayStyle = {
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: 'auto',
    backgroundColor: '#C7B7BE',
    padding: '5px',
    margin: 'auto',
    borderRadius: 15,
    overflow: 'hidden',
    zIndex: 2,
  };

  if (title === '') {
    overlayStyle = {
      ...overlayStyle,
      height: '40px', // Set a fixed height for the overlay when title is empty
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
  }

  const iconsContainerStyle = {
    position: 'absolute',
    top: 0,
    right: 10,
    display: isHovered ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    zIndex: 3,
  };


  return (
    <ThemeProvider theme={theme}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={iconsContainerStyle}>
          <Email sx={{color:theme.palette.primary.main}}></Email>
          <LinkedIn sx={{color:'#0077B5'}}></LinkedIn>
        </div>
        <div style={imageContainerStyle}>
          <img src={image} alt="imagem de perfil" style={imageStyle} />
        </div>
        <div style={overlayStyle}>
          {title !== '' && (
            <Typography
              variant="body2"
              align="center"
              noWrap
              sx={{ fontWeight: 'bold', fontSize: '13px' }}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="body2"
            align="center"
            noWrap
            sx={{
              fontWeight: 'bold',
              fontSize: '13px',
              color: theme.palette.primary.main,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {name}
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CustomComponent;