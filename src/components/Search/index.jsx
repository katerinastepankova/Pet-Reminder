import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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
        <StyledTextField
          value={valueParent}
          id="search"
          label="Přihlašovací jméno"
          type="search"
          variant="outlined"
          onChange={(event) => {
            onChangeParent(event.target.value);
          }}
          InputLabelProps={{
            shrink: true,
            style: { color: '#737373' },
          }}
        />
      </form>
    </>
  );
};

export default Search;
