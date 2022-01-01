import { User } from 'src/store/slices/auth/types'
import encode from 'jwt-encode'
import decode from 'jwt-decode'

class ManageLocalStorage {
  private static userLabel: string = 'chchu'

  static set(user: User): void {
    const encoded = encode(user, 'braai')

    window.localStorage.setItem(this.userLabel, encoded)
  }

  static get(): User {
    const userEncoded = window?.localStorage.getItem(this.userLabel)
    const user = decode(userEncoded!) as User

    return user
  }
}

export default ManageLocalStorage
