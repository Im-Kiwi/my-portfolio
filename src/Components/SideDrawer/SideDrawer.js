import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const SideDrawer = () => {

    return (
        <Stack>
            <Link to = '/'>Home</Link>
            <Link to = '/projects'>My Projects</Link>
            <Link to = '/skills'>Skills</Link>
            <Link to = '/contact-me'>Contact me</Link>
            <Link to = '/about-me'>a litte about me</Link>
        </Stack>
    )
}

export default SideDrawer