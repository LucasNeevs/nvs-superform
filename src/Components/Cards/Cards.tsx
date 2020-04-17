import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, CardActionArea, CardActions, Button, Typography, MenuItem } from '@material-ui/core';
import { dataCards } from './ICards';
import { IForm } from '../Form/IForm';
import UserCheck from '../../Controllers/User';
import useStyles from './Style';
import Moment from 'moment';
import Flag from 'react-world-flags';
import FlagChange from '../../Controllers/Flag';

export default (): React.ReactElement<HTMLElement> => {
  const [state] = useState(dataCards);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        {
          state.map((s: IForm): React.ReactElement<HTMLElement> => (
            <Grid item lg={2} md={3} xs={12}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia 
                    component="img"
                    alt="Default avatar"
                    title="Default avatar"
                    height="200"
                    image={UserCheck({
                      gender: s.gender
                    })}
                    className={classes.cardImage}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="p"
                    >
                      {s.name || 'Default'}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>Email: </b>{s.email || 'email@email.com'}
                    </Typography>
                    {
                      (s.country &&
                        <Typography component="p" className={classes.text}>
                          <b>Country: </b>
                          {`${s.country} `}
                          <Flag 
                            code={
                              FlagChange({
                                name: s.country
                              })
                            }
                            width="10"
                            height="10"
                          />
                        </Typography>
                      ) || (
                        <Typography component="p" className={classes.text}>
                          <b>Country: </b>Undefined
                        </Typography>
                      )
                    }
                    <Typography component="p" className={classes.text}>
                      <b>Civil State: </b>{s.civilState || 'Undefined'}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>CPF: </b>{s.cpf || '999.999.999-99'}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>RG: </b>{s.rg || '99.999.999-9'}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>Age: </b>{Moment(s.age).format('MMMM Do YYYY')}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>Gender: </b>{s.gender || 'Undefined'}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>Phone: </b>{s.phone || '(99) 99999-9999'}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      <b>Observation: </b>{s.observation || 'No observations here...'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                    >
                      Show more
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}
