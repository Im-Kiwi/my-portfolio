import { useState } from 'react'
import { Box, Button, useMediaQuery, Stack } from '@mui/material'
import { ArrowLeftRounded, ArrowRightRounded } from '@mui/icons-material'
import { v4 as uniqueId } from 'uuid'
import { motion } from 'framer-motion'

// ------- importing from other files -----------
import { styles, CustomStack } from './styles'
import { projects } from '../../myProjects/myProjects'
import Project from './Project/Project'
import { burger, toDo, covid, weather } from '../../Identifiers/identifiers'

const MyProjects = () => {
    const classes = styles()  // to access the css defined class names

    // creating css breakpoints
    const break_742 = useMediaQuery('(max-width : 725px)')

    // preparing the updated projects list
    const proj_one = {...projects[0]}
    const proj_two = {...projects[1]}
    const proj_three = {...projects[2]}
    const proj_four = {...projects[3]}
    const sampleList = [{...projects[3], id : 'proj_0'}, proj_one, proj_two, proj_three, proj_four, {...projects[0], id : 'proj_5'}]

    const [projectList, setProjectList] = useState(sampleList) // contains the list of projects
    const [showDetails, setShowDetails] = useState(null) // this will help to open the more detail box of the respective project

    // this method will control next slide
    const nextHandler = () => {
        const tempList = [...projectList]
        const temp = {...tempList[2], id : uniqueId()}
        tempList.shift()
        tempList.push(temp)
        setProjectList([...tempList])
    }

    // method to control previous slide
    const previousHandler = () => {
        const tempList = [...projectList]
        const temp = {...tempList[tempList.length-3], id : uniqueId()}
        tempList.pop()
        tempList.unshift(temp)
        setProjectList([...tempList])
    }

    // this method will help to open the more detail box of the respective project
    const moreDetailsHandler = (proj) => {
        const project = projectList.find((p) => p.id === proj.id)
        if (project) {
            setShowDetails(project.id)
        }
    }

    // animating active indicator of carousel
    let pos = 0
    switch(projectList[1].projectName) {
        case burger:
            pos = 0
            break;
        case toDo:
            pos = (8*5.27)
            break;
        case covid:
            pos = (16*5.27)
            break;
        case weather:
            pos = (24*5.27)
            break;
        default:
            pos = 0
    }

    return (
        <>
            {break_742 ?
                <Box 
                    display = 'flex'
                    justifyContent = 'center'
                    // below props are for transitioning the entire component
                    component = {motion.div}
                    initial = {{y : 500, opacity : 0}}
                    animate = {{y : 0, opacity : 1}}
                    exit = {{y : -500, opacity : 0}}
                    transition = {{type : 'tween'}}>
                    <Stack
                        className = {classes.noCarousel}
                        direction = 'column'
                        justifyContent = 'flex-start'
                        alignItems = 'center'
                        spacing = {2}
                        sx = {{mb:3}}>
                        {/* list of project cards */}
                        {projects.map((proj, index) => (
                            <Box key = {proj.id}>
                                <Project
                                    proj = {proj}
                                    moreDetailsHandler = {moreDetailsHandler}
                                    showDetails = {showDetails}
                                    setShowDetails = {setShowDetails} />
                            </Box>
                        ))}
                    </Stack>
                </Box>
            :
                <Box
                    display = 'flex'
                    flexDirection = 'column'
                    justifyContent = {break_742 ? 'flex-start' : 'center'}
                    alignItems = 'center'
                    sx = {{height : '100%'}}
                    // below props are for transitioning the entire component
                    component = {motion.div}
                    initial = {{y : 500, opacity : 0}}
                    animate = {{y : 0, opacity : 1}}
                    exit = {{y : -500, opacity : 0}}
                    transition = {{type : 'tween'}}>
                    <CustomStack 
                        direction = {break_742 ? 'column' : 'row'}
                        justifyContent = 'center'
                        alignItems = 'center'
                        spacing = {2}>
                        {/* previous control button for carousel */}
                        <Button 
                            className = {classes.slideButton}
                            disableRipple
                            variant = 'outlined'
                            color = 'orangish'
                            onClick = {previousHandler}>
                            <ArrowLeftRounded sx = {{fontSize : '5rem'}} />
                        </Button>
                        {/* below is the main carousel */}
                        <Stack
                            className = {classes.carousel}
                            direction = 'row'
                            justifyContent = 'flex-start'
                            alignItems = 'center'
                            spacing = {2}>
                            {/* list of project cards */}
                            {projectList.map((proj, index) => (
                                <Box key = {proj.id}>
                                    <Project
                                        proj = {proj}
                                        moreDetailsHandler = {moreDetailsHandler}
                                        showDetails = {showDetails}
                                        setShowDetails = {setShowDetails} />
                                </Box>
                            ))}
                        </Stack>
                        {/* carousel forward button */}
                        <Button 
                            disableRipple
                            className = {classes.slideButton}
                            color = 'orangish'
                            variant = 'outlined'
                            onClick = {nextHandler}>
                            <ArrowRightRounded sx = {{fontSize : '5rem'}} />
                        </Button>
                    </CustomStack>
                    <Box
                        display = 'flex'
                        gap = {4}
                        sx = {{mt:1}}>
                        {/* below is the carousel indicators  */}
                        <Box 
                            position = 'absolute'
                            className = {classes.selectedDot}
                            // below props adds transition effect on these indicators
                            component = {motion.div}
                            initial = {{x:0}}
                            animate = {{x:`${pos}px`}}
                            transition = {{type : 'tween'}}></Box>
                        {projectList.filter((proj, index) => {
                            if (index !== 0 && index !== 4) {
                                return proj
                            } else return null
                        }).map(proj => {
                            return (
                                <Box 
                                    key = {proj.id}
                                    className = {classes.dot}></Box>                                
                            )
                        })}
                    </Box>
                </Box>
            }   
        </>
    )
}

export default MyProjects