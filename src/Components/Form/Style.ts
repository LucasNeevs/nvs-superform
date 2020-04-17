import { Theme, makeStyles } from '@material-ui/core/styles';

export interface IStyles {
  root: {};
  flag: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(4),
  },
  flag: {
    marginRight: '10px',
  },
}));