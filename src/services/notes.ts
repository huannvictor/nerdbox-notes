import Api from './api'

const NotesService = {
  index: () =>
    Api.get('/notes', {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
  create: () =>
    Api.post(
      '/notes',
      { title: 'Título', body: 'Nova Nota...' },
      {
        headers: { 'x-access-token': localStorage.getItem('token') },
      },
    ),
  delete: (id: string) =>
    Api.delete(`/notes/${id}`, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
  update: (id: string, params: { title: string; body: string }) =>
    Api.put(`/notes/${id}`, params, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
}

export default NotesService
