import { Box, Stack, Typography, Divider, Chip } from '@mui/material'
import { HomeOutlined, WorkOutlineOutlined, CallOutlined, PersonOutline, EngineeringOutlined } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faGears, faPhone, faUserLarge, faBriefcase } from '@fortawesome/free-solid-svg-icons'

// ------- importing from other files -------
import { CustomLink, styles, animateImg, animateText } from './styles'
import { MyWork, Skills, ContactMe, AboutMe } from '../../pathToAssets/pathToAssets'

const Navs = (props) => {
    const classes = styles()
    const { pathname } = useLocation()

    const showLabelAnime = {
        initial : {
            scale : 0
        },
        whileHover : {
            scale : 1,
            transition : {
                ease : 'easeOut'
            }
        }
    }

    const iconAnime = {
        whileHover : {
            transform : 'translateY(-10px) scale(1.3)'
        }
    }

    return (
        <Stack 
            spacing = {7}
            direction = 'row'
            alignItems = 'center'
            justifyContent = 'center'
            sx = {{position : 'relative', zIndex : 30}}>
            <CustomLink to = ''>
                <Stack 
                    className = {classes.icon}
                    component = {motion.div}
                    initial = 'initial'
                    whileHover = 'whileHover'
                    alignItems = 'center'
                    justifyContent = 'center'
                    spacing = {2}>
                    <Chip 
                        component = {motion.div} 
                        variants = {showLabelAnime} 
                        className = {classes.chip} 
                        variant = 'outlined'
                        label = 'Home' />
                        <HomeOutlined />
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-work'>
                <Stack 
                    className = {classes.icon}
                    component = {motion.div}
                    initial = 'initial'
                    whileHover = 'whileHover'
                    alignItems = 'center'
                    justifyContent = 'center'
                    spacing = {2}>
                    <Chip 
                        component = {motion.div} 
                        variants = {showLabelAnime} 
                        variant = 'outlined'
                        className = {classes.chip} 
                        label = 'My Work' />
                        <WorkOutlineOutlined />
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-skills'>
            <Stack 
                className = {classes.icon}
                component = {motion.div}
                initial = 'initial'
                whileHover = 'whileHover'
                alignItems = 'center'
                justifyContent = 'center'
                spacing = {2}>
                <Chip 
                    component = {motion.div} 
                    variants = {showLabelAnime} 
                    variant = 'outlined'
                    className = {classes.chip} 
                    label = 'My Skills' />
                    <EngineeringOutlined />
            </Stack>
            </CustomLink>
            <CustomLink to = 'contact-me'>
            <Stack 
                className = {classes.icon}
                component = {motion.div}
                initial = 'initial'
                whileHover = 'whileHover'
                alignItems = 'center'
                justifyContent = 'center'
                spacing = {2}>
                <Chip 
                    className = {classes.chip} 
                    component = {motion.div} 
                    variants = {showLabelAnime} 
                    variant = 'outlined'
                    label = 'Contact Me' />
                    <CallOutlined />
            </Stack>
            </CustomLink>
            <CustomLink to = 'about-me'>
            <Stack 
                className = {classes.icon}
                component = {motion.div}
                initial = 'initial'
                whileHover = 'whileHover'
                alignItems = 'center'
                justifyContent = 'center'
                spacing = {2}>
                <Chip 
                    className = {classes.chip} 
                    component = {motion.div} 
                    variants = {showLabelAnime}
                    variant = 'outlined' 
                    label = 'About Me' />
                    <PersonOutline />
            </Stack>
            </CustomLink>
        </Stack>
    )
}

export default Navs