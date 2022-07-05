import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material'

// ------- importing from other files -----------
import { projects } from '../../myProjects/myProjects'

const MyProjects = () => {

    return (
        <Box 
            display = 'flex'
            flexWrap = 'wrap'
            justifyContent = 'flex-start'
            alignItems = 'center'
            gap = {1}
            sx = {{mt:10}}>
            {projects.map(proj => {
                return (
                    <Stack
                        key = {proj.projectName}
                        justifyContent = 'center'
                        alignItems = 'center'                         
                        sx = {{
                            width : 270, 
                            height : 200, 
                            backgroundColor : 'pink'}}>
                        <Typography variant = 'h5'>
                            {proj.projectName}
                        </Typography>
                        <Button variant = 'contained' color = 'secondary'>Code</Button>
                        <Button>Preview</Button>
                    </Stack>
                )
            })}
        </Box>
    )
}

export default MyProjects