import React from 'react'
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import createReduxStore from '../src/components/store'
import ConnectedLayout from "../src/components/Layout";

const ReduxStore = (initialState, options) => createReduxStore(initialState, options)

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
<<<<<<< HEAD
        const {Component, pageProps, store, router} = this.props
=======
        const { Component, pageProps, store, router } = this.props
>>>>>>> fdd34e5ad3d2ebb41d9cef3cc5a8d89663d5821c

        return (
            <Container>
                <Provider store={store}>
<<<<<<< HEAD
                    <ConnectedLayout pathname={router.pathname ? router.pathname : null}>
=======
                    <ConnectedLayout pathname={router.pathname ? router.pathname : null} >
>>>>>>> fdd34e5ad3d2ebb41d9cef3cc5a8d89663d5821c
                        <Component {...pageProps} />
                    </ConnectedLayout>
                </Provider>
            </Container>
        )
    }


}

export default withRedux(ReduxStore)(MyApp)
