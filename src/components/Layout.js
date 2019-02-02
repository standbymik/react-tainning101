import React, { Component } from 'react'
import Head from 'next/head'

class ConnectedLayout extends Component {

    render() {

        const { pathname, member } = this.props

        return (
            <div>
                <Head>
                    <title>{'StandbyMik'}</title>
                    <link rel="stylesheet" href="../../static/css/main.css" />
                </Head>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ConnectedLayout