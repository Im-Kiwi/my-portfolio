import { Weather, WeatherLogo, CovidLogo, BurgerLogo, CovidTracker, ToDo, Burger } from "../pathToAssets/pathToAssets"
import { weather, covid, toDo, burger } from "../Identifiers/identifiers"

export const projects = [
    {
        projectName : burger,
        sourceCode : '',
        preview : '',
        technologies : ['javascript', 'reactjs', 'css', 'firebase', 'material-ui', 'react-bootstrap', 'bootstrap', 'framer motion'],
        description : 'This app will help a user to create a their favourite burger with the help of given ingredients. User can save those burgers in their cart and can order it later on. Authentication feature is also added in this app, only authenticated user can build and buy burgers.',
        image : Burger,
        logo : BurgerLogo, 
    },
    {
        projectName : toDo,
        sourceCode : '',
        preview : '',
        technologies : ['javascript', 'reactjs', 'css', 'firebase', 'material-ui', 'react-bootstrap', 'bootstrap', 'axios'],
        description : 'This toDo app is to create schedule by the user for today tomorrow or any day in the future. Authentication feature is also added so that only authenticated user can create, update, delete and save tasks. User can also see their history of tasks, tasks which are not finished can be forward to current day',
        image : ToDo,
        logo : false,
    },
    {
        projectName : covid,
        sourceCode : '',
        preview : '',
        technologies : ['javascript', 'reactjs', 'css', 'react bootstrap', 'bootstrap', 'chartjs', 'axios'],
        description : 'Covid tracker app to track covid cases of different countries, continents and global. Graphically shows the historical data of total cases, deaths and recovery in each month of the past few years and also ranks the country and continents on the basis of total cases and deaths.',
        image : CovidTracker,
        logo : CovidLogo,
    },
    {
        projectName : weather,
        sourceCode : '',
        preview : '',
        technologies : ['javascript', 'reactjs', 'css', 'react-bootstrap', 'bootstrap', 'axios'],
        description : 'This weather application will give you the information about weather for all the cities in the entire world',
        image : Weather,
        logo : WeatherLogo,
    }
]