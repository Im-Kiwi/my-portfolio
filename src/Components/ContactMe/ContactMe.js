import { useRef } from 'react'
import { Container, Grid, TextField, Paper, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

// ------ importing from other files ---------
import SideDrawer from '../SideDrawer/SideDrawer'

const ContactMe = () => {

    const form = useRef()

    const submitMessage = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_o4bschf', 'template_tg8zgih', form.current, 'vHNGIvVEG6oZ_6_gA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Container maxWidth = 'xl'>
            <Grid container>
                <Grid item xs = {3}>
                    <SideDrawer />
                </Grid>
                <Grid item xs = {9}>
                    <Paper sx = {{mt:10, p:2, width : 700}} elevation = {2}>
                        <form ref = {form} onSubmit = {(event) => submitMessage(event)}>
                            <Stack 
                                spacing = {5}>
                                <TextField
                                    size = 'small'
                                    variant = 'standard'
                                    type = 'text'
                                    label = 'Your Name' />
                                <TextField
                                    size = 'small'
                                    variant = 'standard'
                                    type = 'text'
                                    label = 'Your Email address' />
                                <TextField
                                    size = 'small'
                                    variant = 'standard'
                                    type = 'text'
                                    label = 'Subject' />
                                <TextField
                                    multiline
                                    minRows = {4}
                                    size = 'small'
                                    type = 'text'
                                    label = 'Message'
                                    variant = 'filled' />
                                <Button 
                                    variant = 'contained' 
                                    color = 'success'
                                    type = 'submit'
                                    sx = {{width : 200}}>
                                    Send
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactMe