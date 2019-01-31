import React, { Component } from 'react'
import Head from 'next/head'

class ConnectedLayout extends Component {

    render() {

        const { pathname, member } = this.props

        return (
            <div className="main">
                <Head>
                    <title>StandbyMik</title>
                </Head>
            </div>
        )
    }
}

export default ConnectedLayout