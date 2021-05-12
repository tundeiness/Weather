/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { useState, Suspense } from 'react';
import {
  Container, Typography, Button,
} from '@material-ui/core';
import useStyles from './styles';
import Loader from './components/loading';
import './App.css';

const App = () => {
  const classes = useStyles();
  // const [loading, setLoading] = useState(false);

  // const handleClick = () => {
  //   setLoading(!loading);
  //   setTimeout(() => setLoading(false), 3000);
  // };
  return (
    <main className={classes.app}>
      <Container className={classes.containerApp} maxWidth={false}>
        <Loader />
        {/* <Suspense fallback={<Loader />}>
          <Typography className={classes.textWrap} variant="h6" display="inline">This is the App.js</Typography>
        </Suspense> */}
        {/* <Button className={`${classes.buttonColor} ${classes.primaryColor}`} onClick={() => { handleClick(); }}>Click</Button> */}
        {/* {loading ? <Loader /> : <Typography variant="h6">This is the App.js</Typography>} */}
        {/* <Grid container spacing={4} justify="center" style={{ backgroundColor: 'red' }}>
          <Grid item xs={3} sm={6}>
            <Typography variant="h1">Hello World!</Typography>
            <Paper style={{ height: '75', width: '100%' }} />
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: '75', width: '50' }} />
            <Typography variant="h1">Hello World!</Typography>
          </Grid>
          <Grid item xs={3} lg={12}>
            <Paper style={{ height: '75', width: '50' }} />
            <Typography variant="subtitle1">Hello World!</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1">Hello World!</Typography>
            <Paper style={{ height: '75', width: '50' }} />
          </Grid>
        </Grid> */}

      </Container>
    </main>
  );
};

export default App;
