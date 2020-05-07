interface IUser {
  gender: string;
}

export default (props: IUser): string => {
  const { gender } = props;

  switch(gender) {
    case 'Female': {
      return 'https://image.flaticon.com/icons/png/512/194/194938.png';
    }
    case 'Male': {
      return 'https://image.flaticon.com/icons/svg/194/194935.svg';
    }
    case 'Others': {
      return 'https://images.assetsdelivery.com/compings_v2/ronnarid/ronnarid1507/ronnarid150700051.jpg';
    }
    default: {
      return 'https://marcelloreal.com/public/system/eXfkOOiYH-uoddxClSi52viuasTF1mJ8olZ0u-tOtfFqK66gZCc90Ly_Uoc0VmR1eULwQ0uGf2JhPt4yPTts8A/themes/base/assets/images/avatar-1.png';
    }
  }
};