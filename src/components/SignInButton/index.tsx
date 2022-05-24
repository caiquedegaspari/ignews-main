import { FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Session } from 'next-auth'

interface NewSessionType extends Session {
  session: {
    user: {
      name: string,
      image: string,
      email: string
    }
  }
}

export function SignInButton() {
  const { data } = useSession()
  const parsedTypeData = data as NewSessionType
  return data ? (
    <button 
    onClick={() => signOut()}
    type="button"
    className={styles.signInButton}
    >
      <FaGithub color="#04b361"/>
      {parsedTypeData.session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    onClick={() => signIn('github')}
    type="button"
    className={styles.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  )
    
  
}