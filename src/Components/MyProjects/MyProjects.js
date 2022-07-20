import { useState } from 'react'
import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material'
import { DoneAllRounded } from '@mui/icons-material'
import { Image } from 'react-bootstrap'

// ------- importing from other files -----------
import { projects } from '../../myProjects/myProjects'

const MyProjects = () => {

    // this will store the selected project
    const [currentProj, setCurrentProj] = useState({})

    return (
        <Stack 
            justifyContent = 'center'
            alignItems = 'center'
            sx = {{
                height : '100%',
                position : 'relative', 
                overflowY : 'auto'}}>
            <Box 
                sx = {{
                    mt:2,
                    width : '100%',
                    height : 400, 
                    background : 'orange'}}>
                <Grid container>
                    <Grid item xs = {6}>
                        <Image fluid src = {currentProj.image} alt = {currentProj.projectName} />
                    </Grid>
                    <Grid item xs = {6}></Grid>
                </Grid>
            </Box>
            <Box 
                display = 'flex'
                flexWrap = 'wrap'
                justifyContent = 'flex-start'
                alignItems = 'center'
                gap = {1}
                sx = {{mt:5}}>
                {projects.map(proj => {
                    return (
                        <Stack
                            key = {proj.projectName}
                            component = {'button'}
                            justifyContent = 'center'
                            alignItems = 'center' 
                            onClick = {() => setCurrentProj(proj)}                        
                            sx = {{
                                width : 230,
                                height : 130, 
                                p:1,
                                border : 'none',
                                background : 'none'}}>
                            <Stack 
                                justifyContent = 'space-between'
                                alignItems = 'center'
                                sx = {{mt:1, width : '100%', height : '100%'}}>
                                {!proj.logo ? 
                                    <Stack direction = 'row'>
                                        <DoneAllRounded sx = {{fontSize : '2rem', color : 'greyish.main'}} />
                                        <h1 
                                            style = {{
                                                color : '#f03658', 
                                                fontSize: '2.5rem', 
                                                fontWeight : 600, 
                                                fontFamily: 'Skranji, cursive'}}>
                                            to do
                                        </h1>
                                    </Stack>
                                :
                                    <Image fluid src = {proj.logo} width = {70} alt = {`${proj.projectName} logo`} />
                                }
                                <Typography 
                                    variant = 'h5'
                                    sx = {{
                                        fontFamily : 'Concert One, cursive',
                                        color : 'greyish.main'}}>
                                    {proj.projectName}
                                </Typography>
                            </Stack>
                        </Stack>
                    )
                })}
            </Box>
        </Stack>
    )
}

export default MyProjects