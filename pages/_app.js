import React from 'react'
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../src/components/store";
import ConnectedLayout from "../components/Layout";

export default withRedux(makeStore, { debug: true })(class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ConnectedLayout>
                        <Component {...pageProps} />
                    </ConnectedLayout>
                </Provider>
            </Container>
        );
    }

});