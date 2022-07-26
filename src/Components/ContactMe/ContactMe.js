import { useRef } from 'react'
import { Container, Grid, TextField, Paper, Stack, Button, Box, Typography, Divider, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook, LinkedIn, WhatsApp } from '@mui/icons-material'
import emailjs from '@emailjs/browser'

// ------ importing from other files ---------
import { ContactForm, SubmitButton, ContactTitle, Email, Or } from './styles'

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
        <Stack container
            alignItems = 'center'
            justifyContent = 'center'
            spacing = {1}
            sx = {{height : '100%'}}>
                <ContactForm>
                    <form ref = {form} onSubmit = {(event) => submitMessage(event)}>
                        <Stack 
                            spacing = {3}>
                            <TextField
                                size = 'small'
                                variant = 'outlined'
                                type = 'text'
                                color = 'orangish'
                                label = 'Your Name' />
                            <TextField
                                size = 'small'
                                variant = 'outlined'
                                type = 'text'
                                color = 'orangish'
                                label = 'Your Email address' />
                            <TextField
                                multiline
                                minRows = {4}
                                size = 'small'
                                type = 'text'
                                color = 'orangish'
                                label = 'Message'
                                variant = 'outlined' />
                            <Box>
                                <SubmitButton 
                                    disableRipple
                                    variant = 'contained' 
                                    color = 'orangish'
                                    type = 'submit'
                                    size = 'large'>
                                    <strong>Send</strong>
                                </SubmitButton>
                            </Box>
                        </Stack>
                    </form>
                    <Or variant = 'h5'>OR</Or>
                    <Box
                        display = 'flex' 
                        justifyContent = 'space-between'
                        sx = {{mt:3, width : '100%'}}>
                        <Stack alignItems = 'center'>
                            <ContactTitle variant = 'body'>
                                email me
                            </ContactTitle>
                            <Email variant = 'body'>
                                rahulrana.kiwi@gmail.com
                            </Email>
                        </Stack>
                        <Stack alignItems = 'center'>
                            <ContactTitle variant = 'body'>
                                message me
                            </ContactTitle>
                            <Box>
                                <IconButton sx = {{color : 'greyish.main'}}>
                                    <Facebook sx = {{fontSize : '2.7rem'}}/>
                                </IconButton>
                                <IconButton sx = {{color : 'greyish.main'}}>
                                    <LinkedIn sx = {{fontSize : '2.7rem'}} />
                                </IconButton>
                                <IconButton sx = {{color : 'greyish.main'}}>
                                    <WhatsApp sx = {{fontSize : '2.7rem'}} />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Box>
                </ContactForm>
        </Stack>
    )
}

export default ContactMe