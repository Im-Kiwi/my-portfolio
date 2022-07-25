import { styled } from '@mui/styles'
import { Grid } from '@mui/material'
import { customTheme } from '../../theme/createTheme'

const colors = customTheme.palette

export const CustomGrid = styled(Grid)({
    padding : 30, 
    boxShadow : `0 0 5px 2px ${colors.orangish.main}`, 
    borderRadius : 20, 
    height : 300
})