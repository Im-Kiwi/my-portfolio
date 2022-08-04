import { makeStyles } from "@mui/styles"
import { customTheme } from "../../theme/createTheme"

// accessing the color palette from customTheme
const colors = customTheme.palette

// added css properties
export const styles = makeStyles({
    introduction : {
        height : '100%'
    },
    initialText : {
        fontFamily : 'Oswald, sans-serif !important',
        fontSize : '1.5rem !important',
        color : colors.greyish.main
    },
    firstName : {
        color : colors.orangish.main, 
        fontFamily : 'Titan One, cursive !important'
    },
    professionText : {
        marginLeft : '95px !important',
        fontSize : '1.5rem',
        fontFamily : 'Yanone Kaffeesatz, sans-serif'
    },
    summary : {
        fontSize : '1.3rem',
        marginTop : 50,
        color : colors.greyish.main,
        fontFamily : 'Comfortaa, cursive'
    },
    resumeBtn : {
        fontFamily : 'Audiowide, cursive !important',
        '&:hover' : {
            boxShadow : '0px 0px 4px 0 #EF3237'
        }
    },
    socialIcons : {
        fontSize : '2.5rem !important',
        color : colors.greyish.main
    },

    // ----------- responsive -------------
    '@media (max-width : 400px)' : {
        introduction : {
            marginTop : 20
        },
        initialText : {
            fontSize : '1.2rem !important'
        },
        professionText : {
            fontSize : '1.2rem',
            marginLeft : '52px !important'
        },
        summary : {
            fontSize : '1rem'
        },
        socialIcons : {
            fontSize : '2.1rem !important'
        }
    }
})

export const pageTransition = {
    start : {
        y : 500,
        opacity : 0
    },
    end : {
        y : 0,
        opacity : 1
    },
    exit : {
        y : -500,
        opacity : 0
    },
    transition : {
        type : 'tween'
    }
}
