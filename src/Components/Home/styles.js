import { makeStyles, styled } from '@mui/styles'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export const styles = makeStyles({
    firstRow : {
        position : 'relative',
        backgroundColor : '#007200',
    },
    navBackground : {
        position : 'absolute',
        width : '100vw',
        height : '100%',
        bottom : 0,
        backgroundColor : '#fdfffc',
        zIndex : 10
    },
    secondRow : {
        position : 'relative',
        backgroundColor : '#7678ed',
        '&::before' : {
            content : '""',
            position : 'absolute',
            width : '100vw',
            height : '100%',
            backgroundColor : '#7678ed',
        }
    },
})

export const CustomLink = styled(Link)({
    textDecoration : 'none',
    color : 'black',
    fontSize : '1.5rem',
    '&:hover' : {
    }
})