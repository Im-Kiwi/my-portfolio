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
                    <Typography 
                        variant = 'h5' 
                        sx = {{
                            textAlign : 'center',
                            mb:3,
                            fontSize : '1.7rem',
                            color : 'greyish.main',
                            fontFamily : 'Londrina Solid, cursive'}}>
                        Wow what a journey its been for me so far :) <br />
                        {/* There was a time when i used to get scared from coding, but hey whats fun in escaping from your fear, its better to overcome from it.
                        With the help of online learning sites like udacity, udemy and ofc youtube, i see myself as a confident Front end web developer.
                        Now making a good professional level apps is so much fun, damn that feeling is so amazing when u build something so beautiful from scratch.
                        This makes me hungry to learn even more and thus i wont stop learning :).
                        There are lots of things to learn in web development field and im excited to take a glance on it.
                        Despite of my profession, i like to play video games and do exercise, browsing, watch TV series and movies.                     */}
                    </Typography>
                    <ul 
                        style = {{
                            color : 'white',
                            fontSize : '1.1rem',
                            fontFamily : "'Nixie One', cursive"}}>
                        <li style = {{marginBottom : 15}}>
                            I remember made a blog in college consist of movies information which i made using blogspot.com, thats where i started 
                            showing interest in web development field
                        </li>
                        <li style = {{marginBottom : 15}}>
                            After graduating in Computer engineering i started learning about web development using online learning platforms like 
                            Udacity and Udemy
                        </li>
                        <li style = {{marginBottom : 15}}>
                            Pandemic was really a tough moment for me, but went back to my home during pandemic and stayed there, from their i continue
                            my journey of web development
                        </li>
                        <li style = {{marginBottom : 15}}>Did a part time job in a general store, while learing programming side by side, learnt many libraries by 
                            myself during that period
                        </li>
                        <li>
                            Despite of my profession, i love to play video games, do exercise, watch tv-series and movies.    
                        </li>
                    </ul>
                </Grid>
                <Grid item xs = {5}
                    display = 'flex'
                    justifyContent = 'center'>
                    <Image 
                        className = 'mx-auto' 
                        fluid rounded 
                        src = {Me} 
                        height = {300} 
                        width = {300} 
                        alt = 'my image'
                        style = {{
                            boxShadow : '0 0 50px 2px #EF3237',
                            padding : 10
                        }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe