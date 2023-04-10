import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModel'
import '../styles/globals.css'
import EditModal from '../components/modals/EditModal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
