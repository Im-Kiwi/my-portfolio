import { useState } from 'react'
import { Grid, Box, Typography, Stack, Chip } from '@mui/material'
import { DoneAllRounded, Web, GitHub } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

// ------- importing from other files -----------
import { Main, ProjImage, CustomButton, ThumbnailContainer, styles, CustomStack, transition_rightToLeft, transition_leftToRight } from './styles'
import { projects } from '../../myProjects/myProjects'
import * as identifiers from '../../Identifiers/identifiers'
import ProjectTitle from './ProjectTitle/ProjectTitle'

const MyProjects = () => {
    const classes = styles()

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
        <CustomStack 
            direction = 'row'
            justifyContent = 'center'
            alignItems = 'center'
            spacing = {3}>
            <ThumbnailContainer 
                display = 'flex'
                flexDirection = 'column'
                justifyContent = 'center'
                alignItems = 'center'
                gap = {5}>
                {projects.map((proj, index) => {
                    return (
                        <Box
                            className = {classes.thumbnail}
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
                                    sx = {{mt:1, width : 200, height : 70}}>
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
                                            <Image fluid src = {proj.logo} width = {40} alt = {`${proj.projectName} logo`} />
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
                                    height : '2px',
                                    backgroundColor : 'orangish.main'}}></Box>
                            <Box 
                                component = {motion.div}
                                variants = {transition_leftToRight}
                                sx = {{
                                    position : 'absolute',
                                    bottom : 0, 
                                    width : 'inherit',
                                    height : '2px',
                                    backgroundColor : 'orangish.main'}}></Box>
                        </Box>
                    )
                })}
            </ThumbnailContainer>
            <Main>
                <Grid container
                    spacing = {5}
                    sx = {{height : '100%', width : 'inherit'}}>
                    <ProjImage item xs = {12}
                        display = 'flex'
                        flexDirection = 'column'
                        alignItems = 'center'>
                        <Image fluid src = {currentProj.image} width = {500} alt = {currentProj.projectName} />
                        <Box sx = {{mt:3}}>
                            <CustomButton
                                href = {currentProj.preview}
                                disableRipple 
                                sx = {{mr:1}} 
                                variant = 'contained' 
                                color = 'orangish'>
                                <Web sx = {{mr:1}} />
                                <Typography 
                                    variant = 'body'
                                    sx = {{fontFamily : 'Shrikhand, cursive'}}>
                                    <strong>View</strong>
                                </Typography>
                            </CustomButton>
                            <CustomButton
                                href = {currentProj.sourceCode}
                                disableRipple 
                                variant = 'contained' 
                                color = 'orangish'>
                                <GitHub sx = {{mr:1}} />
                                <Typography 
                                    variant = 'body'
                                    sx = {{fontFamily : 'Shrikhand, cursive'}}>
                                    <strong>Code</strong>
                                </Typography>
                            </CustomButton>
                        </Box>
                    </ProjImage>
                    <Grid item xs = {12}
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
                        
                    </Grid>
                </Grid>
            </Main>
            
        </CustomStack>
    )
}

export default MyProjects