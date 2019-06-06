import React from 'react';

const DemoList = (props) => {
    return (
        <div className="avatarStyle ma4 tc bg-light-pink dib grow pa4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"></img>
            <h3>Hello {props.name}</h3>
            <h3>{props.job}</h3>
        </div>
    )
}

export default DemoList