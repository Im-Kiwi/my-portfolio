import { makeStyles, styled } from '@mui/styles'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export const styles = makeStyles({
    firstRow : {
        position : 'relative',
        backgroundColor : '#edddd4',
    },
    navBackground : {
        position : 'absolute',
        width : '100vw',
        height : '100%',
        bottom : 0,
        backgroundColor : '#ffffff',
        zIndex : 10
    },
    secondRow : {
        position : 'relative',
        '&::before' : {
            content : '""',
            position : 'absolute',
            width : '100vw',
            height : '100%',
            backgroundColor : '#197278',
            opacity : 0.9,
        }
    },
})

export const CustomLink = styled(Link)({
    textDecoration : 'none',
    color : 'white',
    fontSize : '1.5rem',
    '&:hover' : {
        color : 'white'
    }
})