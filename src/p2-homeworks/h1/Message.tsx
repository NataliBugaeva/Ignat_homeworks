import React from 'react';
import s from './Message.module.css';

export type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <div className={s.wrapper}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt=""/>
                </div>

                <div className={s.message_text}>
                    <div>{props.name}</div>
                    <div>{props.message}</div>
                    <div>{props.time}</div>
                    <div className={s.test}></div>
                </div>


            </div>
        </div>
    )
}

export default Message
