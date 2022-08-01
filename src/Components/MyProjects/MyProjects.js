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
        <motion.div
            initial = {{y : '100vh'}}
            animate = {{y : 0}}
            exit = {{y : '-100vh'}}>
            <CustomStack 
                direction = 'row'
                justifyContent = 'center'
                alignItems = 'center'
                spacing = {2}>
                <Button 
                    className = {classes.slideButton}
                    disableRipple
                    variant = 'outlined'
                    color = 'orangish'
                    onClick = {previousHandler}>
                    <ArrowLeftRounded sx = {{fontSize : '5rem'}} />
                </Button>
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
                                    sx = {{pl:1.2, pr:1.2}}>
                                    <Typography 
                                        variant = 'h5'
                                        className = {classes.projectTitle}>
                                        {proj.projectName}
                                    </Typography>
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
                                    <Stack direction = 'row' sx = {{mb:1}}>
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
                                            className = {classes.subTitle}>
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
                                                        variant = 'outlined'/>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                    <Box sx = {{mb:2, width : 150}} >
                                        <Button
                                            className = {classes.moreButton}
                                            color = 'orangish'
                                            size = 'small'
                                            variant = 'outlined'
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
                                            animate = {{height : '95%'}}
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
                                            <Box sx = {{mt:1}}>
                                                <Typography 
                                                    variant = 'h6'
                                                    className = {classes.about}>
                                                    About this app
                                                </Typography>
                                                <ul>
                                                    {proj.description.map(detail => {
                                                        return (
                                                            <li key = {detail}
                                                                style = {{color : '#939BBD'}}>
                                                                <Typography
                                                                    variant = 'body'
                                                                    sx = {{fontFamily : "'Baloo 2', cursive"}}>
                                                                    {detail}
                                                                    </Typography>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>                                            
                                            </Box>
                                        </Box>  
                                    }
                                    </AnimatePresence>
                                </Grid>
                            </Grid>
                        </Main>
                    ))}
                </Box>
                <Button 
                    disableRipple
                    className = {classes.slideButton}
                    color = 'orangish'
                    variant = 'outlined'
                    onClick = {nextHandler}>
                    <ArrowRightRounded sx = {{fontSize : '5rem'}} />
                </Button>
            </CustomStack>
        </motion.div>
    )
}

export default MyProjects