import React, { useEffect, useState } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  DateRangeSharp,
  FullscreenExitTwoTone,
  PlayCircleFilledWhite,
} from '@material-ui/icons';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import PasswordDialog from '../PasswordDialog';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { db, storage } from '../../db';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';
import { AddCircle, RowingTwoTone } from '@material-ui/icons';
import CardActions from '@material-ui/core/CardActions';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CardMedia from '@material-ui/core/CardMedia';
import { FormHelperText } from '@material-ui/core';
import md5 from 'md5';
import { NahravaniSouboru } from '../NahravaniSouboru';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledTextField = styled(TextField)`
  label.focused {
    color: #00c2cb;
    border: 1px solid;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: silver;
    }
    &:hover fieldset {
      border-color: #00c2cb;
    }
    &.Mui-focused fieldset {
      border-color: #00c2cb;
    }
  }
`;

const Formular = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 290,
      },
      display: 'flex',
      // flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#EAFFF6',
      padding: theme.spacing(3),
    },
    input: {
      color: '#00C2CB',
    },
    actions: {
      // flexDirection: 'row',
      // flexWrap: 'wrap',
      justifyContent: 'center',
    },
    textField: {
      marginLeft: theme.spacing(6),
      backgroundColor: 'white',
    },
    textField1: {
      marginLeft: theme.spacing(6),
      backgroundColor: '#EAFFF6 ',
    },
    petname: {
      fontSize: 20,
      /*  color: 'red', */
      backgroundColor: 'white',
      marginBottom: theme.spacing(2),
      textAlign: 'center',
    },
    activity: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  }));

  const [pet, setPet] = React.useState({
    UrlPic: '',
    Type: '',
    Password: '',
    Owner: '',
    Name: '',
    Birth: '',
    Activities: [{ name: '', dates: ['2021-01-01'] }],
  });

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      return db
        .collection('Pet')
        .doc(id)
        .get()
        .then((snapshot) => {
          setPet(snapshot.data());
        });
    }
  }, [db, id]);

  const history = useHistory();

  const handleSubmit = (event) => {
    if (pet.Password === '' || pet.Owner === '') {
      setOpenDialog(true);
      return;
    } else if (id === undefined) {
      db.collection('Pet').add(pet);
      handleClick();
      setPet({
        UrlPic: '',
        Type: '',
        Password: '',
        Owner: '',
        Name: '',
        Birth: '',
        Activities: [{ name: '', dates: ['2021-01-01'] }],
      });
    } else {
      db.collection('Pet').doc(id).update(pet);
      handleClick();
      // setPet({
      //   UrlPic: '',
      //   Type: '',
      //   Password: '',
      //   Owner: '',
      //   Name: '',
      //   Birth: '',
      //   Activities: [{ name: '', dates: ['2021-01-01'] }],
      // });
    }
  };

  const handleChangeEveryInput = (event, nameOfInput) => {
    setPet({ ...pet, [nameOfInput]: event.target.value });
  };

  const predaniUrl = (url) => {
    setPet({ ...pet, UrlPic: url });
  };

  const deletePicture = () => {
    setPet({ ...pet, UrlPic: '' });
  };

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCloseDialog = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenDialog(false);
  };

  const addDateToActivity = (indexOfActivity) => {
    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        return { ...activity, dates: [...activity.dates, ...[new Date()]] };
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const addActivitytoActivities = () => {
    const newActivity = { name: '', dates: [new Date()] };
    const newArray = pet.Activities;
    newArray.unshift(newActivity);

    setPet({ ...pet, Activities: newArray });
  };

  const handleChangeNameOfActivity = (event, indexOfActivity) => {
    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        return { ...activity, name: event.target.value };
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const handleChangeDateOfActivity = (event, indexOfActivity, indexOfDate) => {
    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        const newDatesArray = activity.dates.map((date, i) => {
          if (i === indexOfDate) {
            return event.target.value;
          }
          return date;
        });

        return { ...activity, dates: newDatesArray };
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const deleteDateFromActivities = (indexOfActivity, i) => {
    const dateToRemove = pet.Activities[indexOfActivity].dates.splice(i, 1);

    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        return { ...activity, dates: pet.Activities[indexOfActivity].dates };
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const deleteActivityFromActivities = (index) => {
    const activityToRemove = pet.Activities[index];

    const newArray = pet.Activities.filter((item) => item !== activityToRemove);

    setPet({ ...pet, Activities: newArray });
  };

  const formatDate = (date) =>
    date.seconds === undefined ? date : date.toDate();

  return (
    <>
      <StyledTextField
        className={classes.petname}
        style={{ fontSize: 50 }}
        id="outlined-basic"
        label="Jméno zvířete"
        variant="outlined"
        value={pet.Name}
        onChange={(event) => {
          handleChangeEveryInput(event, 'Name');
        }}
        InputLabelProps={{
          shrink: true,
          style: { color: '#737373' },
        }}
      />

      {pet.UrlPic !== '' && (
        <img className="img-Form" src={pet.UrlPic} alt="" />
      )}

      {pet.UrlPic === '' && pet.Type === 'Kočka' && (
        <img className="img-Form" src="/assets/Cat.png" alt="" />
      )}
      {pet.UrlPic === '' && pet.Type === 'Pes' && (
        <img className="img-Form" src="/assets/Dog.png" alt="" />
      )}
      {pet.UrlPic === '' && pet.Type === 'Kůň' && (
        <img className="img-Form" src="/assets/Horse.png" alt="" />
      )}
      {pet.UrlPic === '' && pet.Type === 'Nezvolen' && (
        <img className="img-Form" src="/assets/Eyes2.png" alt="" />
      )}
      {pet.UrlPic === '' && pet.Type === '' && (
        <>
          <div className="misto-pro-obrazek">
            <p>Nahraj obrázek</p>
          </div>
          <img src="" alt="" />
        </>
      )}

      <NahravaniSouboru funkce={predaniUrl} />
      <Tooltip disableFocusListener title="Odstranit obrázek">
        <IconButton
          value={pet.UrlPic}
          aria-label="delete"
          onClick={deletePicture}
        >
          <HighlightOffIcon />
        </IconButton>
      </Tooltip>

      <form className={classes.root} noValidate autoComplete="off">
        <StyledTextField
          className={classes.petname}
          id="date"
          variant="outlined"
          label="Datum narození"
          type="date"
          InputLabelProps={{
            shrink: true,
            style: { color: '#737373' },
          }}
          value={formatDate(pet.Birth)}
          onChange={(event) => {
            handleChangeEveryInput(event, 'Birth');
          }}
        />

        <FormControl
          variant="outlined"
          className={classes.formControl}
          className={classes.petname}
        >
          <InputLabel
            id="demo-simple-select-outlined-label"
            InputLabelProps={{
              shrink: true,
              style: { color: '#737373' },
            }}
          >
            Druh zvířete
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={pet.Type}
            label="Type"
            onChange={(event) => {
              handleChangeEveryInput(event, 'Type');
            }}
            InputLabelProps={{
              shrink: true,
              style: { color: '#737373' },
            }}
          >
            <MenuItem value="">
              <em>Nic</em>
            </MenuItem>
            <MenuItem value={'Nezvolen'}>Nechci uvádět</MenuItem>
            <MenuItem value={'Pes'}>Pes</MenuItem>
            <MenuItem value={'Kočka'}>Kočka</MenuItem>
            <MenuItem value={'Kůň'}>Kůň</MenuItem>
          </Select>
        </FormControl>
        <StyledTextField
          required
          className={classes.petname}
          id="outlined-basic"
          label="Vytvoř přihlašovací jméno"
          variant="outlined"
          value={pet.Owner}
          onChange={(event) => {
            handleChangeEveryInput(event, 'Owner');
          }}
          InputLabelProps={{
            shrink: true,
            style: { color: '#737373' },
          }}
        />

        <FormControl
          className={clsx(classes.margin)}
          variant="outlined"
          inputlabelprops={{
            shrink: true,
            style: { color: '#737373' },
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Vytvoř heslo*
          </InputLabel>
          <OutlinedInput
            required
            className={classes.petname}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={pet.Password}
            onChange={(event) => {
              handleChangeEveryInput(event, 'Password');
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            /* labelWidth={70} */
          />
        </FormControl>

        <h3 style={{ color: '#00C2CB', textAlign: 'center' }}>
          Pravidelné úkony:
        </h3>
     

        <CardActions className={classes.actions}>
          <Tooltip disableFocusListener title="Přidat úkon">
            <IconButton
              color="primary"
              aria-label="Nový záznam"
              onClick={() => addActivitytoActivities()}
              size="small"
              style={{
                color: '#EAFFF6 ',
                backgroundColor: '#00C2CB',
              }}
            >
              <AddCircle style={{ fontSize: 50 }} />
            </IconButton>
          </Tooltip>
        </CardActions>

        {pet.Activities.map((activity, index) => {
          return (
            <>
              {/* <div className="activity">
                <div> */}
              <div className={classes.activity}>
                <StyledTextField
                  className={classes.petname}
                  style={{
                    minWidth: 200,
                    backgroundColor: '#f2f2f2 ',
                    color: 'primary',
                  }}
                  id="outlined-basic"
                  label="Název úkonu"
                  variant="outlined"
                  size="small"
                  value={pet.Activities[index].name}
                  onChange={(event) => {
                    handleChangeNameOfActivity(event, index);
                  }}
                  InputLabelProps={{
                    shrink: true,
                    style: { color: '#737373' },
                  }}
                />
                <Tooltip disableFocusListener title="Odstranit úkon">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteActivityFromActivities(index);
                    }}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Tooltip>

                {activity.dates.map((date, i) => {
                  //ukazuju ty Datepickery
                  return (
                    <>
                      <div className="activity-item">
                        <StyledTextField
                          id="date"
                          label="Vyber datum"
                          type="date"
                          value={formatDate(pet.Activities[index].dates[i])}
                          className={
                            activity.dates.length === i + 1
                              ? classes.textField
                              : classes.textField1
                          }
                          InputLabelProps={{
                            shrink: true,
                            style: { color: '#737373' },
                          }}
                          style={{ width: 200 }}
                          onChange={(event) => {
                            handleChangeDateOfActivity(event, index, i);
                          }}
                        />
                        <Tooltip disableFocusListener title="Odstranit záznam">
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              deleteDateFromActivities(index, i);
                            }}
                          >
                            <HighlightOffIcon />
                          </IconButton>
                        </Tooltip>

                        {activity.dates.length === i + 1 && ( //tlačítko přidej se ukazuje pouze u posledního pickeru
                          <CardActions className={classes.actions}>
                            <Tooltip disableFocusListener title="Přidat datum">
                              <IconButton
                                color="primary"
                                aria-label="Nový záznam"
                                onClick={() => addDateToActivity(index)}
                                size="small"
                                style={{
                                  color: '#EAFFF6 ',
                                  backgroundColor: '#00C2CB',
                                }}
                              >
                                <AddCircle size="small" />
                              </IconButton>
                            </Tooltip>
                          </CardActions>
                        )}
                      </div>
                    </>
                  );
                })}
                {/* </div> */}
              </div>
            </>
          );
        })}

        <CardActions className={classes.actions}>
          <Button
            style={{ backgroundColor: '#737373' }}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Uložit
          </Button>

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Je třeba zadat přihlašovací jméno a heslo
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar
            style={{ backgroundColor: '#00C2CB' }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            autoHideDuration={800}
            onClose={handleClose}
            message="Uloženo"
            action={
              <React.Fragment>
                <Button size="medium" onClick={handleClose}></Button>
                <IconButton
                  style={{ backgroundColor: '#00C2CB' }}
                  size="small"
                  aria-label="close"
                  // color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </React.Fragment>
            }
          />
        </CardActions>
      </form>
      <Fab aria-label="add" style={{ margin: 15 }}>
        <Link href="#" color="inherit">
          <ArrowUpwardTwoToneIcon />{' '}
        </Link>
      </Fab>
    </>
  );
};

export default Formular;
