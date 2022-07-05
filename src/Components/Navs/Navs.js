import { Box, Stack, Typography, Divider } from '@mui/material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faGears, faPhone, faUserLarge } from '@fortawesome/free-solid-svg-icons'

// ------- importing from other files -------
import { CustomLink, animateImg, animateText } from './styles'
import { MyWork, Skills, ContactMe, AboutMe } from '../../pathToAssets/pathToAssets'

const Navs = (props) => {
    const { pathname } = useLocation()

    return (
        <Stack 
            spacing = {3}>
            <CustomLink to = 'my-work'>
                <Stack direction = 'row' spacing = {1}>
                    <FontAwesomeIcon icon = {faHouseChimney} />
                    <Typography 
                        variant = 'h5'
                        sx = {{color : 'white'}}>
                        My Work
                    </Typography>
                </Stack>
            </CustomLink>
            <CustomLink to = 'my-skills'>
                <Stack direction = 'row' spacing = {1}>
                    <FontAwesomeIcon icon = {faGears} />
                    <Typography 
                        variant = 'h5'
                        sx = {{color : 'white'}}>
                        My Skills
                    </Typography>
                </Stack>
            </CustomLink>
            <CustomLink to = 'certificates'>
                <Typography 
                    variant = 'h5'
                    sx = {{color : 'white'}}>
                    Certificates
                </Typography>
            </CustomLink>
            <CustomLink to = 'contact-me'>
                <Stack direction = 'row' spacing = {1}>
                    <FontAwesomeIcon icon = {faPhone} />
                    <Typography 
                        variant = 'h5'
                        sx = {{color : 'white'}}>
                        Contact Me
                    </Typography>
                </Stack>
            </CustomLink>
            <CustomLink to = 'about-me'>
                <Stack direction = 'row' spacing = {1}>
                    <FontAwesomeIcon icon = {faUserLarge} />
                    <Typography 
                        variant = 'h5'
                        sx = {{color : 'white'}}>
                        About Me
                    </Typography>
                </Stack>
            </CustomLink>
        </Stack>
    )
}

export default Navs