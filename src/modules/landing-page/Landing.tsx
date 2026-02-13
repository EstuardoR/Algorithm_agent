import './Landing.css'
import React from 'react';
import BotIcon from '../../icons/bot-icon';
import { PressableButton } from '../../components/button/Button';
import { RiChatAiFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const startChat = () => {
        navigate("/chat");
    }



    return (
        <div className='container'>
            <div className='right-side'>
                <h1>Tu Asistente de Algoritmos Personal.</h1>
                <h2>Precisión algorítmica. Resultados humanos.</h2>
                <PressableButton
                    onClick={startChat}
                    content='Iniciar Conversación'
                    icon={<RiChatAiFill size={18} style={{ marginTop: 5 }} />}
                />
            </div>
            <div className='left-side'>
                <BotIcon width={400} height={400} fill='white' />
            </div>
        </div>
    )
}

export default LandingPage