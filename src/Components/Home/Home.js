import { Link } from 'react-router-dom'
import { Grid, Typography, Container, Box, Stack, Divider, Button, IconButton } from '@mui/material'
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'
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
                justifyContent = 'center'
                gap = {2}
                sx = {{height : '100%'}}>
                <Box
                    display = 'flex'
                    flexDirection = 'column'
                    gap = {1} 
                    sx = {{color : '#FFFFFF'}}>
                    <Typography 
                        variant = 'body'
                        sx = {{
                            fontFamily : 'Oswald, sans-serif',
                            fontSize : '1.5rem',
                            color : 'greyish.main'}}>
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
                                    color : 'orangish.main', 
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
                            color : 'greyish.main',
                            fontFamily : 'Comfortaa, cursive'}}>
                        I love to develop single page web applications with the help of amazing libraries
                    </Typography>
                </Box>
                <Box sx = {{mt:2}}>
                    <Button 
                        size = 'large'
                        variant = 'outlined' 
                        color = 'orangish'
                        sx = {{
                            '&:hover' : {
                                boxShadow : '0px 0px 4px 0 #EF3237'
                            }
                        }}>
                        <strong>Resume</strong>
                    </Button>
                </Box>
                <Box>
                    <a href = 'https://www.facebook.com/dumKiwi'>
                        <IconButton>
                            <Facebook sx = {{fontSize : '2.5rem', color : 'greyish.main'}} />
                        </IconButton>
                    </a>
                    <a href = 'https://www.linkedin.com/in/rahul-rana-36057210b'>
                        <IconButton>
                            <LinkedIn sx = {{fontSize : '2.5rem', color : 'greyish.main'}} />
                        </IconButton>
                    </a>
                    <a href = 'https://github.com/Im-Kiwi'>
                        <IconButton>
                            <GitHub sx = {{fontSize : '2.5rem', color : 'greyish.main'}} />
                        </IconButton>
                    </a>
                </Box>
            </Grid>
            <Grid item xs = {6} 
                display = 'flex'
                alignItems = 'center'
                sx = {{height : '100%'}}>
                <Box sx = {{p:3}}>
                    <Image src = {Person} width = {480} alt = 'a person' />
                </Box>
            </Grid>
        </Grid>
            
    )
}

export default Home