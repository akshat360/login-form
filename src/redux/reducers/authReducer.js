const initialState = {
  email: '',
  name: '',
  password: '',
  isLoading: false,
  isEmailExist: false,
  isAuthenticated: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ISAUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_EMAIL_EXISTS':
      return { ...state, isEmailExist: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
