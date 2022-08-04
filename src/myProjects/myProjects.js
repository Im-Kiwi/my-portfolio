import { Weather, CovidTracker, ToDo, BurgerBuilder } from "../pathToAssets/pathToAssets"
import { weather, covid, toDo, burger } from "../Identifiers/identifiers"

// information about the best projects i build
export const projects = [
    {
        id : 'proj_4',
        projectName : burger,
        sourceCode : 'https://github.com/kiwilapa/burger-builder-app',
        preview : 'https://clarish-burgers.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'firebase', 'material-ui', 'react-bootstrap', 'bootstrap', 'framer motion'],
        description : [
            'This app will help a user to create their favourite burger with the help of given ingredients.',
            'Extra perks also included like coldrinks and french fries.',
            'User can save those burgers in their cart and can order it later on.',
            'Authentication feature is also added in this app, only authenticated user can build and buy burgers.',
            'Order can be placed and the status will change depending upon the time.'
        ],
        image : BurgerBuilder,
    },
    {
        id : 'proj_3',
        projectName : toDo,
        sourceCode : 'https://github.com/kiwilapa/to-do-app',
        preview : 'https://kiwi-to-do.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'firebase', 'material-ui', 'react-bootstrap', 'bootstrap', 'axios'],
        description : [
            'This "to do" app is to create multiple tasks by the user for today tomorrow or any day in the future.',
            'User can create, delete, edit tasks and also can forward old task on current day.',
            'Authentication feature is also added so that only authenticated user can manage tasks.',
            'History category is also added, which will be helpful for the user to see what tasks he/she didnt finish which can be forward to the current day schedule.'
        ],
        image : ToDo,
    },
    {
        id : 'proj_2',
        projectName : covid,
        sourceCode : 'https://github.com/kiwilapa/covid-tracker-app',
        preview : 'https://kiwi-covid-tracker.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'react bootstrap', 'bootstrap', 'chartjs', 'axios'],
        description : [
            'Covid tracker app to track covid cases of entire world, each countries, each continents.',
            'Graphically shows the historical data of each month of world & each countries.',
            'Also graphically showed which country and continent is worse affected by the covid.' 
        ],
        image : CovidTracker,
    },
    {
        id : 'proj_1',
        projectName : weather,
        sourceCode : 'https://github.com/kiwilapa/weather-app',
        preview : 'https://kiwi-weather.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'react-bootstrap', 'bootstrap', 'axios'],
        description : [
            'This weather application will give you the weather report for all the cities in the entire world.',
            'The information containes current temperature,humidity, visibility, sunset, sunrise etc.',
            'Weather report contains 3 categories including today weather, weather hourly wise and weather of next couple days.'
        ],
        image : Weather,
    }
]