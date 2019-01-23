import React from 'react'
import createReduxStore from '../src/utilities/CreateReduxStore'
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
//EEimport '../static/css/main.css'

import ConnectedLayout from '../src/components/Layout'

import 'babel-polyfill'

const ReduxStore = (initialState, options) => createReduxStore(initialState, options)

class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {

        const pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return
    }

    render() {
        const { Component, pageProps, store, router } = this.props

        return (
            <Container>
                <Provider store={store}>
                    <ConnectedLayout pathname={router.pathname ? router.pathname : null}>
                        <Component {...pageProps} />
                    </ConnectedLayout>
                </Provider>
            </Container>
        )
    }

}

export default withRedux(ReduxStore)(MyApp)