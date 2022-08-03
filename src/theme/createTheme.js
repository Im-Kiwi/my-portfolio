import { createTheme } from "@mui/material/styles"

// creating custom theme, saving color palette which will mostly used in this app
export const customTheme = createTheme({
    palette : {
        mode : 'dark',
        orangish : {
            main : '#EF3237'
        },
        blackish : {
            main : '#19222f'
        },
        greyish : {
            main : '#939BBD'
        }
    }
})