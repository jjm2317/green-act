import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import Login from '../../components/Login/Login';
import user from '../../modules/user';
import { check } from '../../modules/user';
//로그인관련 데이터를 props로서 데이터 처리능력이 없는 Login component로 전달
const LoginForm = ({ history }) => {
  console.log('loginform start');
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    authError: auth.authError,
    user: user.user,
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
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('errror');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('login complete');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);
  return (
    <>
      <Login type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default withRouter(LoginForm);
