import React from 'react'
import { MoviesCard } from './MoviesCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
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
function MoviesList({mv}) {
  const classes = useStyles();
    return (
        <>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <CameraIcon className={classes.icon} /> Movie layout
            </Typography>
             <Grid container spacing={3}>
            { mv.map(el => <MoviesCard key={el.id}  title={el.title}  date={el.date}  img={el.img}  shortdescription={el.shortdescription}  longDescription={el.longDescription} />)}                        
          </Grid>
        
        </>
    )
}

export default MoviesList
