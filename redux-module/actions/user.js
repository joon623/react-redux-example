// const login = 'LOGIN';
// const logout = 'LOGOUT';

const login = (data) => {
  // async action creator 비동기라는 걸 보여주기 위해서 함수를 return
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          loginSuccess({
            userId: 1,
            nickname: 'jun',
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(loginFailure(e));
    }
  };
};

const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    error,
  };
};

const logInRequest = (data) => {
  return {
    type: 'LOGIN_REQUEST',
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    data,
  };
};

const handleLogin = (data) => {
  // sync action creator 동기라는 걸 보여주기 위해서 객체를 return
  return {
    type: 'HANDLE_LOGIN',
    data,
  };
};

const handleLogOut = () => {
  return {
    type: logout,
  };
};

module.exports = {
  handleLogin,
  handleLogOut,
  login,
};
