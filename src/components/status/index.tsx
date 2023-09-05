type StatusProps = {
  status: string | null
}

export default function Status({status}: StatusProps) {
  if (status == 'success') {
    return (
    <span className='text-emerald-500 text-xs text-center'>
      Dados alterados com sucesso
    </span>
    )
  }

  if (status == 'error') {
    return (
    <span className='text-rose-500 text-xs text-center'>
      Erro ao alterar dados
    </span>
    )
  }

  if (status == 'error_confirmation') {
    return (
      <span className='text-rose-500 text-xs text-center'>
        Senhas não correspondem
      </span>
    )
  }
}