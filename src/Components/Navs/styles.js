import { styled, makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { customTheme } from '../../theme/createTheme'

const color = customTheme.palette

 // styling nav links
export const CustomLink = styled(Link)({
    textDecoration : 'none',
})

export const styles = makeStyles({
    main : {
        position : 'relative !important',
        zIndex : 30
    }, 
    icon : {
        color : color.orangish.main,
        background : 'none',
        border : 'none',
        '& svg' : {
            fontSize : '2.3rem',
        }
    },
    chip : {
        position : 'absolute',
        bottom : -27,
        color : color.orangish.main + '!important',
        borderColor : color.orangish.main + '!important'
    }
}) 

// for transitioning nav label
export const showLabelAnime = {
    initial : {
        scale : 0,
    },
    final : {
        scale : 1,
        transition : {
            ease : 'easeOut'
        }
    }
}

// for transitioning nav icons
export const iconAnime = {
    initial : {
        scale : 1
    },
    final : {
        originY : 3,
        scale : 1.4
    },
    exit : {
        originY : 0,
        scale : 1
    }
}
