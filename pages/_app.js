import React from 'react'
import Layout from "../components/Layout/Layout";
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/stores'

export default withRedux(initStore, { debug: false })(
  class yeeydash extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, router, store } = this.props;
      return (
        <Layout pathName = {router.pathname}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      );
    }
  }
);