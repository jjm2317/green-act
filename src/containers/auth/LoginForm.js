import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { changeField, initializeForm } from '../../modules/atuh';

=======
import { changeField, initializeForm } from '../../modules/auth';
import Login from '../../components/Login/Login';
>>>>>>> 34c5b6d33386245acb26e2b2bb8da892bf6e9cb7
const LoginForm = () => {
  console.log('loginform start');
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(
      dispatch(
        changeField({
          form: 'login',
          key: name,
          value,
        })
      )
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <>
      <Login type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default LoginForm;
