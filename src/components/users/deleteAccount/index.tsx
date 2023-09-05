import styles from '../UserForm.module.css'

const {
  field,
  title,
  btnDelete
} = styles

export default function DeleteAccount() {
  return (
    <fieldset className={field}>
      <span className={title}>Deletar sua conta:</span>
      <button className={btnDelete}>
        Deletar
      </button>
    </fieldset>
  )
}