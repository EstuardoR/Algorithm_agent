import './Chat.css'
import { useState } from 'react';
import MessageBar from '../../components/message-bar/MessageBar';
import MessageItem from '../../components/message-item/MessageItem';
import { AiOutlineAliwangwang } from 'react-icons/ai';
import { model } from '../../service/gemini';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot'
}


const ChatPage: React.FC = () => {
    const [message, setMessage] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;
        console.log(message);

        const newMessage = { id: Date.now(), text, sender: "user" as const };
        setMessage((prevMessage: Message[]) => [...prevMessage, newMessage]);
        setLoading(true);

        try {
            const result = await model.generateContent(text);
            const botReply = result.response.text();

            const botMessage = { id: Date.now() + 1, text: botReply, sender: 'bot' as const };
            setMessage((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error al obtener una respuesta", error);
            setMessage((prev) => [
                ...prev,
                { id: Date.now() + 2, text: 'Hubo un error al procesar tu mensaje.', sender: 'bot' },
            ]);

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='chat-container'>

            {message.length <= 0 ? (
                <div className='welcome-message'>
                    <h1>La conversación perfecta empieza ahora. ¿Qué tienes en mente?</h1>
                    <AiOutlineAliwangwang size={50} />
                </div>
            ) : (
                <div className='messages'>
                    {message.map((msg: Message) => (
                        <MessageItem key={msg.id} message={msg} />
                    ))}
                    {loading &&
                        <MessageItem
                            key="loading"
                            message={{ text: '', sender: 'bot' }}
                            isLoading
                        />}
                </div>
            )}

            <div className='bar-position'>
                <MessageBar onSend={handleSend} disable={loading} />
            </div>


        </div>
    )
}

export default ChatPage