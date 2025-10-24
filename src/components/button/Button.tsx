import React from 'react';
import './Button.css'

interface IPressableButton {
    onClick: () => void;
    disabled?: boolean;
    content: string;
    icon: React.ReactNode

}


export const PressableButton: React.FC<IPressableButton> = ({ onClick, disabled, content, icon }) => {
    return (
        <button
            className='custom-button'
            onClick={onClick}
            disabled={disabled}
        >
            <div style={{
                display:'flex',
                alignItems: 'center',
                gap: 5,
            }}>
                {content}
                {icon}
            </div>
        </button>
    )

}