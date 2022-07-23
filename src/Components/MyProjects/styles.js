import { Box, Stack, Grid } from '@mui/material'
import { styled } from '@mui/styles'
import { customTheme } from '../../theme/createTheme'

const colors = customTheme.palette

export const Thumbnail = styled(Stack)({
    width : 230,
    height : 130, 
    padding : 10,
    border : 'none',
    background : 'none',
    '&:hover' : {
        borderRadius : 10,
        backgroundColor : '#ffffff'
    }
})

export const ProjImage = styled(Grid)({
    padding:10, 
})

export const Main = styled(Box)({
    marginTop : 20,
    height : 400, 
    padding : 5,
})