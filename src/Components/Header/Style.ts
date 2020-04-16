import { Theme, makeStyles } from '@material-ui/core/styles';

export interface IStyles {
  root: {};
  title: {};
  panel: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    marginTop: '2rem',
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: '1rem',
  },
  panel: {
    backgroundColor: '#f6f6f6',
    boxShadow: '2px 2px 4px #a9a9a9',
    padding: theme.spacing(0),
  },
}));