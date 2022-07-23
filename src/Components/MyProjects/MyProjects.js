import { useState } from 'react'
import { Container, Grid, Box, Typography, Button, Stack, Chip, Fab } from '@mui/material'
import { DoneAllRounded, Web, GitHub } from '@mui/icons-material'
import { Image } from 'react-bootstrap'

// ------- importing from other files -----------
import { Thumbnail, Main, ProjImage } from './styles'
import { projects } from '../../myProjects/myProjects'
import * as identifiers from '../../Identifiers/identifiers'
import ProjectTitle from './ProjectTitle/ProjectTitle'

const MyProjects = () => {

    // this will store the selected project
    const [currentProj, setCurrentProj] = useState(projects[0])

    let logo

    switch (currentProj.projectName) {
        case identifiers.weather:
            logo = (
                <ProjectTitle
                    title = 'WEATHER CHECK'
                    logo = {projects[3].logo}
                    alt = 'weather check logo'
                    fontFamily = 'Chela One, cursive'
                    fontSize = '1.2rem'
                    iconSize = {55}
                    gap = {2}
                    cssProperties = {{
                        border : 'solid 1px #457b9d',
                        height : 70,
                        width : 300,
                        borderRadius : 50,
                        padding : 3,
                        background: 'linear-gradient(90deg, #fdfffc 34%, #457b9d 20%)'}} />
            )
            break;
        case identifiers.covid:
            logo = (
                <ProjectTitle
                    title = 'vidTracker'
                    logo = {projects[2].logo}
                    alt = 'covid tracker logo'
                    fontFamily = 'Black Ops One, cursive'
                    fontSize = '1.2rem'
                    iconSize = {55}
                    gap = {0}
                    cssProperties = {{
                        height : 70,
                        width : 300,
                        padding : 3 }}/>
            )
            break;
        case identifiers.toDo:
            logo = (
                <Stack direction = 'row'>
                    <DoneAllRounded sx = {{fontSize : '1.7rem', color : 'greyish.main'}} />
                    <h1 
                        style = {{
                            color : '#f03658', 
                            fontSize: '2rem', 
                            fontWeight : 600, 
                            fontFamily: 'Skranji, cursive'}}>
                        to do
                    </h1>
                </Stack>
            )
            break;
        case identifiers.burger:
            logo = (
                <>
                    <Typography 
                        variant = 'body' 
                        sx = {{
                            mb:-2.4, 
                            fontSize : '0.75rem', 
                            fontFamily : 'Yuji Mai, serif',
                            color : '#EBB21D'}}>
                        CLARISH
                    </Typography>
                    <ProjectTitle
                        logo = {projects[0].logo}
                        alt = 'Burger builder logo'
                        fontSize = '1.2rem'
                        iconSize = {65}
                        cssProperties = {{
                            width : 400 }} />
                </>
            )
            break;
        default:
            return null
    }

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
                    spacing = {5}
                    sx = {{height : '100%', width : 'inherit'}}>
                    <ProjImage item xs = {4}
                        display = 'flex'
                        flexDirection = 'column'
                        alignItems = 'center'
                        gap = {2}>
                        {logo}
                        <Image fluid src = {currentProj.image} width = {920} alt = {currentProj.projectName} />
                    </ProjImage>
                    <Grid item xs = {8}
                        display = 'flex'
                        flexDirection = 'column'
                        justifyContent = 'flex-start'
                        gap = {1}>
                        <Typography 
                            variant = 'h6'
                            sx = {{color : 'orangish.main'}}>
                            Built by using
                        </Typography>
                        <Box
                            display = 'flex'
                            flexWrap = 'wrap'
                            gap = {1}>
                            {currentProj.technologies.map(tech => {
                                return (
                                    <Chip
                                        key = {tech}
                                        label = {tech}
                                        size = 'small'
                                        sx = {{
                                            width : 105,
                                            backgroundColor : 'greyish.main'}}/>
                                )
                            })}
                        </Box>
                        <Typography 
                            variant = 'h6'
                            sx = {{color : 'orangish.main', mt:3}}>
                            About this app
                        </Typography>
                        <Typography 
                            variant = 'body'
                            sx = {{color : 'greyish.main'}}>
                            {currentProj.description}
                        </Typography>
                        <Box sx = {{mt:3}}>
                            <Button
                                disableRipple 
                                sx = {{mr:1, borderRadius : 0}} 
                                variant = 'contained' 
                                color = 'orangish'>
                                <Web sx = {{mr:1}} />
                                <Typography variant = 'body'>
                                    Live
                                </Typography></Button>
                            <Button
                                disableRipple 
                                sx = {{borderRadius : 0}}
                                variant = 'outlined' 
                                color = 'orangish'>
                                <GitHub sx = {{mr:1}} />
                                <Typography variant = 'body'>
                                    Code
                                </Typography></Button>
                        </Box>
                    </Grid>
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
                                        <>
                                            {proj.projectName === identifiers.burger &&
                                                <Typography 
                                                    variant = 'body' 
                                                    sx = {{
                                                        position : 'relative',
                                                        top : 7,
                                                        fontFamily : 'Yuji Mai, serif',
                                                        fontSize : '0.8rem', 
                                                        color : '#EBB21D'}}>
                                                    CLARISH
                                                </Typography>                                            
                                            }
                                            <Image fluid src = {proj.logo} width = {70} alt = {`${proj.projectName} logo`} />
                                        </>
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