import { Box, Stack, Typography, Divider } from '@mui/material'
import { HomeOutlined, WorkOutlineOutlined, CallOutlined, PersonOutline } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faGears, faPhone, faUserLarge, faBriefcase } from '@fortawesome/free-solid-svg-icons'

// ------- importing from other files -------
import { CustomLink, animateImg, animateText } from './styles'
import { MyWork, Skills, ContactMe, AboutMe } from '../../pathToAssets/pathToAssets'

const Navs = (props) => {
    const { pathname } = useLocation()

    return (
        <Stack 
            spacing = {7}
            direction = 'row'
            alignItems = 'center'
            justifyContent = 'center'>
            <CustomLink to = ''>
                <Stack 
                    direction = 'row' 
                    alignItems = 'center'
                    sx = {{color : '#939BBD'}}
                    spacing = {2}>
                    <HomeOutlined sx = {{fontSize : '2.1rem', textShadow : '10px 10px 5px #EF3237'}} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-work'>
                <Stack 
                    direction = 'row' 
                    alignItems = 'center'
                    spacing = {2}
                    sx = {{color : '#939BBD'}}>
                    <WorkOutlineOutlined sx = {{fontSize : '2.1rem'}} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-skills'>
                <Stack 
                    direction = 'row' 
                    alignItems = 'center'
                    sx = {{color : '#939BBD'}}
                    spacing = {2}>
                    <FontAwesomeIcon icon = {faGears} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'contact-me'>
                <Stack 
                    direction = 'row' 
                    alignItems = 'center'
                    sx = {{color : '#939BBD'}}
                    spacing = {2}>
                    <CallOutlined sx = {{fontSize : '2.1rem'}} />
                </Stack>
            </CustomLink>
            <CustomLink to = 'about-me'>
                <Stack 
                    direction = 'row' 
                    alignItems = 'center'
                    sx = {{color : '#939BBD'}}
                    spacing = {2}>
                    <PersonOutline sx = {{fontSize : '2.1rem'}} />
                </Stack>
            </CustomLink>
        </Stack>
    )
}

export default Navs