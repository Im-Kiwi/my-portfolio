import { Link } from 'react-router-dom'
import { Grid, Typography, Container, Box, Stack } from '@mui/material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

// --------- importing other files ---------
import { HomeImg, AboutMe, ContactMe, Skills, MyWork } from '../../pathToAssets/pathToAssets'
import { styles, CustomLink } from './styles'
import Navs from '../Navs/Navs'

const Home = () => {
    const classes = styles()

    return (
        <Stack 
            justifyContent = 'center'
            alignItems = 'flex-start'
            sx = {{
                position : 'relative'}}>
            <Typography variant = 'h1'>Hi</Typography>
            <Typography variant = 'h1'>Iam Rahul Rana</Typography>
            <Typography variant = 'h4'>a front end web developer</Typography>
        </Stack>
            
    )
}

export default Home