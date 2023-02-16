import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Block from './pages/block'
import Blocks from './pages/blocks'
import Home from './pages/home'
import Layout from './layout'
import NotFound from './pages/notFound'
import { ThemeProvider } from './context/useTheme'
import { NodeSocketProvider } from './context/useNodeSocket'
import { SettingsProvider } from './context/useSettings'
import TxPool from './pages/txPool'
import { Helmet } from 'react-helmet'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blocks',
        element: <Blocks />,
      },
      {
        path: '/blocks/:id',
        element: <Block />
      },
      {
        path: '/txpool',
        element: <TxPool />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return <ThemeProvider>
    <Helmet titleTemplate="%s · Xelis Explorer" />
    <SettingsProvider>
      <NodeSocketProvider>
        <RouterProvider router={router} />
      </NodeSocketProvider>
    </SettingsProvider>
  </ThemeProvider>
}

export default App
