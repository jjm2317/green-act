import React, { useEffect, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signUp } from '../../modules/auth';
import SignUp from '../../components/SignUp/SignUp';
import { check } from '../../modules/user';

const SignUpForm = () => {
  const dispatch = useDispatch();
  //useSelector: 리덕스의 상태값을 조회하는 함수
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signUp,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    //스토어에 액션을 전달한다.
    dispatch(
      //액션 생성함수: 액션을 반환
      changeField({
        form: 'signUp',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { nickname, username, password, passwordConfirm, interest } = form;
    if (password !== passwordConfirm) {
      //에러처리
      return;
    }

    dispatch(signUp({ username, password, nickname, interest }));
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
      console.log(' check API 성공 ');
      console.log(user);
    }
  }, [user]);

  return (
    <SignUp type="signUp" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default SignUpForm;
