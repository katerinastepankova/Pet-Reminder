import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Search = ({ onChangeParent, valueParent }) => {

  const useStyles = makeStyles((theme) => ({
    search: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '18ch',
        backgroundColor: 'white',
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <form className={classes.search} noValidate autoComplete="off">
        <TextField
          value={valueParent}
          id="search"
          label="Přihlašovací jméno"
          type="search"
          variant="outlined"
          onChange={(event) => {
            onChangeParent(event.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Search;
