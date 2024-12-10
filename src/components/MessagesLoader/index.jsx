import { useLoadData } from '../../hooks';
import { getMessages } from '../../api';

/*
  Переробити на функціональний за допмогою хуків
  useState і useEffect
*/

function MessagesLoader() {
  const { data: messages, isLoading, error } = useLoadData(getMessages);

  return (
    <div>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR: {error.message}</div>}
      {messages &&
        messages.map((message) => (
          <article key={message.id}>
            <h2>{message.title}</h2>
            <h3>By {message.author}</h3>
            <p>{message.text}</p>
          </article>
        ))}
    </div>
  );
}

export default MessagesLoader;
