import {AppProps} from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'

import {TEMPLATE_NAME} from '../utils/constants'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>{TEMPLATE_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
