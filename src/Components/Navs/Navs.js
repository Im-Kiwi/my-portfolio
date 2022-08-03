import { Stack, Chip, useMediaQuery } from '@mui/material'
import { HomeOutlined, WorkOutlineOutlined, CallOutlined, PersonOutline, EngineeringOutlined } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// ------- importing from other files -------
import { CustomLink, styles, showLabelAnime, iconAnime } from './styles'
import { paths } from '../../Paths/paths'

const Navs = () => {
    const classes = styles()
    const { pathname } = useLocation()

    // creating css breakpoints
    const break_525 = useMediaQuery('(max-width : 555px)')
    const break_430 = useMediaQuery('(max-width : 430px)')

    return (
        <Stack 
            className = {classes.main}
            spacing = {break_525 ? break_430 ? 2 : 4 : 8}
            direction = 'row'
            alignItems = 'center'
            justifyContent = 'center'>
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
                        size = {break_525 ? 'small' : 'medium'}
                        label = 'Home' />
                    <HomeOutlined  
                        className = {classes.svgIcon}
                        component = {motion.svg} 
                        variants = {iconAnime} />
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
                        size = {break_525 ? 'small' : 'medium'}
                        variant = 'outlined'
                        label = 'My Work' />
                        <WorkOutlineOutlined 
                            className = {classes.svgIcon}
                            component = {motion.svg} 
                            variants = {iconAnime} />
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
                        size = {break_525 ? 'small' : 'medium'}
                        variant = 'outlined'
                        label = 'My Skills' />
                        <EngineeringOutlined 
                            className = {classes.svgIcon}
                            component = {motion.svg} 
                            variants = {iconAnime} />
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
                    size = {break_525 ? 'small' : 'medium'}
                    variant = 'outlined'
                    label = 'Contact Me' />
                    <CallOutlined 
                        className = {classes.svgIcon}
                        component = {motion.svg} 
                        variants = {iconAnime} />
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
                    size = {break_525 ? 'small' : 'medium'}
                    variant = 'outlined' 
                    label = 'About Me' />
                    <PersonOutline component = {motion.svg} variants = {iconAnime} />
            </Stack>
            </CustomLink>
        </Stack>
    )
}

export default Navs