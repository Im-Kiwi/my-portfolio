import { Link } from 'react-router-dom'
import { Grid, Typography, Container, Box } from '@mui/material'
import { Image } from 'react-bootstrap'

// --------- importing other files ---------
import { HomeImg } from '../../pathToAssets/pathToAssets'
import { styles, CustomLink } from './styles'

const Home = () => {
    const classes = styles()

    return (
        <Container 
            maxWidth = 'xl' 
            sx = {{overflowX : 'hidden'}}>
            <Grid 
                container
                alignItems = 'space-around'
                sx = {{height : '100vh', position : 'relative'}}>
                <Grid 
                    item xs = {12}
                    className = {classes.firstRow}
                    sx = {{backgroundColor : '#fefee3'}}
                    display = 'flex'
                    justifyContent = 'center'
                    gap = {3}>
                    <Box 
                        display = 'flex'
                        justifyContent = 'center'
                        alignItems = 'flex-end'
                        sx = {{mb:1}}>
                        <Box sx = {{zIndex : 10}}>
                            <Typography variant = 'h3'>
                                Hi
                            </Typography>
                            <Typography variant = 'h3'>
                                Iam Rahul Rana
                            </Typography>
                            <Typography variant = 'h4'>
                                a front end web developer
                            </Typography>
                        </Box>
                        <Box sx = {{zIndex : 10}}>
                            <Image fluid src = {HomeImg} alt = 'a person' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs = {12}
                    className = {classes.secondRow}
                    display = 'flex'
                    justifyContent = 'center'
                    alignItems = 'center'>
                    <Box className = {classes.navBackground}></Box>
                    <Box
                        display = 'flex'
                        justifyContent = 'center'
                        gap = {3}
                        sx = {{zIndex : 10}}>
                        <CustomLink to = '/projects'>
                            My projects
                        </CustomLink>
                        <CustomLink to = 'skills'>
                            Skills i have
                        </CustomLink>
                        <CustomLink to = 'contact-me'>
                            Contact Me
                        </CustomLink>
                        <CustomLink to = 'about-me'>
                            a little about me
                        </CustomLink>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home