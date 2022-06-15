import { Grid, Container } from '@mui/material'

// -------- importing from other files ---------
import SideDrawer from '../SideDrawer/SideDrawer'

const AboutMe = () => {

    return (
        <Container maxWidth = 'xl'>
            <Grid container>
                <Grid item xs = {3}>
                    <SideDrawer />
                </Grid>
                <Grid item xs = {9}>
                    about me
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMe