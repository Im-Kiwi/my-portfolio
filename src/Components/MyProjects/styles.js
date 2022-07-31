import { Box, Stack, Grid, Button } from '@mui/material'
import { styled, makeStyles } from '@mui/styles'
import { customTheme } from '../../theme/createTheme'

const colors = customTheme.palette

export const CustomStack = styled(Stack)({
    height : '100%',
    width : '100%',
    position : 'relative', 
})

export const Main = styled(Box)({
    boxShadow : `0 0 5px 1px ${colors.orangish.main}`,
    borderRadius : 10,
    height : 500,
})

export const CustomButton = styled(Button)({
    color : `${colors.blackish.main} !important`,
    borderRadius : '0 !important',
    '&:hover' : {
        color : '#ffffff',
        boxShadow : `0 0 6px 0 ${colors.orangish.main} !important`
    }
})

export const styles = makeStyles({
    slideButton : {
        maxWidth : '60px !important',
        borderRadius : '50px !important',
        border : `solid 2px ${colors.orangish.main} !important`,
        boxShadow : `0 0 10px 0 ${colors.orangish.main} inset`,
        height : 550
    },
    cardContainer : {
        height : '100%', 
        width : 'inherit', 
        overflow : 'hidden',
        marginTop : 10,
        position : 'relative'
    },
    carousel : {
        overflow : 'hidden', 
        width : 'inherit', 
        height : 'inherit',
        padding : 10
    },
    projectTitle : {
        color : colors.orangish.main,
        fontFamily : "'Anton', sans-serif !important"
    },
    subTitle : {
        color : colors.orangish.main, 
        textAlign : 'center',
        fontFamily : "'Fredoka One', cursive !important",
        marginBottom : '5px !important'
    },
    detailsContainer : {
        position : 'absolute',
        bottom : 11,
        borderRadius : '10px',
        paddingLeft : 10,
        paddingRight : 10,
        borderTop : `solid 3px ${colors.orangish.main}`,
        backgroundColor : colors.blackish.main,
        overflow : 'hidden'
    }, 
    moreButton : {
        borderRadius : '50px !important', 
        width : 'inherit',
        fontSize : '0.85rem !important',
        fontFamily : "'Abril Fatface', cursive !important"
    },
    closeButton : {
        position : 'absolute !important',
        right : 5,
        border : `solid 1px ${colors.blackish.main} !important`
    },
    chip : {
        width : 110,
        fontSize : '0.85rem !important',
        boxShadow : `0 0 2px 0 ${colors.greyish.main}`,
        color : colors.greyish.main,
        fontFamily : "'Signika', sans-serif !important"
    },
    about : {
        color : colors.orangish.main,
        fontFamily : "'Righteous', cursive !important"
    }
})