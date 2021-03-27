import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from '../../node_modules/redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
  'auth/SIGNUP'
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);
// const SIGNUP = 'auth/SIGNUP';
// const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
// const SIGNUP_FAILURE = 'auth/REGISTER_FAILURE';

// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
// const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const signUp = createAction(
  SIGNUP,
  ({ nickname, username, password, interest }) => ({
    nickname,
    username,
    password,
    interest,
  })
);
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  signUp: {
    nickname: '',
    username: '',
    password: '',
    passwordConfirm: '',
    interest: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: { ...state[form], [key]: value },
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),

    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),

    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: null,
      auth,
    }),

    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),

    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
