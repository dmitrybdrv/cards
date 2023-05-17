import { store } from 'app'
import { router } from 'common/routes/Routes'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)

reportWebVitals()
