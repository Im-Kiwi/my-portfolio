import { Grid, Typography, Box, useMediaQuery } from '@mui/material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

// -------- importing from other files ---------
import { Me } from '../../pathToAssets/pathToAssets'
import { styles } from './styles'

const AboutMe = () => {
    const classes = styles()
    
    // creating css breakpoints
    const break_1121_790 = useMediaQuery('(max-width : 1121px) and {max-height : 790px)')
    const break_1026 = useMediaQuery('(max-width : 1026px)')
    
    return (
        <Box 
            className = {classes.container}
            display = 'flex'
            alignItems = {break_1121_790 ? 'flex-start' : 'center'}
            justifyContent = 'center'
            sx = {{}}
            // below props to add transition effect
            component = {motion.div}
            initial = {{y : 500, opacity : 0}}
            animate = {{y : 0, opacity : 1}}
            exit = {{y : -500, opacity : 0}}
            transition = {{type : 'tween'}}>
            <Grid container
                className = {classes.main}
                alignItems = 'center'
                justifyContent = 'center'
                spacing = {1}>
                <Grid item xs = {break_1026 ? 12 : 7}
                    sx = {{p:1}}>
                    <Typography 
                        variant = 'h5'
                        className = {classes.quote}>
                        "that feeling when you finally fix a bug, so incredible" ;) <br />
                    </Typography>
                    <ul className = {classes.list}>
                        <li style = {{marginBottom : 15}}>
                            I remember made a blog in college consisting of movies information which i made using blogspot.com, thats where i started 
                            showing interest in web development.
                        </li>
                        <li style = {{marginBottom : 15}}>
                            After graduation in Computer engineering, i started learning web development using online learning platforms like 
                            Udacity and Udemy.
                        </li>
                        <li style = {{marginBottom : 15}}>
                            Pandemic really changed everything, during the begining of the lockdown i went back to my home and from there i 
                            continued my journey of web development.
                        </li>
                        <li style = {{marginBottom : 15}}>
                            With a part time job in general shop i kept on learning many libraries which can help me to build professional
                            app.
                        </li>
                        <li>
                            Despite of my passion in front end web development, i love to play video games, do exercise, watch tv-series and 
                            movies.    
                        </li>
                    </ul>
                </Grid>
                <Grid item xs = {break_1026 ? 12 : 5}
                    display = 'flex'
                    justifyContent = 'center'>
                    <Image 
                        className = 'mx-auto' 
                        fluid rounded 
                        src = {Me} 
                        height = {300} 
                        width = {300} 
                        alt = 'my image' />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe