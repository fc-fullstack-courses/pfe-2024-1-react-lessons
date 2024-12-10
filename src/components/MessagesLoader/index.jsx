import React, { useState, useEffect } from 'react';

/*
  Переробити на функціональний за допмогою хуків
  useState і useEffect
*/

function MessagesLoader(props) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('/messages.json')
      .then((res) => res.json())
      .then((messages) => {
        setMessages(messages);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const messagesElems = messages.map((message) => (
    <article key={message.id}>
      <h2>{message.title}</h2>
      <h3>By {message.author}</h3>
      <p>{message.text}</p>
    </article>
  ));

  return (
    <div>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR: {error.message}</div>}
      {messagesElems}
    </div>
  );
}

export default MessagesLoader;
