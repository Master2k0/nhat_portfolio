import { createRoot } from 'react-dom/client'
import './styles.css'
import router from './routes'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
