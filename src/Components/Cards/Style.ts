import { Theme, makeStyles } from '@material-ui/core/styles';

export interface IStyles {
  root: {};
  cardImage: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(4),
  },
  cardImage: {
    maxWidth: '50px',
    maxHeight: '50px',
  },
}));