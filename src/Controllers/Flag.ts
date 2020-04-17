interface IFlag {
  name: string;
}

export default (props: IFlag): string => {
  const { name } = props;

  switch(name) {
    case 'Argentina': {
      return 'ar'
    }
    case 'Brazil': {
      return 'br'
    }
    case 'Chile': {
      return 'ch'
    }
    default: {
      return 'undefined'
    }
  }
}