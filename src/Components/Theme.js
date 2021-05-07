import { createMuiTheme } from '@material-ui/core/styles';

const arcOrange = "#FFBA60";
const arcBlue = "#0B72B9";
const arcGrey = "#868686";

export default createMuiTheme({
    palette : {
        common : {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
          },
        secondary: {
            main: arcOrange
          }
    },
    typography : {
        tab : {
            fontFamily : 'Raleway',
            textTransform : 'none',
            fontSize : '1rem',
            fontWeight : 700,
            color:'white'
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
          },
        h2 : {
            fontFamily : 'Raleway',
            fontWeight : 700,
            fontSize : '2.5rem',
            color : `${arcBlue}`,
            lineHeight : 1.5
        },
        h4 : {
            fontFamily : 'Raleway',
            fontWeight : 700,
            fontSize : '1.75rem',
            color : `${arcBlue}`,
        },
        subtitle1 :{
            fontWeight : 300,
            fontSize : '1.25rem',
            color : `${arcGrey}`,
        },
        learnButton : {
            borderWidth : 2,
            borderColor : `${arcBlue}` ,
            color : `${arcBlue}`,
            borderRadius: 50 ,
            textTransform : 'none' ,
            fontFamily : 'Roboto' ,
            fontWeight : 'bold' ,
        }
    }
});