import React from 'react'

const HTMLText = (props) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
    )
}

export default HTMLText
