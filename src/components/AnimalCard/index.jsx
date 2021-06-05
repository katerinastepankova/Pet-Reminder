import React, { useState } from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import { AddCircle, RowingTwoTone } from '@material-ui/icons';
import { Box, Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import PasswordDialog from '../PasswordDialog';
import { borders } from '@material-ui/system';
import {differenceInYears} from 'date-fns';

const AnimalCard = ({pet}) => {

  console.log(pet, pet.Birth.toDate());
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 300,
        md: 800,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#34656d',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const useStyles = makeStyles({
    root: {
     
      flexGrow: 1,
      justifyContent: 'center',
    },
    media: {
      maxHeight: 200,
      backgroundColor: 'white',
      border: '1.5px solid  #737373'
    },
    card: {
      maxWidth: 250,
      maxHeight: 400,
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      flexDirection: 'column',
      border: 2,
    },
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 900,
    },
    grid: {
      marginLeft: 0,
    },
    actions:{
      flexDirection: 'column',
      justifyContent: 'center',
    }

    /* paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    }, */
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Grid
        className={classes.container}
        container
        direction="row"
        spacing={2}
        justify="center"
      >
        {/* <Grid item xs={12} sm={6} md={4} className={classes.grid}>
          <Paper className={classes.card} style={{ backgroundColor: 'white' }} >
           
            <CardMedia
              className={classes.media}
              component="img"
              alt="Paw"
              image="/assets/paw.png"
              title="Nový záznam"
              
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h5"
                style={{ color: '#737373' }}
              >
                Nový záznam
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                component="h6"
                style={{ color: 'white' }}
              ></Typography>
            </CardContent>
            <CardActions className= {classes.actions}>
              <IconButton
                color="primary"
                aria-label="Nový záznam"
                onClick={handleClick}
                size="medium"
                style={{ color: '#EAFFF6 ', backgroundColor: '#00C2CB' }}
                
              >
                <AddCircle size="medium" />
              </IconButton>
            </CardActions>
            
          </Paper>
        </Grid> */}

        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className={classes.card}
            style={{ backgroundColor: '#EAFFF6 ' }}
          >
            <CardMedia
              className={classes.media}
              component="img"
              alt="Pes"
              image="/assets/Gaspar2.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                variant="h4"
                component="h4"
                style={{ color: '#00C2CB ' }}
              >
               {pet.Name}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                component="h6"
                style={{ color: '#737373 ' }}
              >
               <span>{pet.Type} , {differenceInYears(new Date(),pet.Birth.toDate()) }
               </span>
              </Typography>
            </CardContent>
            <CardActions>
              <PasswordDialog />

              <IconButton
                style={{ color: '#EAFFF6 ', backgroundColor: '#00C2CB' }}
              >
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </CardActions>
          </Paper>
        </Grid>

        
      </Grid>
    </>
  );
};

export default AnimalCard;
