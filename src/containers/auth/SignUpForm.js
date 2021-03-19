import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import SignUp from '../../components/SignUp/SignUp';

const SignUpForm = () => {
  const dispatch = useDispatch();
  //useSelector: 리덕스의 상태값을 조회하는 함수
  const { form } = useSelector(({ auth }) => ({
    form: auth.signUp,
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

  const onSubmit = e => {
    e.preventDefault();
  }

  useEffect(() => {
    dispatch(initializeForm('signUp'));
  }, [dispatch]);

  return (
    <SignUp
      type="signUp",
      form={form},
      onChange={onChange},
      onSubmit={onSubmit}
    />
  )
};
