import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

// -------- importing from other files ---------
import { CustomLink } from './styles'
import Navs from '../Navs/Navs'

const SideDrawer = () => {

    return (
        <Stack
            justifyContent = 'center'
            alignItems = 'center'
            sx = {{height : '100%'}}>
            <Link to = '/'>Home</Link>
            <Navs 
                imgWidth = {150}
                aboutMeImgWidth = {200} />
        </Stack>
    )
}

export default SideDrawer