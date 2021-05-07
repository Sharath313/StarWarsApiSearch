import { Card, CardContent, Grid, useMediaQuery } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import { ToysOutlined } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
// import glob from '../assets/globe.svg';
// import phone from '../assets/iphone.svg'
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg'

const useStyles = makeStyles(theme => ({
    icon : {
        maxWidth : '50em' ,
        // minWidth : '21em' ,
        marginTop : '2em' ,
        marginLeft : '10%',
        [theme.breakpoints.down('xs')] :{
            maxWidth : '30em'
        }
    },
    estimateButton :{
        ...theme.typography.estimate,
        backgroundColor :theme.palette.common.orange,
        borderRadius : 50,
        height : '45px',
        width : '145',
        marginRight : 40,
        '&:hover' : {
            backgroundColor : theme.palette.secondary.light
        }
    },
    buttonContainer : {
        marginTop : '1em'
    },
    learnButtonHero : {
        ...theme.typography.learnButton,
        fontSize : '0.9rem' ,
        height : 45 ,
        width : 145
    },
    learnButton : {
        ...theme.typography.learnButton,
        fontSize : '0.7rem' ,
        height : 35,
        [theme.breakpoints.down('xs')] : {
            marginBottom : '1em'
        }

    },
    mainContainer : {
        marginTop : '5em',
        [theme.breakpoints.down('md')] : {
            marginTop : '2em'
        },
        [theme.breakpoints.down('xs')] : {
            marginTop : '1em'
        }
    },
    heroTextContainer : {
        minWidth : '15em',
        marginLeft : '1em'
    },
    specialText : {
        fontFamily : 'Pacifico',
        color : theme.palette.common.orange
    },
    icon : {
        marginLeft : '1em',
        [theme.breakpoints.down('xs')] : {
            marginLeft : '0em'
        }
    },
    servicesContainer : {
        marginTop : '5em',
        [theme.breakpoints.down('xs')] : {
            marginTop : '3em'
        }
    },
    revolutionBackground : {
        backgroundImage : `url(${revolutionBackground})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        height : '100%',
        width : '100%'
    },
    revolutionCard : {
        position : 'absolute',
        boxShadow : theme.shadows[10],
        borderRadius :15,
        padding : '8em'
    }
}))


export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item>{/*----- Hero Component -----*/}
                <Grid container justify='flex-end' alignItems="center" direction='row'>
                    <Grid item className={classes.heroTextContainer}>
                        <Typography variant='h2' align='center' >
                            Bringing the Technology.<br />to the Market.
                        </Typography>
                        <Grid container justify='center' className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant='contained' className={classes.estimateButton}>
                                    Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className={classes.learnButtonHero}>
                                 Learn More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img alt='img1' src={customSoftwareIcon}  />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*----- custom software ------*/}
                <Grid container direction='row' 
                    className={classes.servicesContainer}
                    justify={matchesSM ? 'center' : undefined} > 
                    <Grid item style={{marginLeft: matchesSM ? 0 : '2em', textAlign : matchesSM ? 'center' : undefined}}>
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography><br/>
                        <Typography variant='subtitle1'>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete  digital solutions, from invesigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton}>Learn More</Button>
                    </Grid>
                    <Grid item>
                        <img alt='img3' className={classes.icon} src={customSoftwareIcon}  />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----ios/Android------*/}
                <Grid container direction='row' 
                    className={classes.servicesContainer}
                    justify={matchesSM ? 'center' : 'flex-end'} > 
                    <Grid item style={{textAlign : matchesSM ? 'center' : undefined}}>
                        <Typography variant='h4'>
                            ios/Android App Development
                        </Typography><br/>
                        <Typography variant='subtitle1'>
                            Extend Functanality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrate your web experience or create a <br/>standalone app with either mobile platform.
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton}>Learn More</Button>
                    </Grid>
                    <Grid item style={{marginRight : matchesSM ? 0 : '2em'}}>
                        <img alt='img3' className={classes.icon} src={mobileAppsIcon}  />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*----- websites software ------*/}
                <Grid container direction='row' 
                    className={classes.servicesContainer}
                    justify={matchesSM ? 'center' : undefined} > 
                    <Grid item style={{marginLeft: matchesSM ? 0 : '2em', textAlign : matchesSM ? 'center' : undefined}}>
                        <Typography variant='h4'>
                            Websites Development
                        </Typography><br/>
                        <Typography variant='subtitle1'>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Optimized for Search Engine, built for speed.
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton}>Learn More</Button>
                    </Grid>
                    <Grid item>
                        <img alt='img3' className={classes.icon} src={websitesIcon}  />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item > {/*----- revolution-----*/}
                <Grid container style={{height:'80em'}} alignItems='center' justify='center' >
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction='column' style={{textAlign:'center',alignItems:'center'}}  >
                                <Grid item>
                                    <Typography varient='h2'>The Revolution</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'> 
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant='outlined' className={classes.learnButtonHero}>
                                        Learn More</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}></div>
                </Grid>
            </Grid>
        </Grid>
    )
}

 