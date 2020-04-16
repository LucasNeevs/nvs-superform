export interface IGender {
  id?: number;
  name: string;
}

export const Genders: IGender[] = [
  {
    id: 1,
    name: 'Female',
  },
  {
    id: 2,
    name: 'Male',
  },
  {
    id: 3,
    name: 'Others',
  },
];