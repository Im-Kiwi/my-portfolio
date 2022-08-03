import { motion, AnimatePresence } from "framer-motion"
import { Grid, Stack, Box, Button, IconButton, Typography, Chip, useMediaQuery } from "@mui/material"
import { Image } from 'react-bootstrap'
import { Web, GitHub, CancelRounded } from "@mui/icons-material"

// ------------ importing contents other files ---------------
import { Main, styles, CustomButton } from "./styles"

const Project = ({proj, moreDetailsHandler, showDetails, setShowDetails}) => {
    const classes = styles()

    // creating css breakpoints
    const break_742 = useMediaQuery('(max-width : 725px)')
    const break_545 = useMediaQuery('(max-width : 545px)')

    return (
        <Main
            key = {proj.id}
            // below props are for transition effect
            layout
            component = {motion.div}
            initial = {{x : break_742 ? 0 : -520}}
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
                        fluid 
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
                    <Box sx = {{mb:2, width : '100%'}}>
                        <Typography 
                            variant = 'h6'
                            className = {classes.subTitle}>
                            Built by using
                        </Typography>
                        <Box
                            display = 'flex'
                            justifyContent = 'center'
                            alignItems = 'center'
                            flexWrap = 'wrap'
                            sx = {{width : break_545 ? 300 : 500, margin : 'auto'}}
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
                            className = {classes.detailsContainer}
                            // below props are for transition effect
                            component = {motion.div} 
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
    )
}

export default Project