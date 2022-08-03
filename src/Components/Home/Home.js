import { Grid, Typography, Box, Stack, Divider, Button, IconButton, useMediaQuery } from '@mui/material'
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

// --------- importing other files ---------
import { Person } from '../../pathToAssets/pathToAssets'
import { styles, pageTransition } from './styles'

const Home = () => {
    const classes = styles()

    // creating css breakpoints
    const break_980 = useMediaQuery('(max-width : 980px)')
    const break_400 = useMediaQuery('(max-width : 400px)')

    return (
        <Grid container 
            direction = 'row'
            justifyContent = 'center'
            alignItems = 'center'
            spacing = {5}
            // below props for page transition effect
            component = {motion.div}
            variants = {pageTransition}
            initial = 'start'
            animate = 'end'
            exit = 'exit'
            transition = 'transition'
            sx = {{height : '100%'}}>
            <Grid item xs = {break_980 ? 12 : 6}
                className = {classes.introduction}
                display = 'flex'
                flexDirection = 'column'
                justifyContent = 'center'
                gap = {2}>
                <Box
                    display = 'flex'
                    flexDirection = 'column'
                    gap = {1} 
                    sx = {{color : '#FFFFFF'}}>
                    <Typography 
                        variant = 'body1'
                        className = {classes.initialText}>
                        hey there, this is
                    </Typography>
                    <Stack>
                        <Stack 
                            direction = 'row' 
                            spacing = {2} 
                            sx = {{fontFamily : 'Titan One, cursive'}}>
                            <Typography 
                                variant = {break_400 ? 'h4' : 'h3'}
                                className = {classes.firstName}>
                                Rahul
                            </Typography>
                            <Typography 
                                variant = {break_400 ? 'h4' : 'h3'}
                                sx = {{fontFamily : 'Titan One, cursive'}}>
                                Rana
                            </Typography>
                        </Stack>
                        <Typography 
                            variant = 'body' 
                            className = {classes.professionText}>
                            - a front end web developer
                        </Typography>
                    </Stack>
                    <Divider />
                    <Typography 
                        variant = 'body'
                        className = {classes.summary}>
                        I love to develop single page web applications with the help of amazing libraries. <br/>
                        Very much passionate about learning and solving problems.
                    </Typography>
                </Box>
                <Box sx = {{mt:2}}>
                    <Button 
                        className = {classes.resumeBtn}
                        size = {break_400 ? 'small' : 'large'}
                        variant = 'outlined' 
                        color = 'orangish'>
                        <strong>Resume</strong>
                    </Button>
                </Box>
                <Box>
                    <a href = 'https://www.facebook.com/dumKiwi'>
                        <IconButton>
                            <Facebook className = {classes.socialIcons} />
                        </IconButton>
                    </a>
                    <a href = 'https://www.linkedin.com/in/rahul-rana-36057210b'>
                        <IconButton>
                            <LinkedIn className = {classes.socialIcons} />
                        </IconButton>
                    </a>
                    <a href = 'https://github.com/Im-Kiwi'>
                        <IconButton>
                            <GitHub className = {classes.socialIcons} />
                        </IconButton>
                    </a>
                </Box>
            </Grid>
            {!break_980 &&
                <Grid item xs = {break_980 ? 12 : 6} 
                    display = 'flex'
                    alignItems = 'center'
                    justifyContent = 'center'
                    sx = {{height : '100%'}}>
                    <Box sx = {{p:3}}>
                        <Image fluid src = {Person} width = {480} alt = 'a person' />
                    </Box>
                </Grid>
            }
        </Grid>
    )
}

export default Home