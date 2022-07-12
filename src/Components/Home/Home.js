import { Link } from 'react-router-dom'
import { Grid, Typography, Container, Box, Stack, Divider, Button } from '@mui/material'
import { Image } from 'react-bootstrap'

// --------- importing other files ---------
import { Person } from '../../pathToAssets/pathToAssets'

const Home = () => {

    return (
        <Grid container 
            direction = 'row'
            justifyContent = 'center'
            alignItems = 'center'
            spacing = {5}
            sx = {{height : '100%'}}>
            <Grid item xs = {6}
                display = 'flex'
                flexDirection = 'column'
                justifyContent = 'space-evenly'
                gap = {2}
                sx = {{height : '100%'}}>
                <Box
                    display = 'flex'
                    flexDirection = 'column'
                    gap = {2} 
                    sx = {{color : '#FFFFFF'}}>
                    <Typography 
                        variant = 'body' 
                        sx = {{
                            fontFamily : 'Oswald, sans-serif',
                            fontSize : '1.5rem'}}>
                        hey there, this is
                    </Typography>
                    <Stack>
                        <Stack 
                            direction = 'row' 
                            spacing = {2} 
                            sx = {{fontFamily : 'Titan One, cursive'}}>
                            <Typography 
                                variant = 'h3' 
                                sx = {{
                                    color : '#EF3237', 
                                    fontFamily : 'Titan One, cursive'}}>
                                Rahul
                            </Typography>
                            <Typography 
                                variant = 'h3' 
                                sx = {{fontFamily : 'Titan One, cursive'}}>
                                Rana
                            </Typography>
                        </Stack>
                        <Typography 
                            variant = 'body' 
                            sx = {{
                                ml:12,
                                fontSize : '1.5rem',
                                fontFamily : 'Yanone Kaffeesatz, sans-serif'}}>
                            - a front end web developer
                        </Typography>
                    </Stack>
                    <Divider />
                    <Typography 
                        variant = 'body' 
                        sx = {{
                            fontSize : '1.3rem', 
                            mt:5,
                            fontFamily : 'Comfortaa, cursive'}}>
                        I love to develop single page web applications with the help of many amazing and popular libraries
                    </Typography>
                </Box>
                <Box sx = {{mt:5}}>
                    <Button 
                        variant = 'contained' 
                        color = 'primary'
                        sx = {{
                            borderRadius : 0
                        }}>
                        Resume
                    </Button>
                </Box>
            </Grid>
            <Grid item xs = {6} sx = {{height : '100%'}}>
                <Box sx = {{p:3}}>
                    <Image src = {Person} width = {480} alt = 'a person' />
                </Box>
            </Grid>
        </Grid>
            
    )
}

export default Home