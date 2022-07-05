import { Box, Container, Grid, Stack } from "@mui/material"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"

// ------- importing from other files ----------
import Home from "../../Components/Home/Home"
import MyProjects from "../../Components/MyProjects/MyProjects"
import Skills from "../../Components/Skills/Skills"
import ContactMe from "../../Components/ContactMe/ContactMe"
import AboutMe from "../../Components/AboutMe/AboutMe"
import Navs from "../../Components/Navs/Navs"
import { Triangle } from "../styles"

const Layout = () =>    {
    return (
        <Grid container
            justifyContent = 'center'
            alignItems = 'center'
            sx = {{
                overflow : 'hidden',
                backgroundColor : 'white', 
                height : '100vh'}}>
            <Grid 
                item xs = {3} 
                display = 'flex'
                alignItems = 'center'
                justifyContent = 'flex-start'
                sx = {{position : 'relative', height : '100vh'}}>
                <Stack
                    justifyContent = 'center'
                    sx = {{
                        zIndex : 20, 
                        position : 'relative', 
                        backgroundColor : '#7678ed',
                        height : 500,
                        p:3,
                        borderRadius : 50,
                        ml : 2}}>
                    <Navs />
                </Stack>
            </Grid>
            <Grid item xs = {9}>
                <Container>
                    <Routes>
                        <Route path = '' element = {<Home />} />
                        <Route path = 'my-work' element = {<MyProjects />} />
                        <Route path = 'my-skills' element = {<Skills />} />
                        <Route path = 'contact-me' element = {<ContactMe />} />
                        <Route path = 'about-me' element = {<AboutMe />} />
                        <Route path = '*' element = {<Navigate to ='/' />} />
                    </Routes>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Layout