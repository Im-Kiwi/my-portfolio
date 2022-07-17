import { styled, makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { customTheme } from '../../theme/createTheme'

const color = customTheme.palette

 // styling nav links
export const CustomLink = styled(Link)({
    textDecoration : 'none',
})

export const styles = makeStyles({
    icon : {
        color : color.orangish.main,
        background : 'none',
        border : 'none',
        '& svg' : {
            fontSize : '2.3rem',
        }
    },
    chip : {
        position : 'absolute',
        bottom : -40,
        color : color.orangish.main + '!important',
        borderColor : color.orangish.main + '!important'
    }
}) 
