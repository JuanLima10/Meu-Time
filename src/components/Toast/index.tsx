import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1500}
      limit={3}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  )
}