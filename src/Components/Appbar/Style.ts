import { Theme, makeStyles } from '@material-ui/core';

export interface IStyles {
  root: {};
  appBar: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
  },
  appBar: {
    color: '#fff',
    textDecoration: 'none',
  },
}));