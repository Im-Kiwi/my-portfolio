import { styled } from '@mui/styles'

export const Triangle = styled('div')({
    width: 0,
    height: 0,
    borderLeft: '100px solid #006d77',
    borderTop: '50px solid transparent',
    borderBottom: '50px solid transparent',
    transform : 'scale(7,12)',
})