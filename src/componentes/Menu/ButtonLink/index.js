import React from 'react'

function ButtonLink(props) {
    //props => {className: "oq alguem vai passar"}
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;