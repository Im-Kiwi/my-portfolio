import { Box, Container, Stack, Typography } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { Copyright } from '@mui/icons-material'
import { AnimatePresence } from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom'

// ------- importing from other files ----------
import Home from "../../Components/Home/Home"
import MyProjects from "../../Components/MyProjects/MyProjects"
import Skills from "../../Components/Skills/Skills"
import ContactMe from "../../Components/ContactMe/ContactMe"
import AboutMe from "../../Components/AboutMe/AboutMe"
import Navs from "../../Components/Navs/Navs"

const Layout = () =>    {
    const location = useLocation() //consists the navigation information about the page 
    const navigate = useNavigate() // hook to navigate from one path to another

    return (
        <>
            <Stack
                justifyContent = 'center'
                alignItems = 'center'
                sx = {{
                    height : '100vh',
                    width : '100vw',
                    position : 'relative',
                    background : 'linear-gradient(50deg, rgba(239,50,55,1) 0%, rgba(191,47,53,1) 0%, rgba(115,41,51,1) 5%, rgba(69,37,49,1) 8%, rgba(38,35,48,1) 12%, rgba(25,34,47,1) 15%, rgba(25,34,47,1) 85%, rgba(38,35,48,1) 88%, rgba(69,37,49,1) 92%, rgba(115,41,51,1) 95%, rgba(191,47,53,1) 100%, rgba(239,50,55,1) 100%)'}}>
                {/* app logo */}
                <Box
                    sx = {{
                        width : '100%', 
                        height : 65}}>
                    <Container maxWidth = 'xl'
                        sx = {{
                            position : 'relative',
                            top : 10,
                            left : 0}}>
                        <Box 
                            component = 'button'
                            onClick = {() => navigate('/')}
                            sx = {{
                                background : 'none',
                                color : 'orangish.main',
                                border : 'none'}}>
                            <Typography 
                                variant = 'h4'
                                sx = {{fontFamily : "'Rampart One', cursive"}}>
                                {'<Ranaul />'}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Container maxWidth = 'xl'
                    sx = {{
                        height : 'calc(100% - 193px)', 
                        zIndex : 10, 
                        overflowY : 'scroll',
                        overflowX : 'hidden'}}>
                        <AnimatePresence exitBeforeEnter>
                            {/* react router used to route the main pages */}
                            <Routes location = {location} key = {location.pathname}>
                                <Route path = '' element = {<Home />} />
                                <Route path = 'my-work' element = {<MyProjects />} />
                                <Route path = 'my-skills' element = {<Skills />} />
                                <Route path = 'contact-me' element = {<ContactMe />} />
                                <Route path = 'about-me' element = {<AboutMe />} />
                                <Route path = '*' element = {<Navigate to ='/' />} />
                            </Routes>
                        </AnimatePresence>
                </Container>
                {/* navigation container */}
                <Box sx = {{width : '100%', height : 128}}></Box> 
                {/* navigation panel */}
                <Stack
                    direction = 'row'
                    justifyContent = 'center'
                    alignItems = 'flex-end'
                    sx = {{
                        zIndex : 20,
                        position : 'fixed',
                        bottom : 25,
                        mb:3,
                        width : 550,
                        height : 128,
                        ml:2,
                        p:1.5}}>
                    <Navs />
                </Stack>
                {/* footer  */}
                <Stack
                    direction = 'row' 
                    alignItems = 'center'
                    justifyContent = 'flex-end'
                    position = 'fixed'
                    sx = {{
                        bottom : 0,
                        right : 20,
                        width : '100%',
                        color : 'greyish.main',
                        opacity : 0.7
                    }}>
                    <Copyright sx = {{fontSize : '1rem'}} />
                    <Typography 
                        variant = 'subtitle2'
                        sx = {{fontSize : '0.75rem'}} >
                        copyright {new Date().getFullYear()}, developed by Rahul Rana
                    </Typography>
                </Stack>
            </Stack>
            
        </>
    )
}

export default Layout