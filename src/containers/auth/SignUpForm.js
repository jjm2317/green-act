import React, { useEffect, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signUp } from '../../modules/auth';
import SignUp from '../../components/SignUp/SignUp';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const getCheckedValues = (parentNode) =>
  [
    ...[...parentNode.children].filter(
      (node) => node.matches('input') && node.checked
    ),
  ].map((input) => input.value);

const SignUpForm = ({ history }) => {
  const dispatch = useDispatch();
  //useSelector: 리덕스의 상태값을 조회하는 함수
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
    // user: user.user,
  }));

  const onChange = (e) => {
    const { type, value, name } = e.target;
    console.log(type);

    //스토어에 액션을 전달한다.
    dispatch(
      //액션 생성함수: 액션을 반환
      changeField({
        type,
        form: 'signup',
        key: name,
        value: type === 'checkbox' ? getCheckedValues(e.currentTarget) : value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { nickName, email, password, passwordConfirm, interest } = form;
    if (password !== passwordConfirm) {
      //에러처리
      return;
    }

    dispatch(signUp({ email, password, nickName, interest }));
  };

  useEffect(() => {
    dispatch(initializeForm('signUp'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('authError');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('signupSuccess');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log(user);
      history.push('/');
    }
  }, [history, user]);

  return (
    <SignUp type="signUp" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(SignUpForm);
