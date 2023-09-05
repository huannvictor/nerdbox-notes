import PasswordEditForm from '@/components/users/passwordEditForm';
import UserEditForm from '@/components/users/userEditForm';
import Image from 'next/image';
import logoImage from '../../../assets/images/logo.png';
import styles from '../../ScreensStyles.module.css';

const { section, cardContainer, card, logo, title, divider } = styles

export default function UserEditScreen () {
  return (
    <section className={section}>
      <div className={[cardContainer, divider].join(' ')}>
        <div className={card}>
          <Image src={logoImage} className={logo} alt="Logomarca NerdBox" />
          <h1 className={title}>Editar informações do usuário</h1>
        </div>
        <UserEditForm />
        <PasswordEditForm />
      </div>
    </section>
  )
}