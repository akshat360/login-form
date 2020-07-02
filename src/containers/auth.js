import { useSelector, useDispatch } from 'react-redux';
const email = useSelector((state) => state.email);
const name = useSelector((state) => state.name);
const password = useSelector((state) => state.password);
const dispatch = useDispatch();

export const setEmail = (text) => {
  dispatch({ type: 'SET_EMAIL', payload: text });
};
export const setName = (text) => {
  dispatch({ type: 'SET_NAME', payload: text });
};
export const setPassword = (text) => {
  dispatch({ type: 'SET_PASSWORD', payload: text });
};

export const getEmail = () => email;
export const getName = () => name;
export const getPassword = () => password;
