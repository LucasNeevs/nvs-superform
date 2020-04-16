import { Theme, makeStyles } from '@material-ui/core/styles';

export interface IStyles {
  root: {};
  card: {};
  cardImage: {};
  text: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(4),
  },
  card :{
    border: '1px solid #e9e9e9',
    boxShadow: '2px 2px 2px #c1c1c1',
  },
  cardImage: {
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '150px',
    maxHeight: '150px',
  },
  text: {
    fontSize: '0.8rem',
  },
}));