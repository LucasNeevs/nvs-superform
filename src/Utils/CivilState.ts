export interface ICivil {
  id?: number;
  name: string;
}

export const CivilStates: ICivil[] = [
  {
    id: 1,
    name: 'Single',
  },
  {
    id: 2,
    name: 'Married',
  },
  {
    id: 3,
    name: 'Others',
  },
];