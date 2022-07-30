import { useState } from 'react'
import { Grid, Box, Typography, Stack, Chip, Button, IconButton } from '@mui/material'
import { Web, GitHub, ArrowLeftRounded, ArrowRightRounded, HighlightOffRounded, ArrowDropUpRounded, CancelRounded } from '@mui/icons-material'
import { Image } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uniqueId } from 'uuid'

// ------- importing from other files -----------
import { Main, CustomButton, styles, CustomStack } from './styles'
import { projects } from '../../myProjects/myProjects'

const MyProjects = () => {
    const classes = styles()

    // preparing the updated projects list
    const proj_one = {...projects[0]}
    const proj_two = {...projects[1]}
    const proj_three = {...projects[2]}
    const proj_four = {...projects[3]}
    const sampleList = [{...projects[3], id : 'proj_0'}, proj_one, proj_two, proj_three, proj_four, {...projects[0], id : 'proj_5'}]

    const [render, setRender] = useState(false) // will update everytime user clicks on forward and backward button of slider, this is so that the component can re-render
    const [projectList, setProjectList] = useState(sampleList) // contains the list of projects
    const [showDetails, setShowDetails] = useState(null)

    const nextHandler = () => {
        const tempList = [...projectList]
        const temp = {...tempList[2], id : uniqueId()}
        tempList.shift()
        tempList.push(temp)
        console.log(projectList)
        setRender(!render)
        setProjectList([...tempList])
    }

    const previousHandler = () => {
        setRender(!render)
        const tempList = [...projectList]
        const temp = {...tempList[tempList.length-3], id : uniqueId()}
        tempList.pop()
        tempList.unshift(temp)
        setProjectList([...tempList])
    }

    const moreDetailsHandler = (proj) => {
        const project = projectList.find((p) => p.id === proj.id)
        if (project) {
            setShowDetails(project.id)
        }
    }

    return (
        <CustomStack 
            direction = 'row'
            justifyContent = 'center'
            alignItems = 'center'
            spacing = {2}>
            <IconButton 
                color = 'orangish'
                onClick = {previousHandler}>
                <ArrowLeftRounded sx = {{fontSize : '1.5rem'}} />
            </IconButton>
            <Box
                className = {classes.carousel}
                display = 'flex'
                justifyContent = 'flex-start'
                alignItems = 'center'
                gap = {2}>
                {projectList.map((proj, index) => (
                    <Main
                        key = {proj.id}
                        layout
                        component = {motion.div}
                        initial = {{x : -540}}
                        transition = {{duration : 0.5}}>
                        <Grid container
                            className = {classes.cardContainer}>
                            <Grid item xs = {12}
                                display = 'flex'
                                flexDirection = 'column'
                                alignItems = 'center'
                                sx = {{p:1.2}}>
                                <Image 
                                    rounded
                                    src = {proj.image} 
                                    width = {500} 
                                    alt = {proj.projectName}/>
                            </Grid>
                            <Grid item xs = {12}
                                display = 'flex'
                                flexDirection = 'column'
                                justifyContent = 'center'
                                alignItems = 'center'
                                position = 'relative'>                                                              
                                <Stack direction = 'row' sx = {{mb:3}}>
                                    <CustomButton
                                        href = {proj.preview}
                                        disableRipple 
                                        sx = {{mr:1}} 
                                        variant = 'contained' 
                                        color = 'orangish'>
                                        <Web sx = {{mr:1}} />
                                        <Typography 
                                            variant = 'body'
                                            sx = {{fontFamily : 'Audiowide, cursive'}}>
                                            <strong>View</strong>
                                        </Typography>
                                    </CustomButton>
                                    <CustomButton
                                        href = {proj.sourceCode}
                                        disableRipple 
                                        variant = 'contained' 
                                        color = 'orangish'>
                                        <GitHub sx = {{mr:1}} />
                                        <Typography 
                                            variant = 'body'
                                            sx = {{fontFamily : 'Audiowide, cursive'}}>
                                            <strong>Code</strong>
                                        </Typography>
                                    </CustomButton>
                                </Stack>
                                <Box sx = {{mb:2}}>
                                    <Typography 
                                        variant = 'h6'
                                        sx = {{
                                            color : 'orangish.main', 
                                            textAlign : 'center',
                                            mb:1}}>
                                        Built by using
                                    </Typography>
                                    <Box
                                        display = 'flex'
                                        justifyContent = 'center'
                                        flexWrap = 'wrap'
                                        sx = {{width : 500}}
                                        gap = {1}>
                                        {proj.technologies.map(tech => {
                                            return (
                                                <Chip
                                                    key = {tech}
                                                    className = {classes.chip}
                                                    label = {tech}
                                                    size = 'small'
                                                    variant = 'outlined'
                                                    color = 'info'/>
                                            )
                                        })}
                                    </Box>
                                </Box>
                                <Box sx = {{mb:2, width : 150}} >
                                    <Button
                                        color = 'orangish'
                                        sx = {{borderRadius : 50, width : 'inherit'}}
                                        onClick = {() => moreDetailsHandler(proj)}>
                                            <strong>More Details</strong>
                                    </Button>
                                </Box>
                                <AnimatePresence>
                                {showDetails === proj.id && 
                                    <Box
                                        component = {motion.div} 
                                        className = {classes.detailsContainer}
                                        initial = {{height : 0}}
                                        animate = {{height : '100%'}}
                                        exit = {{height : 0}}
                                        transition = {{
                                            type : 'tween',
                                            duration : 0.4}}>
                                        <IconButton disableRipple
                                            className = {classes.closeButton}
                                            size = 'small'
                                            onClick = {() => setShowDetails(false)}>
                                            <CancelRounded sx = {{color : 'orangish.main'}} />
                                        </IconButton>
                                        <Box sx = {{mt:2}}>
                                            <Typography 
                                                variant = 'h6'
                                                sx = {{color : 'orangish.main'}}>
                                                About this app
                                            </Typography>
                                            <Typography
                                                variant = 'body'
                                                sx = {{color : 'greyish.main'}}>
                                                {proj.description}
                                            </Typography>
                                        </Box>
                                    </Box>  
                                }
                                </AnimatePresence>
                            </Grid>
                        </Grid>
                    </Main>
                ))}
            </Box>
            <IconButton 
                color = 'success'
                onClick = {nextHandler}>
                <ArrowRightRounded />
            </IconButton>
        </CustomStack>
    )
}

export default MyProjects