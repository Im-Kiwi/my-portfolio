import { Box, Stack, Typography, Divider, Chip } from '@mui/material'
import { HomeOutlined, WorkOutlineOutlined, CallOutlined, PersonOutline, EngineeringOutlined } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faGears, faPhone, faUserLarge, faBriefcase } from '@fortawesome/free-solid-svg-icons'

// ------- importing from other files -------
import { CustomLink, styles, animateImg, animateText } from './styles'
import { MyWork, Skills, ContactMe, AboutMe } from '../../pathToAssets/pathToAssets'
import { paths } from '../../Paths/paths'

const Navs = () => {
    const classes = styles()
    const { pathname } = useLocation()

    const showLabelAnime = {
        initial : {
            scale : 0
        },
        final : {
            scale : 1,
            transition : {
                ease : 'easeOut'
            }
        }
    }

    const iconAnime = {
        initial : {
            scale : 1
        },
        final : {
            originY : 3,
            scale : 1.3
        },
        exit : {
            originY : 0,
            scale : 1
        }
    }

    return (
        <Stack 
            spacing = {8}
            direction = 'row'
            alignItems = 'center'
            justifyContent = 'center'
            sx = {{position : 'relative', zIndex : 30}}>
            <CustomLink to = ''>
                <Stack 
                    className = {classes.icon}  
                    component = {motion.button}                  
                    initial = 'initial'
                    animate = {paths.home === pathname ? 'final' : 'initial'}
                    whileHover = 'final'
                    whileFocus = 'final'
                    alignItems = 'center'
                    justifyContent = 'center'
                    spacing = {2}>
                    <Chip
                        component = {motion.div} 
                        variants = {showLabelAnime} 
                        className = {classes.chip} 
                        variant = 'outlined'
                        label = 'Home' />
                    <HomeOutlined component = {motion.svg} variants = {iconAnime} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-work'>
                <Stack 
                    className = {classes.icon}
                    component = {motion.button}
                    initial = 'initial'
                    animate = {paths.myWork === pathname ? 'final' : 'initial'}
                    whileHover = 'final'
                    whileFocus = 'final'
                    alignItems = 'center'
                    justifyContent = 'center'
                    spacing = {2}>
                    <Chip 
                        component = {motion.div} 
                        variants = {showLabelAnime} 
                        className = {classes.chip} 
                        variant = 'outlined'
                        label = 'My Work' />
                        <WorkOutlineOutlined component = {motion.svg} variants = {iconAnime} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-skills'>
                <Stack 
                    className = {classes.icon}
                    component = {motion.button}
                    initial = 'initial'
                    animate = {paths.mySkills === pathname ? 'final' : 'initial'}
                    whileHover = 'final'
                    whileFocus = 'final'
                    alignItems = 'center'
                    justifyContent = 'center'
                    spacing = {2}>
                    <Chip 
                        component = {motion.div} 
                        variants = {showLabelAnime} 
                        className = {classes.chip} 
                        variant = 'outlined'
                        label = 'My Skills' />
                        <EngineeringOutlined component = {motion.svg} variants = {iconAnime} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'contact-me'>
            <Stack 
                className = {classes.icon}
                component = {motion.button}
                initial = 'initial'
                animate = {paths.contactMe === pathname ? 'final' : 'initial'}
                whileHover = 'final'
                whileFocus = 'final'
                alignItems = 'center'
                justifyContent = 'center'
                spacing = {2}>
                <Chip 
                    className = {classes.chip} 
                    component = {motion.div} 
                    variants = {showLabelAnime} 
                    variant = 'outlined'
                    label = 'Contact Me' />
                    <CallOutlined component = {motion.svg} variants = {iconAnime} />
            </Stack>
            </CustomLink>
            <CustomLink to = 'about-me'>
            <Stack 
                className = {classes.icon}
                component = {motion.button}
                initial = 'initial'
                animate = {paths.aboutMe === pathname ? 'final' : 'initial'}
                whileHover = 'final'
                whileFocus = 'final'
                alignItems = 'center'
                justifyContent = 'center'
                spacing = {2}>
                <Chip 
                    className = {classes.chip} 
                    component = {motion.div} 
                    variants = {showLabelAnime}
                    variant = 'outlined' 
                    label = 'About Me' />
                    <PersonOutline component = {motion.svg} variants = {iconAnime} />
            </Stack>
            </CustomLink>
        </Stack>
    )
}

export default Navs