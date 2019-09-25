import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'

import { appWithTranslation } from '../i18n'

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx })
      }
  
      return { pageProps }
    }
  
    render () {
      const { Component, pageProps, store } = this.props
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }

export default withRedux(createStore)(withReduxSaga(appWithTranslation(MyApp)))