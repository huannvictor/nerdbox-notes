import Image from 'next/image'
import Link from 'next/link'
import presentationImage from '../../assets/images/presentation.png'
import styles from './Home.module.css'

const {
  section,
  columnContainer,
  columnGrid,
  column,
  title,
  subtitle,
  presentationImg,
  btnCta,
} = styles

export default function HomeScreen() {
  return (
    <>
      <section className={section}>
        <div className={[columnGrid, columnContainer].join(' ')}>
          <div className={column}>
            <h1 className={title}>
              Crie, organize e acompanhe suas notas com facilidade. Transforme
              suas ideias.
            </h1>
            <h2 className={subtitle}>
              Liberte sua criatividade e mantenha-se organizado com o nosso
              aplicativo de notas! Transforme suas ideias em realidade e nunca
              mais esqueça uma inspiração. Capture pensamentos, anote tarefas
              importantes e crie listas personalizadas para simplificar seu dia
              a dia.
            </h2>
            <Link href="/register">
              <button className={btnCta}>Registre-se Grátis</button>
            </Link>
          </div>

          <div className={column}>
            <Image
              src={presentationImage}
              className={presentationImg}
              alt="Imagem do mockup de apresentação do aplicativo"
            />
          </div>
        </div>
      </section>
    </>
  )
}
