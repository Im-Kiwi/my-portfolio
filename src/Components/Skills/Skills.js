import { Grid, Typography, Stack, Box, useMediaQuery } from '@mui/material'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

// ------- importing from other files -------
import { Javascript, Css, Html, Bootstrap, MaterialUi, Firebase, FramerMotion, ReactJs, Redux, Git, ReactBootstrap  } from '../../pathToAssets/pathToAssets'
import { CustomGrid, styles } from './styles'

const Skills = () => {
    const classes = styles()

    // creating CSS breakpoints
    const break_981 = useMediaQuery('(max-width : 981px)')

    return (
        <Grid container
            className = {classes.main}
            justifyContent = 'center'
            alignItems = {break_981 ? 'flex-start' : 'center'}
            gap = {3}
            component = {motion.div}
            initial = {{y : 500, opacity : 0}}
            animate = {{y : 0, opacity : 1}}
            exit = {{y : -500, opacity : 0}}
            transition = {{type : 'tween'}}>
            <CustomGrid item xs = {break_981 ? 12 : 3} 
                display = 'flex'
                flexDirection = 'column'
                alignItems = 'center'
                gap = {5}>
                <Typography 
                    variant = 'h5' 
                    className = {classes.title}>
                    Languages
                </Typography>
                <Box
                    display = 'flex'
                    justifyContent = 'center'
                    flexWrap = 'wrap'
                    gap = {3}>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Html} width = {50} alt = 'html svg image' />
                        <Typography 
                            variant = 'body1' 
                            className = {classes.skillName}>
                            HTML
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Css} width = {50} alt = 'css svg image' />
                        <Typography 
                            variant = 'body1'
                            className = {classes.skillName}>CSS</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Javascript} width = {50} alt = 'javascript svg image' />
                        <Typography 
                            variant = 'body1'
                            className = {classes.skillName}>
                            Javascript
                        </Typography>
                    </Stack>
                </Box>
            </CustomGrid>
            <CustomGrid item xs = {break_981 ? 12 : 4}
                display = 'flex'
                flexDirection = 'column'
                alignItems = 'center'
                gap = {5}>
                <Typography 
                    variant = 'h5' 
                    className = {classes.title}>
                    Libraries
                    </Typography>
                <Box
                    display = 'flex'
                    justifyContent = 'center'
                    alignItems = 'center'
                    flexWrap = 'wrap'
                    gap = {3}>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {ReactJs} width = {50} alt = 'reactjs svg image' />
                        <Typography 
                            variant = 'body1' 
                            className = {classes.skillName}>
                            React.js
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {MaterialUi} width = {50} alt = 'material-ui svg image' />
                        <Typography
                            variant = 'body1'
                            className = {classes.skillName}>
                            Material-ui
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Bootstrap} width = {50} alt = 'bootstrap svg image' />
                        <Typography
                            variant = 'body1' 
                            className = {classes.skillName}>
                            Bootstrap
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {ReactBootstrap} width = {50} alt = 'react bootstrap svg image' />
                        <Typography 
                            variant = 'body1'
                            className = {classes.skillName}>
                            React bootstrap
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {FramerMotion} width = {50} alt = 'framer motion svg image' />
                        <Typography 
                            variant = 'body1'
                            className = {classes.skillName}>Framer motion</Typography>
                    </Stack>
                </Box>
            </CustomGrid>
            <CustomGrid item xs = {break_981 ? 12 : 3} 
                display = 'flex'
                flexDirection = 'column'
                alignItems = 'center'
                gap = {5}>
                <Typography 
                    variant = 'h5' 
                    className = {classes.title}>
                    Tools & others
                </Typography>
                <Box
                    display = 'flex'
                    justifyContent = 'center'
                    flexWrap = 'wrap'
                    gap = {3}>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Redux} width = {50} alt = 'Redux toolkit svg image' />
                        <Typography 
                            variant = 'body1'
                            className = {classes.skillName} >
                            Redux toolkit
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Firebase} width = {50} alt = 'firebase svg image' />
                        <Typography 
                            variant = 'body1'
                            className = {classes.skillName}>
                            Firebase
                        </Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Git} width = {50} alt = 'git svg image' />
                        <Typography 
                            variant = 'body1' 
                            className = {classes.skillName}>
                            Git
                        </Typography>
                    </Stack>
                </Box>
            </CustomGrid>
            {break_981 &&
                <div style = {{height:5, width : 1}}></div>
            }
        </Grid>
    )
}

export default Skills