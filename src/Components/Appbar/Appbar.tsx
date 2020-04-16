import React from 'react';
import { 
  AppBar, Typography, Toolbar,
} from '@material-ui/core';
import useStyles from './Style';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="https://google.com.br"
            className={classes.appBar}
            align="left"
            noWrap
          >
            Project
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}