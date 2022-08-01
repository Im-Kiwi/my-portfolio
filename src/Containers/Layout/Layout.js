import { Box, Container, Stack, Typography } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { Copyright } from '@mui/icons-material'
import { AnimatePresence } from "framer-motion"
import { useLocation } from 'react-router-dom'

// ------- importing from other files ----------
import Home from "../../Components/Home/Home"
import MyProjects from "../../Components/MyProjects/MyProjects"
import Skills from "../../Components/Skills/Skills"
import ContactMe from "../../Components/ContactMe/ContactMe"
import AboutMe from "../../Components/AboutMe/AboutMe"
import Navs from "../../Components/Navs/Navs"

const Layout = () =>    {
    const { pathname } = useLocation()

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
                <Box 
                    sx = {{
                        width : '100%', 
                        height : 65}}>
                    <Container maxWidth = 'xl'
                        sx = {{
                            position : 'relative',
                            top : 10,
                            left : 0,
                            color : 'orangish.main'}}>
                        <Typography 
                            variant = 'h4'
                            sx = {{fontFamily : "'Rampart One', cursive"}}>
                            {'<RR />'}
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth = 'xl'
                    sx = {{
                        height : 'calc(100% - 110px)', 
                        zIndex : 10, 
                        overflowY : 'auto'}}>
                        <AnimatePresence>
                            <Routes key = {pathname}>
                                <Route path = '' element = {<Home />} />
                                <Route path = 'my-work' element = {<MyProjects />} />
                                <Route path = 'my-skills' element = {<Skills />} />
                                <Route path = 'contact-me' element = {<ContactMe />} />
                                <Route path = 'about-me' element = {<AboutMe />} />
                                <Route path = '*' element = {<Navigate to ='/' />} />
                            </Routes>
                        </AnimatePresence>
                </Container>
                <Box sx = {{width : '100%', height : 145}}></Box>
                <Stack
                    direction = 'row'
                    justifyContent = 'center'
                    sx = {{
                        zIndex : 20,
                        position : 'fixed',
                        bottom : 25,
                        mb:3,
                        width : 550,
                        height : 55,
                        ml:2,
                        p:1.5}}>
                    <Navs />
                </Stack>
                <Stack
                    direction = 'row' 
                    alignItems = 'center'
                    position = 'fixed'
                    sx = {{
                        bottom : 0,
                        right : 20,
                        color : 'orangish.main'
                    }}>
                    <Copyright sx = {{fontSize : '1rem'}} />
                    <Typography variant = 'subtitle2'>
                        copyright {new Date().getFullYear()}, developed by Rahul Rana
                    </Typography>
                </Stack>
            </Stack>
            
        </>
    )
}

export default Layout