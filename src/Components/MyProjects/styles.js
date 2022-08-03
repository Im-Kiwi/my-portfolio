import { Stack } from '@mui/material'
import { styled, makeStyles } from '@mui/styles'
import { customTheme } from '../../theme/createTheme'

// accessing the colors from customTheme
const colors = customTheme.palette

// css properties added for various elements
export const CustomStack = styled(Stack)({
    width : '100%',
    position : 'relative', 
})

export const styles = makeStyles({
    dot : {
        width : 10,
        height : 10,
        border : `solid 1px ${colors.orangish.main}`,
        borderRadius : '50%'
    },
    selectedDot : {
        backgroundColor : colors.orangish.main,
        border : `solid 1px ${colors.orangish.main}`,
        borderRadius : '50%',
        width : 10,
        height : 10,
    },
    slideButton : {
        maxWidth : '60px !important',
        borderRadius : '50px !important',
        border : `solid 2px ${colors.orangish.main} !important`,
        boxShadow : `0 0 10px 0 ${colors.orangish.main} inset`,
        height : 550
    },
    carousel : {
        overflow : 'hidden', 
        width : '100%', 
        height : '100%',
        padding : 10
    },
    noCarousel : {
        width : 500,
        height : 'inherit',
    }
})