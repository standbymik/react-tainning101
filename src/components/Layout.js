import React, { Component } from 'react'
import Head from 'next/head'

class ConnectedLayout extends Component {

    render() {

        const { pathname, member } = this.props

        return (
<<<<<<< HEAD
            <div className="main">
                <Head>
                    <title>StandbyMik</title>
                </Head>
=======
            <div>
                <Head>
                    <title>{'StandbyMik'}</title>
                </Head>
                <div className="container">
                    {this.props.children}
                </div>
>>>>>>> fdd34e5ad3d2ebb41d9cef3cc5a8d89663d5821c
            </div>
        )
    }
}

export default ConnectedLayout