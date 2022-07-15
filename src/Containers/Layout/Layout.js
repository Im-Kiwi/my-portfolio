import { Box, Container, Grid, Stack } from "@mui/material"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Image } from "react-bootstrap"

// ------- importing from other files ----------
import Home from "../../Components/Home/Home"
import MyProjects from "../../Components/MyProjects/MyProjects"
import Skills from "../../Components/Skills/Skills"
import ContactMe from "../../Components/ContactMe/ContactMe"
import AboutMe from "../../Components/AboutMe/AboutMe"
import Navs from "../../Components/Navs/Navs"
import { BgImg } from "../../pathToAssets/pathToAssets"

const Layout = () =>    {
    return (
        <>
            <Box
                display = 'flex'
                justifyContent = 'center'
                alignItems = 'center'
                sx = {{
                    height : '100vh',
                    width : '100vw',
                    background : 'linear-gradient(50deg, rgba(239,50,55,1) 0%, rgba(191,47,53,1) 0%, rgba(115,41,51,1) 5%, rgba(69,37,49,1) 8%, rgba(38,35,48,1) 12%, rgba(25,34,47,1) 15%, rgba(25,34,47,1) 85%, rgba(38,35,48,1) 88%, rgba(69,37,49,1) 92%, rgba(115,41,51,1) 95%, rgba(191,47,53,1) 100%, rgba(239,50,55,1) 100%)',
                    // backgroundColor : '#1B212C'
                    }}>
                    <Container sx = {{zIndex : 10, position : 'relative'}}>
                            <Routes>
                                <Route path = '' element = {<Home />} />
                                <Route path = 'my-work' element = {<MyProjects />} />
                                <Route path = 'my-skills' element = {<Skills />} />
                                <Route path = 'contact-me' element = {<ContactMe />} />
                                <Route path = 'about-me' element = {<AboutMe />} />
                                <Route path = '*' element = {<Navigate to ='/' />} />
                            </Routes>
                    </Container>
                    <Stack
                        direction = 'row'
                        justifyContent = 'center'
                        sx = {{
                            zIndex : 20,
                            position : 'fixed',
                            bottom : 30,
                            mb:3,
                            width : 500,
                            height : 55,
                            ml:2,
                            p:1.5}}>
                        <Navs />
                    </Stack>
            </Box>
            
        </>
    )
}

export default Layout