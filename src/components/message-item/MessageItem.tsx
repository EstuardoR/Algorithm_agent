import React from 'react';
import './MessageItem.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
}

interface MessageProps {
    message: { text: string; sender: 'user' | 'bot' };
    isLoading?: boolean;
}



const MessageItem: React.FC<MessageProps> = ({ message, isLoading }) => {
    const isUser = message.sender === 'user';

    return (
        <div className={`message-row ${isUser ? 'user' : 'bot'}`}>

            <div className={`message-bubble ${isUser ? 'user-bubble' : 'bot-bubble'} ${isLoading ? 'loading' : ''}`}>

                {isLoading ? (
                    "..."
                ) : (
                    <div className="markdown-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ inline, children, ...props }: CodeProps) {
                                    if (inline) {
                                        return <code className='inline-code'>{children}</code>
                                    }


                                    return (
                                        <div className="code-wrapper">
                                            <pre className="code-block">
                                                <code {...props}>{children}</code>
                                            </pre>
                                        </div>
                                    );
                                },
                            }}
                        >
                            {message.text}
                        </ReactMarkdown>

                    </div>

                )}

            </div>
        </div>
    );
};

export default MessageItem;


//   {isLoading
//             ? '...'
//             : <p>{message.text}</p>}