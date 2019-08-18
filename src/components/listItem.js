import React, { useState } from 'react'
import { connect } from 'react-redux'

const ListItem = (props) => {

    const [title, settitle] = useState('')
    const [content, setcontent] = useState('');
    const [name, setname] = useState('');
    let [topicState, settopicState] = useState(props.topic)

    const renderList = (topic) => {
        return topicState.map((item, key) => {
            return (
                <div key={key}>
                    {`${item.title} - ${item.content} - ${item.name}`}
                </div>
            )
        })
    }

    const addListTopic = () => {
        const data = {
            title: '1111',
            content: '22222',
            name: '33333'
        }

        settopicState([...topicState, data])
    }

    return (
        <React.Fragment>
            <div>
                {renderList()}
            </div>
            <button onClick={addListTopic}>Click</button>
        </React.Fragment>
    )
}

export default connect(state => state)(ListItem)