import { Routes, Route } from 'react-router';
import { Layout } from './pages/Layouts/Layout';
import { AuthLayout } from './pages/Layouts/AuthLayout';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ContactsPage } from './pages/Contacts';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage user={'Test User'} />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='profiles/:profileName' element={<ProfilePage />} />
          {/* <Route path="profiles" element={<ProfileLayout />} >
            <Route index element={<UserProfile />} />
            <Route path=":profileId" element={<OtherProfile />} />
          </Route> */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
        </Route>
      </Routes>
      {/* <footer>Footer</footer> */}
    </>
  );
}

export default App;
