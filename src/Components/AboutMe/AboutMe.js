import { Grid, Typography, Box } from '@mui/material'
import { Image } from 'react-bootstrap'

// -------- importing from other files ---------
import { Me } from '../../pathToAssets/pathToAssets'

const AboutMe = () => {

    return (
        <Box 
            display = 'flex'
            alignItems = 'center'
            sx = {{height : '100%'}}>
            <Grid container
                alignItems = 'center'
                justifyContent = 'center'
                sx = {{
                    p:2,
                    borderRadius : 10,
                    boxShadow : '0 0 5px 1px #EF3237'}}
                spacing = {1}>
                <Grid item xs = {7}
                    sx = {{p:1}}>
                    <Typography variant = 'body' sx = {{color : 'greyish.main'}}>
                        Wow what a journey its been. <br />
                        There was a time when i used to get scared from coding, but hey whats fun in escaping from your fear, its better to overcome from it.
                        With the help of online learning sites like udacity, udemy and ofc youtube, i see myself as a confident Front end web developer.
                        Now making a good professional level apps is so much fun, damn that feeling is so amazing when u build something so beautiful from scratch.
                        This makes me hungry to learn even more and thus i wont stop learning :).
                        There are lots of things to learn in web development field and im excited to take a glance on it.
                        Despite of my profession, i like to play video games and do exercise, browsing, watch TV series and movies.                    
                    </Typography>
                </Grid>
                <Grid item xs = {5}
                    display = 'flex'
                    justifyContent = 'center'>
                    <Image className = 'mx-auto' fluid roundedCircle src = {Me} height = {300} width = {300} alt = 'my image' />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe