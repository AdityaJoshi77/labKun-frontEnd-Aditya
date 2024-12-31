import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebaseConfig'
import apiClient from '../axios/apiClient'

export async function registerUser (
  email: string,
  password: string,
  name: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    console.log('User registered:', user)
    const token = await user.getIdToken()
    localStorage.setItem('token', token)

    //apiclient ( custom):- adds token and authorization header to the api request and then sends to backend
    await apiClient.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        uid: user.uid,
        email: user.email,
        name
      }
    )

    console.log(user.uid)
    console.log(localStorage.getItem('token'))

    return user
  } catch (error: any) {
    console.error('Error registering user:', error.message)
    throw error
  }
}


export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('User logged in:', user);
    const token = await user.getIdToken();
    localStorage.setItem('token', token); 

    await apiClient.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      uid: user.uid,
    });

    console.log('Login successful');
    return user;
  } catch (error: any) {
    console.error('Error logging in user:', error.message);
    throw error;
  }
}