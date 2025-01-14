import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography, useTheme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const CountDownRecruitment = () => {
    const theme = useTheme();

    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 })

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

    // Calculate the remaining time until the event and update the countdown state
    const calculateCountdown = () => {
        const today = new Date();
        const eventDate = new Date('2024-09-13 00:00:01');
        const timeDifference = eventDate.getTime() - today.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown({ days, hours, minutes });
    };

    // Calculate the countdown on component mount and then update it every minute
    useEffect(() => {
        calculateCountdown();

        const intervalId = setInterval(calculateCountdown, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const ItemCountDown = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: '3.0rem',
        opacity: 0.9,
        boxShadow: 'none'

    }));
    const ItemCountDownTitle = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        color: theme.palette.primary.main,
        fontWeight: 400,
        fontSize: (mobile || smallMobile) ? "3.3vw" : '2vw',
        opacity: 0.7,
        boxShadow: 'none'
    }));

    return (<>
        <div
            style={{
                width: (mobile || smallMobile) ? "70%" : '50%',
                height: (smallMobile || mobile) ? "20vh" : "15vh",
                backgroundColor: '#fff',
                borderRadius: '25px',
                opacity: '0.9',
                padding: (smallMobile || mobile) ? "0rem 3rem" : '1.3rem 4rem',
                zIndex: '3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: "hidden"
            }}
        >
            
                <div style={{display: "flex", flexDirection: (smallMobile || mobile || tablet) ? "column" : "row", alignItems: "center", width: "100%",  rowGap: "10%"}}>
                    <div style={{width: (smallMobile || mobile || tablet) ? "100%" : "40%", height: "100%", display: "flex", alignItems:" center", justifyContent: "center"}}>
                        
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: 'medium',
                            color: theme.palette.primary.main,
                            textTransform: 'uppercase',
                            fontSize: mobile ? "3.6vw" : (smallMobile ? "4.5vw" : tablet ? "3.2vw" : (desktop ? "2vw" : (largeDesktop ? "1.5vw" : "2vw"))),
                            textAlign: !(mobile || smallMobile) ? "none" : "center"
                        }}
                    >Recruitment {!(smallMobile || mobile || tablet) && (<br/>)} Opens in</Typography>   
                        
                    </div>                

                    <div style={{marginTop: mobile || smallMobile || tablet ? "5%" : 0, width: "100%",  display: "flex", flexDirection: "row", gap: (mobile || smallMobile) ? "17%" : "10%",  alignItems: "center", justifyContent: (mobile || smallMobile || tablet) ? "center" : "right"}}>
                        <div style={{width:"auto"}}>
                            <ItemCountDown>
                                {countdown.days}
                            </ItemCountDown>
                            <ItemCountDownTitle>
                                DAYS
                            </ItemCountDownTitle>
                        </div>
                        
                        <div style={{width:"auto"}}>
                        <ItemCountDown>
                                {countdown.hours}
                            </ItemCountDown>
                            <ItemCountDownTitle>
                                HOURS
                            </ItemCountDownTitle>
                        </div>

                        <div style={{width:"auto"}}>
                        <ItemCountDown>
                                {countdown.minutes}
                            </ItemCountDown>
                            <ItemCountDownTitle>
                                MINUTES
                            </ItemCountDownTitle>
                        </div>
                </div>

            </div>

        </div>

    </>
    );
};

export default CountDownRecruitment;
