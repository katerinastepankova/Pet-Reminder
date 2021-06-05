import React from 'react';
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

const Formular = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
      },
    },
  }));
  const [pet, setPet] = React.useState({
    Type:'',
    Password:'',
    Owner:'',
    Name:'',
    ImageUrl:'',
    Birth: new Date(),

  });

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
  return (
    <>
      <h2>Karta zvířete</h2>

      <div className="foto-zvirete">?</div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="http link ?"
          variant="outlined"
          size="small"
          value={pet.ImageUrl}
        />
        <TextField
          id="outlined-basic"
          label="Jméno zvířete"
          variant="outlined"
          value={pet.Name}
        />

        <TextField
          id="date"
          variant="outlined"
          label="Datum narození"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={pet.Date}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Typ zvířete
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={pet.Type}
            onChange={handleChange}
            label="Age"
            
          >
            <MenuItem value="">
              <em>None</em>
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
        />

        <TextField
          variant="outlined"
          label="Heslo"
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={pet.Password}
          onChange={handleChangePassword('password')}
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
      </form>
    </>
  );
};

export default Formular;
