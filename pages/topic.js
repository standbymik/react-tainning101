import React, { useState } from 'react'
import ListItem from '../src/components/listItem'
import { connect } from 'react-redux'

const Topic = (props) => {

    const data = [
        {
            title: 'title1',
            content: 'content1',
            name: 'name1'
        },
        {
            title: 'title2',
            content: 'content2',
            name: 'name2'
        }
    ]

    props.addListTopic(data)

    return (
        <React.Fragment>
            Hello world
            <div>
                <ListItem />
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListTopic: (topic) => {
            dispatch({ type: 'ADD', topic })
        }
    }
}


export default connect(null, mapDispatchToProps)(Topic)