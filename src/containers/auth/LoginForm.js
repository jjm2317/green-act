import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import Login from '../../components/Login/Login';
const LoginForm = () => {
  console.log('loginform start');
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    // user: user.user,
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    console.log(email, password);
    dispatch(login({ email, password }));
    // const response = await fetch('http://localhost:4000/login');

    // console.log(response.body);
  };

  useEffect(() => {
    if (auth) console.log(auth);
  }, [auth]);

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
