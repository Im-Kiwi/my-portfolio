import { Container, Grid, Typography, Stack, Box } from '@mui/material'
import { Image } from 'react-bootstrap'

// ------- importing from other files -------
import { Javascript, Css, Html, Bootstrap, MaterialUi, Firebase, FramerMotion, ReactJs, Redux, Git, ReactBootstrap  } from '../../pathToAssets/pathToAssets'
import { CustomGrid } from './styles'

const Skills = () => {
    return (
        <Grid container
            justifyContent = 'space-between'
            alignItems = 'center'
            gap = {1}
            sx = {{width : '100%', height : '100%', textAlign : 'center'}}>
            <CustomGrid item xs = {3} 
                display = 'flex'
                flexDirection = 'column'
                alignItems = 'center'
                gap = {5}>
                <Typography 
                    variant = 'h5' 
                    className = 'text-light text-center'>Languages</Typography>
                <Box
                    display = 'flex'
                    justifyContent = 'center'
                    flexWrap = 'wrap'
                    gap = {3}>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Html} width = {50} alt = 'html svg image' />
                        <Typography className = 'text-light'>HTML</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Css} width = {50} alt = 'css svg image' />
                        <Typography className = 'text-light'>CSS</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Javascript} width = {50} alt = 'javascript svg image' />
                        <Typography className = 'text-light'>Javascript</Typography>
                    </Stack>
                </Box>
            </CustomGrid>
            <CustomGrid item xs = {4}
                display = 'flex'
                flexDirection = 'column'
                alignItems = 'center'
                gap = {5}>
                <Typography variant = 'h5' className = 'text-light text-center'>Libraries</Typography>
                <Box
                    display = 'flex'
                    justifyContent = 'center'
                    alignItems = 'center'
                    flexWrap = 'wrap'
                    gap = {3}>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {ReactJs} width = {50} alt = 'reactjs svg image' />
                        <Typography className = 'text-light'>React.js</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {MaterialUi} width = {50} alt = 'material-ui svg image' />
                        <Typography className = 'text-light'>Material-ui</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Bootstrap} width = {50} alt = 'bootstrap svg image' />
                        <Typography className = 'text-light'>Bootstrap</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {ReactBootstrap} width = {50} alt = 'react bootstrap svg image' />
                        <Typography className = 'text-light'>React bootstrap</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {FramerMotion} width = {50} alt = 'framer motion svg image' />
                        <Typography className = 'text-light'>Framer motion</Typography>
                    </Stack>
                </Box>
            </CustomGrid>
            <CustomGrid item xs = {4} 
                display = 'flex'
                flexDirection = 'column'
                alignItems = 'center'
                gap = {5}>
                <Typography variant = 'h5' className = 'text-light'>Tools & others</Typography>
                <Box
                    display = 'flex'
                    justifyContent = 'space-between'
                    flexWrap = 'wrap'
                    gap = {3}>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Redux} width = {50} alt = 'Redux toolkit svg image' />
                        <Typography className = 'text-light'>Redux toolkit</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Firebase} width = {50} alt = 'firebase svg image' />
                        <Typography className = 'text-light'>Firebase</Typography>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <Image fluid src = {Git} width = {50} alt = 'git svg image' />
                        <Typography className = 'text-light'>Git</Typography>
                    </Stack>
                </Box>
            </CustomGrid>
        </Grid>
    )
}

export default Skills