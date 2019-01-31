import React from 'react'
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import createReduxStore from '../src/components/store'
import ConnectedLayout from "../src/components/Layout";

const ReduxStore = (initialState, options) => createReduxStore(initialState, options)

class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
    }

    render() {
        const {Component, pageProps, store, router} = this.props

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
