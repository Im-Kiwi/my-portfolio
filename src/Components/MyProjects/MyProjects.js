import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material'

// ------- importing from other files -----------
import { projects } from '../../myProjects/myProjects'
import SideDrawer from '../SideDrawer/SideDrawer'

const MyProjects = () => {

    return (
        <Container maxWidth = 'xl'>
            <Grid container>
                <Grid item xs = {3}>
                    <SideDrawer />
                </Grid>
                <Grid 
                    item xs = {9}
                    display = 'flex'
                    flexWrap = 'wrap'
                    justifyContent = 'flex-start'
                    alignItems = 'center'
                    gap = {2}
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
                                <Button>Code</Button>
                                <Button>Preview</Button>
                            </Stack>
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}

export default MyProjects