
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import {data} from './Components/DataMovies';
import MoviesList from './Components/MoviesList';
import MovieDescription from './Components/MovieDescription';
import { BrowserRouter,Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <BrowserRouter>
        <Container maxWidth="md">
  
          <Route exact path="/" ><MoviesList  mv={data}/></Route>
          <Route path="/description/:id" component={MovieDescription} />
          
        </Container>

      </BrowserRouter>
  </div>

  );
}

export default App;
