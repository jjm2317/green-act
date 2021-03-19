import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import Login from '../../components/Login/Login';
//로그인관련 데이터를 props로서 데이터 처리능력이 없는 Login component로 전달
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

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const { username, password } = await response.json();
    dispatch();
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
