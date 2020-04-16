export interface IForm {
  id: number;
  name: string;
  email: string;
  country: string;
  civilState: string;
  cpf: string;
  rg: string;
  age: string;
  gender: string;
  phone: string;
  observation: string;
}

export const initialValues: IForm = {
  id: 0,
  name: '',
  email: '',
  country: '',
  civilState: '',
  cpf: '',
  rg: '',
  age: new Date().toISOString(),
  gender: '',
  phone: '',
  observation: '',
}