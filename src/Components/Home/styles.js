import { makeStyles, styled } from '@mui/styles'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export const styles = makeStyles({
    firstRow : {
        position : 'relative',
        backgroundColor : '#49a078',
    },
    navBackground : {
        position : 'absolute',
        width : '100vw',
        height : '100%',
        bottom : 0,
        backgroundColor : '#49a078',
    },
    secondRow : {
        position : 'relative',
        backgroundColor : '#FEFEE3',
        '&::before' : {
            content : '""',
            position : 'absolute',
            width : '100vw',
            height : '100%',
            backgroundColor : '#FEFEE3',
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