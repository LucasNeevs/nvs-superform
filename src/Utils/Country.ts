export interface ICountry {
  id?: number;
  name: string;
  icon: string;
}

export const Countries: ICountry[] = [
  {
    id: 1,
    name: 'Argentina',
    icon: 'ar',
  },
  {
    id: 2,
    name: 'Brazil',
    icon: 'BR',
  },
  {
    id: 3,
    name: 'Chile',
    icon: 'CH',
  },
];