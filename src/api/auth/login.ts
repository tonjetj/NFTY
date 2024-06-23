import { API_BASE_URL, API_AUTH, API_LOGIN } from '../constants';
import { save } from '../storage/save';

export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${API_AUTH}${API_LOGIN}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login Error:', errorData);
      throw new Error('Could not login the account');
    }

    const { accessToken, ...profile } = (await response.json()).data;
    save('token', accessToken);
    save('profile', profile);
    console.log('Login Success:');
    return profile;
  } catch (error) {
    console.error('Login Catch Error:', error);
    throw error;
  }
}
