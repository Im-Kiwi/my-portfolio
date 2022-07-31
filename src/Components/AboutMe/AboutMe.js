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
                            color : 'orangish.main',
                            fontFamily : 'Londrina Solid, cursive'}}>
                        "that feeling when you finally fix a bug, so incredible" ;) <br />
                    </Typography>
                    <ul 
                        style = {{
                            color : '#939BBD',
                            fontSize : '1.15rem',
                            fontFamily : "'Nixie One', cursive"}}>
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
                            Did a part time job in a general shop for a year, while learning programming side by side, learnt many libraries by 
                            myself during that period.
                        </li>
                        <li>
                            Despite of my passion in front end web development, i love to play video games, do exercise, watch tv-series and 
                            movies.    
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
                        alt = 'my image' />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe