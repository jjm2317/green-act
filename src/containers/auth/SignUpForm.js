import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signUp } from '../../modules/auth';
import SignUp from '../../components/SignUp/SignUp';

const SignUpForm = () => {
  const dispatch = useDispatch();
  //useSelector: 리덕스의 상태값을 조회하는 함수
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signUp,
    auth: auth.auth,
    authError: auth.authError,
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
    }
  }, [auth, authError]);

  return (
    <SignUp type="signUp" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default SignUpForm;
