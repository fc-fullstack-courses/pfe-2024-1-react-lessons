import { Routes, Route } from 'react-router';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ContactsPage } from './pages/Contacts';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<HomePage user={'Test User'}/>}/>
      <Route path='about' element={<AboutPage />}/>
      <Route path='contacts' element={<ContactsPage />}/>
    </Routes>
  </>;
}

export default App;
