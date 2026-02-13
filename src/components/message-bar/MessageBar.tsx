import { IoSendOutline } from 'react-icons/io5';
import './MessageBar.css'
import React, { useState } from 'react';

type Props = { onSend: (text: string) => void, disable: boolean };

const MessageBar: React.FC<Props> = ({ onSend, disable }) => {
    const [text, setTex] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setTex("");
    }

    return (
        <form onSubmit={handleSubmit} className='message-bar'>
            <input
                className='message-input'
                value={text}
                onChange={(e) => {
                    setTex(e.target.value)
                }}
                placeholder='Escribe aquí tu mensaje'
            />
            <button disabled={disable} className='send-button'>{<IoSendOutline size={20} />}</button>
        </form>
    )
}


export default MessageBar;