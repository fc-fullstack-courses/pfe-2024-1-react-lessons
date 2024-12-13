import { Routes, Route, Link } from 'react-router';

function App() {
  return <>
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
    <Routes>
      <Route path='/' element={<HomePage user={'Test User'}/>}/>
      <Route path='about' element={<AboutPage />}/>
      <Route path='contacts' element={<ContactsPage />}/>
    </Routes>
  </>;
}

function HomePage ({user}) {
  return <div>Home Page. Hello {user}</div>
}

function AboutPage () {
  return <div>About Page</div>
}

function ContactsPage () {
  return <div>Contacts Page</div>
}

export default App;
