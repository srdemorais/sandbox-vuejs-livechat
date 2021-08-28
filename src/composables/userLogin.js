import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

const login = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    return res
  } catch (err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const userLogin = () => {
  return { error, login }
}

export default userLogin