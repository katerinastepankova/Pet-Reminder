import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const Search = () => {
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
   <TextField id="search" label="Vyhledávání" type="search" variant="outlined" />
   </form>
  </>
  );
};

export default Search;
