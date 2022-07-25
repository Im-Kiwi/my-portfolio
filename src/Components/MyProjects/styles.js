import { Box, Stack, Grid, Button } from '@mui/material'
import { styled, makeStyles } from '@mui/styles'
import { customTheme } from '../../theme/createTheme'

const colors = customTheme.palette

export const Parent = styled(Stack)({
    height : '100%',
    width : '100%',
    position : 'relative', 
    overflowY : 'auto'
})

export const ThumbnailContainer = styled(Box)({
    marginTop : 50,
    padding : 10,
})

export const ProjImage = styled(Grid)({
    padding:10, 
})

export const Main = styled(Box)({
    marginTop : 20,
    height : 400, 
    padding : 5,
})

export const CustomButton = styled(Button)({
    color : `${colors.blackish.main} !important`,
    borderRadius : '0 !important',
    '&:hover' : {
        color : '#ffffff',
        boxShadow : `0 0 6px 0 ${colors.orangish.main} !important`
    }
})

export const styles = makeStyles({
    weatherLogo : {
        border : 'solid 1px #457b9d',
        height : 70,
        width : 300,
        borderRadius : 50,
        padding : 3,
        background: 'linear-gradient(90deg, #fdfffc 34%, #457b9d 20%)'
    },
    covidLogo : {
        height : 70,
        width : 300,
        padding : 3 
    },
    toDoHeader : {
        color : '#f03658', 
        fontSize: '2rem', 
        fontWeight : 600, 
        fontFamily: 'Skranji, cursive'
    },
    burgerHeader : {
        position : 'relative',
        fontSize : '0.75rem', 
        fontFamily : 'Yuji Mai, serif',
        color : '#EBB21D'
    },
    burgerHeader_1 : {
        top : 7
    },
    burgerHeader_2 : {
        top : 19
    },
    burgerLogo : {
        width : 400
    },
    projName : {
        fontFamily : 'Concert One, cursive !important',
        color : colors.greyish.main
    }, 
    thumbnail : {
        width : 230,
        height : 130, 
        padding : 10,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        position : 'relative',
        borderLeft : `1px solid ${colors.orangish.main}`,
        overflowX : 'hidden'
    },
    lastThumbnail : {
        borderRight : `1px solid ${colors.orangish.main}`
    }

})

export const transition_rightToLeft = {
    start : {
        left : 230
    },
    end : {
        left : 0
    }
}

export const transition_leftToRight = {
    start : {
        right : 230
    },
    end : {
        right : 0
        
    }
}