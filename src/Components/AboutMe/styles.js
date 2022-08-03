import { makeStyles } from "@mui/styles"
import { customTheme } from "../../theme/createTheme"

const colors = customTheme.palette

export const styles = makeStyles({
    container : {
        height : '100%'
    },
    main : {
        marginTop : '10px !important',
        padding : 16,
        borderRadius : 10,
        boxShadow : '0 0 5px 1px #EF3237',
        marginBottom : '10px !important'
    },
    quote : {
        textAlign : 'center',
        marginBottom : '24px !important',
        color : colors.orangish.main,
        fontFamily : 'Londrina Solid, cursive !important'
    },
    list : {
        color : colors.greyish.main,
        fontSize : '1.15rem',
        fontFamily : "'Nixie One', cursive"
    },

    // ----------------- responsive -------------------

    '@media (max-width : 1244px)' : {
        container : {
            height : 'auto'
        }
    },
    '@media (max-width : 576px)' : {
        list : {
            fontSize : '1rem'
        }
    }
})