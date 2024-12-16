import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

function Header({ dispatch }) {
  // const inputRef = useRef(null);
  const containerRef = useRef(null);
  const rendersRef = useRef(1);

  // useEffect(() => {
  //   console.log('inputRef');
  //   console.log(inputRef);
  //   console.log(inputRef.current); // значення рефа

  //   inputRef.current.focus();
  // }, [inputRef]);

  useEffect(() => {
    rendersRef.current += 1; // мутація рефа - вважається побічним ефектом. не призводить до повторонго рендера
    // можна робити якщо вам треба
    // this.state.number = 5; // мутація стану - Помилка
  });

  console.log(rendersRef.current);

  return (
    <header ref={containerRef}>
      <h1>Мій сайт</h1>
      {/* прив'язка рефа до елемента */}
      {/* <input ref={inputRef} /> */}

      <ul>
        <li>
          <Link to='/'>Home page</Link>
        </li>
        <li>
          <Link to='/about'>About page</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts page</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
