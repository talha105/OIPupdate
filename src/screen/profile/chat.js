import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
export default function Chat() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      showUserAvatar
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name:'Muhammad talha',
        avatar:'https://via.placeholder.com/150/771796'
      }}
    />
  )
}