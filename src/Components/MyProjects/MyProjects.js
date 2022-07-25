import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Grid, Box, Typography, Button, Stack, Chip, Fab } from '@mui/material'
import { DoneAllRounded, Web, GitHub } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

// ------- importing from other files -----------
import { Main, ProjImage, CustomButton, ThumbnailContainer, styles, Parent, transition_rightToLeft, transition_leftToRight } from './styles'
import { projects } from '../../myProjects/myProjects'
import * as identifiers from '../../Identifiers/identifiers'
import ProjectTitle from './ProjectTitle/ProjectTitle'

const MyProjects = () => {
    const classes = styles()
    const { pathname } = useLocation()

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
                    cssClass = {classes.weatherLogo} />
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
                    cssClass = {classes.covidLogo}/>
            )
            break;
        case identifiers.toDo:
            logo = (
                <Stack direction = 'row'>
                    <DoneAllRounded sx = {{fontSize : '1.7rem', color : 'greyish.main'}} />
                    <h1 className = {classes.toDoHeader}>
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
                        className = {[classes.burgerHeader, classes.burgerHeader_2].join(' ')}>
                        CLARISH
                    </Typography>
                    <ProjectTitle
                        logo = {projects[0].logo}
                        alt = 'Burger builder logo'
                        fontSize = '1.2rem'
                        iconSize = {65}
                        cssClass = {classes.burgerLogo} />
                </>
            )
            break;
        default:
            return null
    }

    return (
        <Parent 
            justifyContent = 'center'
            alignItems = 'center'>
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
                            className = 'lead' 
                            variant = 'body'
                            sx = {{color : '#ffffff'}}>
                            {currentProj.description}
                        </Typography>
                        <Box sx = {{mt:3}}>
                            <CustomButton
                                href = {currentProj.preview}
                                disableRipple 
                                sx = {{mr:1}} 
                                variant = 'contained' 
                                color = 'orangish'>
                                <Web sx = {{mr:1}} />
                                <Typography variant = 'body'>
                                    View
                                </Typography>
                            </CustomButton>
                            <CustomButton
                                href = {currentProj.sourceCode}
                                disableRipple 
                                variant = 'contained' 
                                color = 'orangish'>
                                <GitHub sx = {{mr:1}} />
                                <Typography variant = 'body'>
                                    Code
                                </Typography>
                            </CustomButton>
                        </Box>
                    </Grid>
                </Grid>
            </Main>
            <ThumbnailContainer 
                display = 'flex'
                flexWrap = 'wrap'
                justifyContent = 'flex-end'
                alignItems = 'center'>
                {projects.map((proj, index) => {
                    return (
                        <Box
                            className = {[classes.thumbnail, index === projects.length - 1 && classes.lastThumbnail].join(' ')}
                            key = {proj.projectName}
                            component = {motion.div}
                            initial = 'start'
                            whileHover = 'end'
                            animate = {currentProj.projectName === proj.projectName ? 'end' : 'initial'}
                            whileFocus = 'end'
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
                                            <DoneAllRounded sx = {{fontSize : '1.7rem', color : 'greyish.main'}} />
                                            <h1 className = {classes.toDoHeader}>
                                                to do
                                            </h1>
                                        </Stack>
                                    :
                                        <>
                                            {proj.projectName === identifiers.burger &&
                                                <Typography 
                                                    variant = 'body'
                                                    className = {[classes.burgerHeader, classes.burgerHeader_1].join(' ')}>
                                                    CLARISH
                                                </Typography>                                            
                                            }
                                            <Image fluid src = {proj.logo} width = {60} alt = {`${proj.projectName} logo`} />
                                        </>
                                    }
                                    <Typography 
                                        className = {classes.projName}
                                        variant = 'h5'>
                                        {proj.projectName}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box 
                                component = {motion.div}
                                variants = {transition_rightToLeft}
                                sx = {{
                                    position : 'absolute', 
                                    top : 0,
                                    width : 'inherit',
                                    height : '1px',
                                    backgroundColor : 'orangish.main'}}></Box>
                            <Box 
                                component = {motion.div}
                                variants = {transition_leftToRight}
                                sx = {{
                                    position : 'absolute',
                                    bottom : 0, 
                                    width : 'inherit',
                                    height : '1px',
                                    backgroundColor : 'orangish.main'}}></Box>
                        </Box>
                    )
                })}
            </ThumbnailContainer>
        </Parent>
    )
}

export default MyProjects