import React from 'react'

import Breeds from '../components/Breeds'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

import {homeIds} from '../utils/ids'

const HomePage: React.FC = () => {
  return (
    <>
      <Header sticky logoRedirect />
      <Layout id={homeIds.container}>
        <Breeds />
      </Layout>
      <Footer />
    </>
  )
}

export default HomePage
