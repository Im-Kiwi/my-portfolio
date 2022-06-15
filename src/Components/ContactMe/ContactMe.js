import { Container, Grid, TextField, Paper, Stack, Button } from '@mui/material'

// ------ importing from other files ---------
import SideDrawer from '../SideDrawer/SideDrawer'

const ContactMe = () => {

    return (
        <Container maxWidth = 'xl'>
            <Grid container>
                <Grid item xs = {3}>
                    <SideDrawer />
                </Grid>
                <Grid item xs = {9}>
                    <Paper sx = {{mt:10, p:2}} elevation = {2}>
                        <form>
                            <Stack 
                                spacing = {2}>
                                <TextField
                                    size = 'small'
                                    type = 'text'
                                    label = 'Your Name' />
                                <TextField
                                    size = 'small'
                                    type = 'text'
                                    label = 'Your Email address' />
                                <TextField
                                    multiline
                                    minRows = {4}
                                    size = 'small'
                                    type = 'text'
                                    label = 'Message' />
                                <Button 
                                    variant = 'contained' 
                                    color = 'success'
                                    type = 'submit'
                                    sx = {{width : 200}}>Send</Button>
                            </Stack>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactMe