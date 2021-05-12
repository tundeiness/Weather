import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    border: '1px solid red',
  },

  containerApp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    height: '100vh',
  },

  container: {
    border: '1px solid red',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2, 0),
  },

  buttonColor: {
    backgroundColor: '#e8eaf6',
  },
  primaryColor: {
    border: '1px solid grey',
  },

  textWrap: {
    border: '1px solid grey',
    // margin: '2rem auto',
  },
}));

export default useStyles;
