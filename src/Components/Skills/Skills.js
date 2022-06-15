import { Container, Grid } from '@mui/material'

// ------- importing from other files -------
import SideDrawer from '../SideDrawer/SideDrawer'

const Skills = () => {

    return (
        <Container maxWidth = 'xl'>
            <Grid container>
                <Grid item xs = {3}>
                    <SideDrawer />
                </Grid>
                <Grid item xs = {9}>
                    javascript, html, css, reactjs, git, material ui, bootstrap, react bootstrap, framer motion, firebase, redux-toolkit
                </Grid>
            </Grid>
        </Container>
    )
}

export default Skills