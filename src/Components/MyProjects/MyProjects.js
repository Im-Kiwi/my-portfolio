import { useState } from 'react'
import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material'
import { DoneAllRounded } from '@mui/icons-material'
import { Image } from 'react-bootstrap'

// ------- importing from other files -----------
import { Thumbnail, Main } from './styles'
import { projects } from '../../myProjects/myProjects'

const MyProjects = () => {

    // this will store the selected project
    const [currentProj, setCurrentProj] = useState(projects[0])

    return (
        <Stack 
            justifyContent = 'center'
            alignItems = 'center'
            sx = {{
                height : '100%',
                width : '100%',
                position : 'relative', 
                overflowY : 'auto'}}>
            <Main>
                <Grid container
                    sx = {{height : '100%', width : 'inherit'}}>
                    <Grid item xs = {5}
                        display = 'flex'
                        alignItems = 'center'>
                        <Image fluid src = {currentProj.image} width = {960} alt = {currentProj.projectName} />
                    </Grid>
                    <Grid item xs = {7}></Grid>
                </Grid>
            </Main>
            <Box 
                display = 'flex'
                flexWrap = 'wrap'
                justifyContent = 'flex-start'
                alignItems = 'center'
                gap = {2}
                sx = {{mt:5}}>
                {projects.map(proj => {
                    return (
                        <Thumbnail
                            key = {proj.projectName}
                            justifyContent = 'center'
                            alignItems = 'center' 
                            onClick = {() => setCurrentProj(proj)}>
                            <Box
                                component = 'button'
                                sx = {{border : 'none', background : 'none'}}>
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
                            </Box>
                        </Thumbnail>
                    )
                })}
            </Box>
        </Stack>
    )
}

export default MyProjects