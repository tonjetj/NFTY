import { API_BASE_URL, API_AUTH, API_REGISTER } from '../constants';

export async function register(name: string, email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}${API_AUTH}${API_REGISTER}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Register Error:', errorData);
    throw new Error('Could not register the account');
  } else {
    const data = await response.json();
    console.log('Register Success:');
    return data;
  }
}
