import React from 'react'
import Layout from "../components/Layout/Layout";
import { withRouter } from 'next/router'

function App({ Component, pageProps, router }) {
  return <Layout pathName = {router.pathname}><Component {...pageProps} /></Layout>
 }

export default App;