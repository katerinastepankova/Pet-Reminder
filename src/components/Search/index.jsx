import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Search = ({ onChangeParent, valueParent }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '18ch',
        color: 'secondary',
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={valueParent}
          id="search"
          label="Vyhledávání"
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
