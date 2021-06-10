import React, { useEffect, useState } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DateRangeSharp, FullscreenExitTwoTone, PlayCircleFilledWhite } from '@material-ui/icons';
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
import { db } from '../../db';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { red } from '@material-ui/core/colors';
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
// import { NahravaniSouboru } from '../NahravaniSouboru';

const Formular = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    input: {
      color: 'red',
    },
    actions: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textField: {
      marginLeft: theme.spacing(8),
      backgroundColor: 'white',
    },
    petname: {
      fontSize: '25px',
      color: 'red',
      backgroundColor: 'white',
      marginBottom: theme.spacing(2),
    },
    activity: {
      display: 'flex',
      
    },
  }));

  const [pet, setPet] = React.useState({
    UrlPic: '',
    Type: '',
    Password: '',
    Owner: '',
    Name: '',
    Birth: '',
    Activities: [{ name: '', dates: ['2021-06-07'] }],
  });

  const { id } = useParams();

  useEffect(() => {
    /*   console.log(id); */
    if (id !== undefined) {
      return db
        .collection('Pet')
        .doc(id)
        .get()
        .then((snapshot) => {
          /*  console.log('text', snapshot.data()); */
          setPet(snapshot.data());
        });
    }
  }, [db, id]);

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (id === undefined) {
      db.collection('Pet').add(pet);
    } else {
      db.collection('Pet').doc(id).update(pet);
    }
    handleClick();
  };

  const handleChangeEveryInput = (event, nameOfInput) => {
    /*   console.log(event.target.value); */
    setPet({ ...pet, [nameOfInput]: event.target.value });
    /* console.log(pet); */

    if (nameOfInput === 'Type') {
    }
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
  const handleChange = (event) => {
    // setAge(event.target.value);
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

  /*  const [openTooltip, setOpenTooltip] = React.useState(false);

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const handleTooltipOpen = () => {
    setOpenTooltip(true);
  }; */
  const addDateToActivity = (indexOfActivity) => {
    //kvůli referencím, aby se dobře měnily to dávám do nového arraye, procházím staryý array activities  apoud se mi index activity rovná tomu, kterýho se to týká, tak musím přepsat daný atribut
    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        return { ...activity, dates: [...activity.dates, ...[new Date()]] }; //přidá to tam nový datum do arraye dates
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
        return { ...activity, name: event.target.value }; //tady to mění name tý aktivity
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const handleChangeDateOfActivity = (event, indexOfActivity, indexOfDate) => {
    /*  console.log(event.target.value); */
    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        const newDatesArray = activity.dates.map((date, i) => {
          /*  console.log(i, indexOfDate); */
          if (i === indexOfDate) {
            return event.target.value;
          }
          return date;
        });
        /*  console.log(newDatesArray); */
        return { ...activity, dates: newDatesArray }; //mění exitující datum v petovi
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const deleteDateFromActivities = (indexOfActivity, i) => {
    console.log('klik');

    const dateToRemove = pet.Activities[indexOfActivity].dates.splice(i, 1);

    console.log(dateToRemove);
    console.log(pet.Activities[indexOfActivity].dates);

    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        /* return { ...activity, dates: !dateToRemove }; */
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
      {/* <h2>Karta zvířete</h2> */}
      <TextField
        className={classes.petname}
        id="outlined-basic"
        label="Jméno zvířete"
        variant="outlined"
        value={pet.Name}
        onChange={(event) => {
          handleChangeEveryInput(event, 'Name');
        }}
      />

      {pet.Type === 'Kočka' && <img className="img-Form" src="/assets/Cat2.png" alt="" />}
      {pet.Type === 'Pes' && <img className="img-Form" src="/assets/Gaspar2.png" alt="" />}
      {pet.Type === 'Kůň' && <img className="img-Form" src="/assets/Horse2.jpg" alt="" />}
      {pet.Type === 'Nezvoleno' && <img className="img-Form" src="/assets/Eyes2.png" alt="" />}
      {pet.Type === '' && <img src="" alt="" />}

      {/* <NahravaniSouboru /> */}

      <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField
          id="outlined-basic"
          label="http "
          variant="outlined"
          size="small"
          value={pet.ImageUrl}
          onChange={(event) => {
            handleChangeEveryInput(event, 'ImageUrl');
          }}
        /> */}

        <TextField
          id="date"
          variant="outlined"
          label="Datum narození"
          type="date"
          /*  className={classes.textField} */
          InputLabelProps={{
            shrink: true,
          }}
          value={formatDate(pet.Birth)}
          // pet.Birth.toDate()
          onChange={(event) => {
            handleChangeEveryInput(event, 'Birth');
          }}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Typ zvířete
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={pet.Type}
            label="Type"
            onChange={(event) => {
              handleChangeEveryInput(event, 'Type');
            }}
          >
            <MenuItem value={'Nezvoleno'}>Nezvoleno</MenuItem>
            <MenuItem value={'Pes'}>Pes</MenuItem>
            <MenuItem value={'Kočka'}>Kočka</MenuItem>
            <MenuItem value={'Kůň'}>Kůň</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Přihlašovací jméno"
          variant="outlined"
          value={pet.Owner}
          onChange={(event) => {
            handleChangeEveryInput(event, 'Owner');
          }}
        />

        <FormControl className={clsx(classes.margin)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Heslo</InputLabel>
          <OutlinedInput
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
            labelWidth={70}
          />
        </FormControl>

        <h3 style={{ color: '#00C2CB' }}>Pravidelné úkony:</h3>

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
              <div className={classes.activity}>
                <TextField
                  style={{
                    backgroundColor: '#EAFFF6 ',
                    minWidth: 200,
                  }}
                  id="outlined-basic"
                  label="Název"
                  variant="outlined"
                  size="small"
                  value={pet.Activities[index].name}
                  onChange={(event) => {
                    handleChangeNameOfActivity(event, index);
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
              </div>

              {activity.dates.map((date, i) => {
                //ukazuju ty Datepickery
                return (
                  <>
                    <div className="activity-item">
                      <TextField
                        id="date"
                        label="Vyber datum"
                        type="date"
                        value={formatDate(pet.Activities[index].dates[i])}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ minWidth: 135 }}
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

                      {activity.dates.length === i + 1 && ( //tlačítko přidej se ukazuje pouze u poseldního pickeru
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
            </>
          );
        })}
        <CardActions className={classes.actions}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Uložit
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Uloženo"
            action={
              <React.Fragment>
                <Button
                  color="secondary"
                  size="small"
                  onClick={handleClose}
                ></Button>
                <IconButton
                  size="medium"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </React.Fragment>
            }
          />
        </CardActions>
      </form>
      <Fab aria-label="add">
        <Link href="#" color="inherit">
          <ArrowUpwardTwoToneIcon />{' '}
        </Link>
      </Fab>
    </>
  );
};

export default Formular;
