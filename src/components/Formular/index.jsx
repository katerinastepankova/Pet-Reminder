import React, { useEffect } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FullscreenExitTwoTone } from '@material-ui/icons';
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

const Formular = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
      },
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
    },
  }));

  const [pet, setPet] = React.useState({
    Type: '',
    Password: '',
    Owner: '',
    Name: '',
    ImageUrl: '',
    Birth: '',
    Activities: [{ name: '', dates: ['2021-06-07'] }],
  });

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id !== undefined) {
      return db
        .collection('Pet')
        .doc(id)
        .get()
        .then((snapshot) => {
          console.log('text', snapshot.data());
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
    console.log(event.target.value);
    setPet({ ...pet, [nameOfInput]: event.target.value });
    console.log(pet);
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
    newArray.push(newActivity);

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
    console.log(event.target.value);
    const newActivitiesArray = pet.Activities.map((activity, index) => {
      if (index === indexOfActivity) {
        const newDatesArray = activity.dates.map((date, i) => {
          console.log(i, indexOfDate);
          if (i === indexOfDate) {
            return event.target.value;
          }
          return date;
        });
        console.log(newDatesArray);
        return { ...activity, dates: newDatesArray }; //mění exitující datum v petovi
      }
      return activity;
    });
    setPet({ ...pet, Activities: newActivitiesArray });
  };

  const formatDate = (date) =>
    date.seconds === undefined ? date : date.toDate();

  return (
    <>
      <h2>Karta zvířete</h2>

      <div className="foto-zvirete">?</div>
      <div>
        <label className={classes.input} htmlFor="outlined-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        {/* <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label> */}
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="http "
          variant="outlined"
          size="small"
          value={pet.ImageUrl}
          onChange={(event) => {
            handleChangeEveryInput(event, 'ImageUrl');
          }}
        />
        <TextField
          id="outlined-basic"
          label="Jméno zvířete"
          variant="outlined"
          value={pet.Name}
          onChange={(event) => {
            handleChangeEveryInput(event, 'Name');
          }}
        />

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
            <MenuItem value="Nezvoleno">
              <em>Nezvoleno</em>
            </MenuItem>
            <MenuItem value={'Pes'}>Pes</MenuItem>
            <MenuItem value={'Kočka'}>Kočka</MenuItem>
            <MenuItem value={'Kůň'}>Kůň</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Jméno majitele"
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

        <h3 style={{ color: '#00C2CB' }}>Evidované úkony:</h3>

        {pet.Activities.map((activity, index) => {
          return (
            <>
              <CardActions className={classes.actions}>
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
              </CardActions>
              <div>
                <TextField
                  style={{
                    backgroundColor: '#EAFFF6 ',
                    minWidth: 200,
                  }}
                  id="outlined-basic"
                  label="Přidej úkon"
                  variant="outlined"
                  size="small"
                  value={pet.Activities[index].name}
                  onChange={(event) => {
                    handleChangeNameOfActivity(event, index);
                  }}
                />
                <IconButton aria-label="delete">
                  <HighlightOffIcon />
                </IconButton>
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
                      <IconButton aria-label="delete">
                        <HighlightOffIcon />
                      </IconButton>

                      {activity.dates.length === i + 1 && ( //tlačítko přidej se ukazuje pouze u poseldního pickeru
                        <CardActions className={classes.actions}>
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
