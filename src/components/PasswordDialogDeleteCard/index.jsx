import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../../db';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const PasswordDialogDeleteCard = ({ originalPassword, pet}) => {
  // const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const { id } = useParams();

  const [openDotaz, setOpenDotaz] = React.useState(false);
  const [openDialogHeslo, setOpenDialogHeslo] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const handleClickOpenDialogHeslo = () => {
    setOpenDialogHeslo(true);
    setOpenDotaz(false);
  };

  const handleCloseDialogHeslo = () => {
    setOpenDialogHeslo(false);
  };

  const handleClickOpenDotaz = () => {
    setOpenDotaz(true);
  };
  
  const handleCloseDotaz = () => {
    setOpenDotaz(false);
  };

  const handlePotvrdilHeslo = (reason) => {
    if (reason === 'clickaway') {
      return;
    } 
    else if
    (values.password === originalPassword) {
      
      db.collection('Pet').doc(pet).delete();
      setOpenDialogHeslo(false);
    };


  };

  return (
    <>
      <div>
      <Tooltip disableFocusListener title="Smazat">
              <IconButton
                onClick={handleClickOpenDotaz}
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
              open={openDotaz}
              onClose={handleCloseDotaz}
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
                <Button onClick={handleCloseDotaz} color="primary">
                  ZPĚT
                </Button>
                <Button
                  onClick={handleClickOpenDialogHeslo}
                  color="primary"
                  autoFocus
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog>



        <Dialog
          open={openDialogHeslo}
          onClose={handleCloseDialogHeslo}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">PŘIHLÁŠENÍ</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Prosím zadej své heslo a potvrď tlačítkem OK
            </DialogContentText>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Heslo
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
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
          </DialogContent>

          <DialogActions>
            <Button onClick={handleCloseDialogHeslo} color="#737373">
              ZPĚT
            </Button>

            <Button onClick={handlePotvrdilHeslo} color="#737373">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default PasswordDialogDeleteCard;
