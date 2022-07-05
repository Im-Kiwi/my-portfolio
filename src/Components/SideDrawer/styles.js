import { styled } from '@mui/styles'
import {Link} from 'react-router-dom'

export const CustomLink = styled(Link)({
    textDecoration : 'none',
    color : '#ffffff',
    '&:hover' : {
        color : '#ffffff'
    }
})