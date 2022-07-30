import { Weather, WeatherLogo, CovidLogo, BurgerLogo, CovidTracker, ToDo, BurgerBuilder } from "../pathToAssets/pathToAssets"
import { weather, covid, toDo, burger } from "../Identifiers/identifiers"

export const projects = [
    {
        id : 'proj_4',
        projectName : burger,
        sourceCode : 'https://github.com/Im-Kiwi/burger-builder-app',
        preview : 'https://clarish-burgers.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'firebase', 'material-ui', 'react-bootstrap', 'bootstrap', 'framer motion'],
        description : 'This app will help a user to create a their favourite burger with the help of given ingredients. User can save those burgers in their cart and can order it later on. Authentication feature is also added in this app, only authenticated user can build and buy burgers.',
        image : BurgerBuilder,
        logo : BurgerLogo, 
    },
    {
        id : 'proj_3',
        projectName : toDo,
        sourceCode : 'https://github.com/Im-Kiwi/to-do-app',
        preview : 'https://kiwi-to-do.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'firebase', 'material-ui', 'react-bootstrap', 'bootstrap', 'axios'],
        description : 'This to do app is to create multiple tasks by the user for today tomorrow or any day in the future. Authentication feature is also added so that only authenticated user can create, update, delete and save tasks. User can also see their history of tasks, tasks which are not finished can be forward to current day',
        image : ToDo,
        logo : false,
    },
    {
        id : 'proj_2',
        projectName : covid,
        sourceCode : 'https://github.com/Im-Kiwi/covid-tracker-app',
        preview : 'https://kiwi-covid-tracker.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'react bootstrap', 'bootstrap', 'chartjs', 'axios'],
        description : 'Covid tracker app to track covid cases of different countries, continents and global. Graphically shows the historical data of total cases, deaths and recovery in each month of the past few years and also ranks the country and continents on the basis of total cases and deaths.',
        image : CovidTracker,
        logo : CovidLogo,
    },
    {
        id : 'proj_1',
        projectName : weather,
        sourceCode : 'https://github.com/Im-Kiwi/weather-app',
        preview : 'https://kiwi-weather.netlify.app/',
        technologies : ['javascript', 'reactjs', 'css', 'react-bootstrap', 'bootstrap', 'axios'],
        description : 'This weather application will give you the information about weather for all the cities in the entire world',
        image : Weather,
        logo : WeatherLogo,
    }
]