import React, { useState, useEffect } from 'react';
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
import { Box } from '@material-ui/core';
import { db } from '../../db';
import { TextField } from '@material-ui/core';
import PasswordDialog from '../PasswordDialog';
import { borders } from '@material-ui/system';
import { differenceInYears } from 'date-fns';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AnimalCard = ({ pet }) => {
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
      border: '1.5px solid  #737373',
    },
    card: {
      maxWidth: 250,
      maxHeight: 400,
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      flexDirection: 'column',
      margin: theme.spacing(1),
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
    actions: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const formatDate = (date) =>
    date.seconds === undefined ? date : date.toDate();

  console.log(pet, formatDate(pet.Birth));

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // db.collection('Pet').pet.delete();
    setOpen(false);
  };

  const handleCloseAndDelete = (reason, event) => {
    if (reason === 'clickaway') {
      return;
    } else {
      db.collection('Pet').doc(pet.id).delete();
      setOpen(false);
    }
  };

  return (
    <>
      {/* <Grid
        className={classes.container}
        container
        direction="row"
        spacing={2}
        justify="center"
      >
        
        <Grid item xs={12} sm={6} md={4}> */}
      <Paper className={classes.card} style={{ backgroundColor: '#EAFFF6 ' }}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Pes"
          image="/assets/Gaspar2.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h4" component="h4" style={{ color: '#00C2CB ' }}>
            {pet.Name}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            component="h6"
            style={{ color: '#737373 ' }}
          >
            {/* <span>
              {pet.Type} , {differenceInYears(Number(new Date()), Number(formatDate(pet.Birth)))}
            </span> */}
            <span>{pet.Type}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <PasswordDialog originalPassword={pet.Password} pet={pet.id} />

          <div>
            <IconButton
              onClick={handleClick}
              style={{ color: '#EAFFF6 ', backgroundColor: '#00C2CB' }}
            >
              <DeleteForeverTwoToneIcon />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Opravdu chcete smazat tento záznam?'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Pokud ne, stiskněte tlačítko ZPĚT
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  ZPĚT
                </Button>
                <Button onClick={handleCloseAndDelete} color="primary" autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </CardActions>
      </Paper>
      {/* </Grid>

        
      </Grid> */}
    </>
  );
};

export default AnimalCard;
