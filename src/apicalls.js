import axios from 'axios';

export const checkEmail = async () => {
  try {
    const response = await axios.get(
      'https://run.mocky.io/v3/a704e123-2ac0-4976-b769-6e9adb8549c2'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const checkUser = async (email, password) => {
  let response = await axios.post(
    'https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9',
    {
      email: email,
      password: password,
    }
  );

  return response;
};
