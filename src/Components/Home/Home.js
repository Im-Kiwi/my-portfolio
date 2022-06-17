import { Link } from 'react-router-dom'
import { Grid, Typography, Container, Box, Stack } from '@mui/material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

// --------- importing other files ---------
import { HomeImg, AboutMe, ContactMe, Skills, MyWork } from '../../pathToAssets/pathToAssets'
import { styles, CustomLink } from './styles'

const Home = () => {
    const classes = styles()

    const animateImg = {
        hover : {
            opacity : 0,
            y : -15,
            transition : {
                type : 'tween',
                ease : 'easeOut'
            }
        } 
    }

    const animateText = {
        initial : {
            opacity : 0,
            y : -100,
        },
        hover : {
            opacity : 1,
            y : -100,
            transition : {
                delay : 0.1,
                type : 'tween',
                ease : 'easeOut'
            }
        }
    }

    return (
        <Container 
            maxWidth = 'xl'>
            <Grid 
                container
                sx = {{height : '100vh', position : 'relative'}}>
                <Grid 
                    item xs = {12}
                    className = {classes.firstRow}
                    display = 'flex'
                    justifyContent = 'center'
                    gap = {3}>
                    <Box 
                        position = 'relative'
                        display = 'flex'
                        justifyContent = 'space-evenly'
                        alignItems = 'center'>
                        <Box className = {classes.navBackground}>
                            <div className ="custom-shape-divider-bottom-1655291501">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path 
                                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                        opacity=".25" 
                                        className="shape-fill"></path>
                                    <path 
                                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                        opacity=".5" 
                                        className="shape-fill"></path>
                                    <path 
                                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                                        className="shape-fill"></path>
                                </svg>
                            </div>
                        </Box>
                        <Grid 
                            container 
                            sx = {{zIndex : 10}}
                            justifyContent = 'center'
                            alignItems = 'center'
                            spacing = {10}>
                            <Grid item>
                                <Box>
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
                            </Grid>
                            <Grid item>
                                <Box sx = {{zIndex : 10}}>
                                    <Image fluid src = {HomeImg} alt = 'a person' />
                                </Box>
                            </Grid>
                        </Grid>                            
                    </Box>
                </Grid> 
                <Grid item xs = {12}
                    className = {classes.secondRow}
                    display = 'flex'
                    justifyContent = 'center'
                    alignItems = 'center'>
                    <Box
                        position = 'absolute'
                        display = 'flex'
                        justifyContent = 'center'
                        alignItems = 'center'
                        gap = {15}
                        sx = {{zIndex : 10}}>
                        <CustomLink to = '/projects'>
                            <Stack
                                component = {motion.div} 
                                initial = 'initial'
                                whileHover = 'hover'
                                justifyContent = 'center'
                                alignItems = 'center'
                                sx = {{overflowY : 'hidden'}}>
                                <Box component = {motion.div} variants = {animateImg} sx = {{zIndex : 10}}>
                                    <Image fluid width = {200} src = {MyWork} alt = 'my projects' />
                                </Box>
                                <Typography 
                                    component = {motion.p}
                                    variants = {animateText}
                                    variant = 'h5' 
                                    className = 'text-center'
                                    sx = {{
                                        position : 'relative',
                                        zIndex : 5
                                    }}>
                                    Projects
                                </Typography>
                            </Stack>
                        </CustomLink>
                        <CustomLink to = 'skills'>
                            <Stack
                                component = {motion.div} 
                                initial = 'initial'
                                whileHover = 'hover'
                                justifyContent = 'center'
                                alignItems = 'center'
                                sx = {{overflowY : 'hidden'}}>
                                <Box component = {motion.div} variants = {animateImg} sx = {{zIndex : 10}}>
                                    <Image fluid width = {200} src = {Skills} alt = 'my projects' />                            
                                </Box>
                                <Typography 
                                    component = {motion.p}
                                    variants = {animateText}
                                    variant = 'h5' 
                                    className = 'text-center'
                                    sx = {{
                                        position : 'relative',
                                        zIndex : 5
                                    }}>
                                    Skills
                                </Typography>
                            </Stack>
                        </CustomLink>
                        <CustomLink to = 'contact-me'>
                            <Stack
                                component = {motion.div} 
                                initial = 'initial'
                                whileHover = 'hover'
                                justifyContent = 'center'
                                alignItems = 'center'
                                sx = {{overflowY : 'hidden'}}>
                                <Box component = {motion.div} variants = {animateImg} sx = {{zIndex : 10}}>
                                    <Image fluid width = {200} src = {ContactMe} alt = 'my projects' />
                                </Box>
                                <Typography 
                                    component = {motion.p}
                                    variants = {animateText}
                                    variant = 'h5' 
                                    className = 'text-center'
                                    sx = {{
                                        position : 'relative',
                                        zIndex : 5
                                    }}>
                                    Contact me
                                </Typography>
                            </Stack>
                        </CustomLink>
                        <CustomLink to = 'about-me'>
                            <Stack
                                component = {motion.div} 
                                initial = 'initial'
                                whileHover = 'hover'
                                justifyContent = 'center'
                                alignItems = 'center'
                                sx = {{overflowY : 'hidden'}}>
                                <Box component = {motion.div} variants = {animateImg} sx = {{zIndex : 10}}>
                                    <Image fluid width = {270} src = {AboutMe} alt = 'my projects' />
                                </Box>
                                <Typography 
                                    component = {motion.p}
                                    variants = {animateText}
                                    variant = 'h5' 
                                    className = 'text-center'
                                    sx = {{
                                        position : 'relative',
                                        zIndex : 5
                                    }}>
                                    a little about me
                                </Typography>
                            </Stack>
                        </CustomLink>
                        {/* <CustomLink to = '/projects'>
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
                        </CustomLink> */}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home