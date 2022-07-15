import { styled, makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { customTheme } from '../../theme/createTheme'

const color = customTheme.palette

 // styling nav links
export const CustomLink = styled(Link)({
    textDecoration : 'none',
    color : 'white',
    fontSize : '1.5rem',
    '&:hover' : {
        color : 'white'
    }
})

export const styles = makeStyles({
    icon : {
        fontSize : '2.3rem !important', 
        color : color.orangish.main,
        '&:hover' : {
            '& svg' : {
                transform : 'scale(1.3) translateY(-10px)',
                transition : '0.2s'
            }
        },
        '& svg' : {
            fontSize : '2.3rem'
        }
    },
    chip : {
        position : 'absolute',
        bottom : -40,
        color : color.orangish.main + '!important',
        borderColor : color.orangish.main + '!important'
    },
    activeLink : {
        transform : 'scale(1.3) translateY(-10px)',
        transition : '0.2s'
    }
}) 

export const animateImg = {
    hover : {
        opacity : 0,
        y : -15,
        transition : {
            type : 'tween',
            ease : 'easeOut'
        }
    } 
}

export const animateText = {
    initial : {
        opacity : 0,
        y : -100,
    },
    hover : {
        opacity : 1,
        y : -100,
        transition : {
            delay : 0.1,
            type : 'tween',
            ease : 'easeOut'
        }
    }
}