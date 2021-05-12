/* eslint-disable no-unused-vars */
import { Typography, LinearProgress } from '@material-ui/core';
import useStyles from '../styles';

const Loading = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6">Loading...</Typography>
      <br />
      {' '}
      <LinearProgress />
    </>
  );
};

export default Loading;
