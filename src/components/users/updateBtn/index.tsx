import styles from '../UserForm.module.css'

const {
  field,
  btn
} = styles

type UpdateButtonProps = {
  text: string
}

export default function UpdateButton({text}: UpdateButtonProps) {
  return ( 
    <fieldset className={field}>
      <button className={btn}>
        {text}
      </button>
    </fieldset>
  )
}