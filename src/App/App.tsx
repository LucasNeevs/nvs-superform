import React from 'react';
import MyAppBar from '../Components/Appbar/Appbar';
import MyHeader from '../Components/Header/Header';
import MyForm from '../Components/Form/Form';

export default (): React.ReactElement<HTMLElement> => (
  <>
    <MyAppBar />
    <MyHeader />
    <MyForm />
  </>
);