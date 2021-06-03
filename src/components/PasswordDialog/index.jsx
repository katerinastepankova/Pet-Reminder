import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PasswordDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button
          onClick={handleClickOpen}
          size="medium"
          style={{ color: 'white', backgroundColor: '#34656d' }}
        >
          VÍCE INFORMACÍ
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">PŘIHLÁŠENÍ</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Prosím zadej své heslo a potvrď tlačítkem OK
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Heslo"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              ZPĚT
            </Button>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default PasswordDialog;
