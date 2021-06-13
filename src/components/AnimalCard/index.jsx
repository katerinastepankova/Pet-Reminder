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

import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import { db } from '../../db';
import { TextField } from '@material-ui/core';
import PasswordDialog from '../PasswordDialog';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';

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
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleCloseAndDelete = (reason, event) => {
    if (reason === 'clickaway') {
      return;
    } else {
      db.collection('Pet').doc(pet.id).delete();
      setOpen(false);
    }
    handleClickSnackbar();
  };

  return (
    <>
      <Paper className={classes.card} style={{ backgroundColor: '#EAFFF6 ' }}>
        {pet.UrlPic !== '' && (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Obrazek"
            image={pet.UrlPic}
            title="zvire"
          />
        )}

        {pet.UrlPic === '' && pet.Type === 'Kočka' && (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Kočka"
            image="/assets/Cat.png"
            title="Cat"
          />
        )}

        {pet.UrlPic === '' && pet.Type === 'Pes' && (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Pes"
            image="/assets/Dog.png"
            title="Dog"
          />
        )}
        {pet.UrlPic === '' && pet.Type === 'Kůň' && (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Kůň"
            image="/assets/Horse.png"
            title="Horse"
          />
        )}

        {pet.UrlPic === '' && pet.Type === 'Nezvolen' && (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Obrázek"
            image="/assets/Eyes2.png"
            title="Eyes"
          />
        )}

        {pet.UrlPic === '' && pet.Type === '' && (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Obrázek"
            image="/assets/Eyes2.png"
            title="Eyes"
          />
        )}

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
            <span>{pet.Type === 'Nezvoleno' ? 'Druh nezvolen' : pet.Type}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <PasswordDialog originalPassword={pet.Password} pet={pet.id} />

          <div>
            <Tooltip disableFocusListener title="Smazat">
              <IconButton
                onClick={handleClick}
                style={{
                  color: '#EAFFF6 ',
                  backgroundColor: '#00C2CB',
                  marginLeft: 30,
                }}
              >
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </Tooltip>
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
                <Button
                  onClick={handleCloseAndDelete}
                  color="primary"
                  autoFocus
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Snackbar
            style={{ backgroundColor: '#00C2CB' }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message="Smazáno"
            action={
              <React.Fragment>
                <Button size="medium" onClick={handleCloseSnackbar}></Button>
                <IconButton
                  style={{ backgroundColor: '#00C2CB' }}
                  size="small"
                  aria-label="close"
                  // color="inherit"
                  onClick={handleCloseSnackbar}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </React.Fragment>
            }
          />
        </CardActions>
      </Paper>
    </>
  );
};

export default AnimalCard;
