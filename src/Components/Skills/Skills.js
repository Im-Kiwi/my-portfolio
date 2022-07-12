import { Container, Grid, Typography, Stack } from '@mui/material'

// ------- importing from other files -------

const Skills = () => {

    return (
        <Container maxWidth = 'xl'>
                <Stack 
                    id = 'my-skills'
                    sx = {{height : '100vh'}}
                    justifyContent = 'center'
                    spacing = {10}>
                    <Grid container item>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Javascript</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>HTML</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                    </Grid>
                    <Grid item container>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>CSS</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Reactjs</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Framer motion</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Firebase</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                    </Grid>
                    <Grid item container>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Bootstrap</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>React bootstrap</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Redux toolkit</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Material-ui</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                    </Grid>
                    <Grid item container>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item>
                            <Typography variant = 'h5'>Git</Typography>
                        </Grid>
                        <Grid xs = {3} item></Grid>
                        <Grid xs = {3} item></Grid>
                    </Grid>
                </Stack>
        </Container>
    )
}

export default Skills