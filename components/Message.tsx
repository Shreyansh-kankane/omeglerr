import React from 'react';

interface MessageProps {
  text: string;
  sender: 'me' | 'user';
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  const isUser = sender === 'me';

  return (
    <div
      className={`p-2 my-1 w-fit min-w-[76px] max-w-[2/3] block m-2 ${
        isUser
          ? 'bg-[#a0562b] text-white max-w-sm self-end rounded-tl-lg rounded-bl-lg rounded-tr-lg'
          : 'bg-gray-300 max-w-sm self-start text-black rounded-tr-lg rounded-tl-lg rounded-br-lg'
      }`}
    >
      {text}
    </div>
  );
};

export default Message;
