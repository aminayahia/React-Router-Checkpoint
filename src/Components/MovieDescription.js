import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {data} from './DataMovies'
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
     // backgroundImage: 'url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
function MovieDescription({history,match}) {
  const {id} = match.params;
  console.log(id)
    const classes = useStyles();
    return (
      <>
        { data.map(el => el.id === parseInt(id) ? (
             <Grid container component="main" className={classes.root}>
             <CssBaseline />
             <Grid item xs={false} sm={4} md={7} ><img src={el.img} alt="movie" /></Grid>
             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
               <div className={classes.paper}>
               <Button onClick={() => history.goBack()}>go back</Button>
                 <Avatar className={classes.avatar}>
                   <LockOutlinedIcon />
                 </Avatar>
                 <Typography component="h1" variant="h5">
                 {el.title}
                 </Typography>
                 <p>
                 {el.longDescription}
                 </p>
               </div>
             </Grid>
           </Grid>
        ) : "")}                        
     
      </>
    )
}

export default MovieDescription
