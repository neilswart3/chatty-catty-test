import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth'
import firebase from '../firebase'
import { formatFirebaseError } from '../utils'

class AuthFactory {
  static async createUser({ email, password }: any) {
    try {
      const data = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      )

      return data
    } catch (err) {
      const error = formatFirebaseError(err)

      throw new Error(error)
    }
  }

  static async createProfile({ name, photo }: any) {
    try {
      const data = updateProfile(firebase.auth.currentUser as User, {
        displayName: name,
        photoURL: photo,
      })

      console.log('data:', data)

      return data
    } catch (error) {
      console.log('error:', error)
    }
  }
}

export default AuthFactory
