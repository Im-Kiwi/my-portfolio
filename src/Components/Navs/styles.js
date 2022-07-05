import { styled } from '@mui/styles'
import { Link } from 'react-router-dom'

 // styling nav links
export const CustomLink = styled(Link)({
    textDecoration : 'none',
    color : 'white',
    fontSize : '1.5rem',
    '&:hover' : {
        color : 'white'
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