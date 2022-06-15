import { Box, Grid } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"

// ------- importing from other files ----------
import Home from "../../Components/Home/Home"
import MyProjects from "../../Components/MyProjects/MyProjects"
import Skills from "../../Components/Skills/Skills"
import ContactMe from "../../Components/ContactMe/ContactMe"
import AboutMe from "../../Components/AboutMe/AboutMe"

const Layout = () => {

    return (
        <Box sx = {{width : '100vw', height : '100vh'}}>
            <Routes>
                <Route path = '' element = {<Home />} />
                <Route path = 'projects' element = {<MyProjects />} />
                <Route path = 'skills' element = {<Skills />} />
                <Route path = 'contact-me' element = {<ContactMe />} />
                <Route path = 'about-me' element = {<AboutMe />} />
                <Route path = '*' element = {<Navigate to ='/' />} />
            </Routes>
        </Box>
    )
}

export default Layout