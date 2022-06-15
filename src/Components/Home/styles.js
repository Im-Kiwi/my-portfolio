import { makeStyles, styled } from '@mui/styles'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export const styles = makeStyles({
    firstRow : {
        '&::before' : {
            content : '""',
            position : 'absolute',
            width : '100vw',
            height: '100%',
            backgroundColor : '#f1faee'
        }
    },
    secondRow : {
        position : 'relative',
    },
    navBackground : {
        content : '""',
        position : 'absolute',
        width : '100vw',
        height : '100%',
        backgroundColor : '#e63946'
    },
    
})

export const CustomLink = styled(Link)({
    textDecoration : 'none',
    color : '#fefee3',
    fontSize : '1.5rem',
    '&:hover' : {
        color : '#fefee3'
    }
})