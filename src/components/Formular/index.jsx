import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FullscreenExitTwoTone } from '@material-ui/icons';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
        />
        <TextField
          id="outlined-basic"
          label="Jméno zvířete"
          variant="outlined"
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
        />
        <TextField id="outlined-basic" label="Typ zvířete" variant="outlined" />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Typ zvířete
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Pes</MenuItem>
            <MenuItem value={20}>Kočka</MenuItem>
            <MenuItem value={30}>Kůň</MenuItem>
          </Select>
        </FormControl>
      </form>
    </>
  );
};

export default Formular;
