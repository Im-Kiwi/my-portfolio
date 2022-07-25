import { Stack, Box, Typography } from '@mui/material'
import { Image } from 'react-bootstrap'

const ProjectTitle = (props) => {

    return (
        <Stack
            className = {props.cssClass} 
            direction = 'row'
            justifyContent = 'center'
            alignItems = 'center'
            spacing = {props.gap}>
            <Box>
                <Image fluid src = {props.logo} width = {props.iconSize} alt = {props.alt} />
            </Box>
            <Box>
                <Typography 
                    className = 'text-light'
                    sx = {{
                        fontFamily : props.fontFamily,
                        fontSize : props.fontSize}}>
                    {props.title}
                </Typography>
            </Box>
        </Stack>
    )
}

export default ProjectTitle