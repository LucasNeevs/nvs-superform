import React from 'react';
import { 
  Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Style';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        component="h1"
        color="primary"
        align="center"
        gutterBottom
      >
        TSX, Formik, Storybook
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="primary"
        align="center"
        className={classes.title}
      >
        {`It's just to study and show a little bit about these technologies. Have fun! 🤗`}
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item lg={4} md={4} xs={12}>
          <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-header"
              color="primary"
            >
              <Typography>
                <b>Show more</b>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Javascript + HTML5 + JSS</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>React</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Typescript</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Material UI</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Formik (HOC) + Yup</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Storybook</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Mocha, Chai &amp; Enzyme</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
      
    </div>
  );
};
