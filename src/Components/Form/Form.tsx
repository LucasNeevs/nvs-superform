import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { withFormik, FormikProps } from 'formik';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid, TextField, FormControl, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { IForm, initialValues } from './IForm';
import { IGender, Genders } from '../../Utils/Gender';
import MyCards from '../Cards/Cards';
import { dataCards } from '../Cards/ICards';
import { ICountry, Countries } from '../../Utils/Country';
import { ICivil, CivilStates } from '../../Utils/CivilState';
import useStyles from './Style';

const MyForm = (props: FormikProps<IForm>): React.ReactElement<HTMLElement> => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleReset,
    isSubmitting,
    setFieldValue,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <TextField
                id="name"
                name="name"
                label="Name"
                title="Name"
                margin="dense"
                variant="outlined"
                value={values.name}
                error={touched.name as any && errors.name as any}
                helperText={(touched.name && errors.name) && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                title="Email"
                margin="dense"
                variant="outlined"
                value={values.email}
                error={touched.email as any && errors.email as any}
                helperText={(touched.email && errors.email) && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
              >
                <InputLabel>Country</InputLabel>
                <Select
                  label="Country"
                  value={values.country}
                  onChange={handleChange}
                  inputProps={{
                    id: 'country',
                    name: 'country',
                  }}
                >
                  {
                    Countries.map((c: ICountry): React.ReactElement<HTMLElement> => (
                      <MenuItem key={c.id} value={c.name}>
                        {c.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
              >
                <InputLabel>Civil State</InputLabel>
                <Select
                  label="Civil State"
                  value={values.civilState}
                  onChange={handleChange}
                  inputProps={{
                    id: 'civilState',
                    name: 'civilState',
                  }}
                >
                  {
                    CivilStates.map((c: ICivil): React.ReactElement<HTMLElement> => (
                      <MenuItem key={c.id} value={c.name}>
                        {c.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <InputMask
                mask="999.999.999-99"
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {
                  (): React.ReactElement<HTMLElement> => (
                    <TextField
                      id="cpf"
                      name="cpf"
                      label="CPF"
                      title="CPF"
                      margin="dense"
                      variant="outlined"
                      error={touched.cpf as any && errors.cpf as any}
                      helperText={(touched.cpf && errors.cpf) && errors.cpf}
                      fullWidth
                    />
                  )
                }
              </InputMask>
            </Grid>
            <Grid item md={6} xs={12}>
              <InputMask 
                mask="99.999.999-9"
                value={values.rg}
                onChange={handleChange}
                onBlur={handleBlur}
              >
              {
                (): React.ReactElement<HTMLElement> => (
                  <TextField
                    id="rg"
                    name="rg"
                    label="RG"
                    title="RG"
                    margin="dense"
                    variant="outlined"
                    error={touched.rg as any && errors.rg as any}
                    helperText={(touched.rg && errors.rg) && errors.rg}
                    fullWidth
                  />
                )
              }
              </InputMask>
            </Grid>
            <Grid item md={6} xs={12}>
              <KeyboardDatePicker
                format="MM/dd/yyyy"
                variant="dialog"
                margin="dense"
                label="Birthday"
                value={values.age}
                onChange={(value: any): void => (
                  setFieldValue('age', value.toISOString())
                )}
                fullWidth
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <FormControl
                margin="dense"
                variant="outlined"
                fullWidth
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  value={values.gender}
                  onChange={handleChange}
                  inputProps={{
                    id: 'gender',
                    name: 'gender',
                  }}
                >
                  {
                    Genders.map((g: IGender): React.ReactElement<HTMLElement> => (
                      <MenuItem key={g.id} value={g.name}>
                        {g.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={3} xs={12}>
              <InputMask
                mask="(99) 99999-9999"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {
                  (): React.ReactElement<HTMLElement> => (
                    <TextField
                      id="phone"
                      name="phone"
                      label="Phone"
                      title="Phone"
                      margin="dense"
                      variant="outlined"
                      error={touched.phone as any && errors.phone as any}
                      helperText={(touched.phone && errors.phone) && errors.phone}
                      fullWidth
                    />
                  )
                }
              </InputMask>
              
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField 
                id="observation"
                name="observation"
                label="Observation"
                title="Observation"
                margin="dense"
                variant="outlined"
                value={values.observation}
                error={touched.observation as any && errors.observation as any}
                helperText={(touched.observation && errors.observation) && errors.observation}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={8}
                rowsMax={16}
                multiline
                fullWidth
              />
            </Grid>   
            <Grid item md={6} xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                Create
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button
                variant="contained"
                color="inherit"
                onClick={handleReset}
                fullWidth
              >
                Erase
              </Button>
            </Grid>
          </Grid>
        </form>
      </MuiPickersUtilsProvider>

      <MyCards />
    </div>
  );
}

export default withFormik({
  displayName: 'MyForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }) => {
    alert(JSON.stringify(values));
    dataCards.push({
      id: dataCards.length,
      name: values.name,
      email: values.email,
      country: values.country,
      civilState: values.civilState,
      cpf: values.cpf,
      rg: values.rg,
      age: values.age,
      gender: values.gender,
      phone: values.phone,
      observation: values.observation,
    });
    setSubmitting(false);
    resetForm();
  }
})(MyForm);