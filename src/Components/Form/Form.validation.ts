import * as Yup from 'yup';

export const Validation = Yup.object().shape({
  name: Yup
    .string()
    .min(2, 'Two characters minimum')
    .max(20, 'Twenty characters maximum')
    .required(),
  email: Yup
    .string()
    .email()
    .required(),
  observation: Yup
    .string()
    .min(2, 'Two characters minimum')
    .max(2000, 'Two thousand characters maximum')
    .required(),
});