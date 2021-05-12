import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Grid container spacing={4} justify="center">
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
            <Typography variant="h1">Hello World!</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h1">Hello World!</Typography>
            <Paper style={{ height: '75', width: '50' }} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
