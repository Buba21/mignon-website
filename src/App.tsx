import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/landing-page/landing-page.component'
import MenuPageComponent from './pages/menu/menu-page.component'
import ContactsPageComponent from './pages/contacts/contacts-page.component'
import NavbarComponent from './pages/landing-page/components/navbar/navbar.component'
import FooterComponent from './pages/landing-page/components/footer/footer.component'

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/menu" element={<MenuPageComponent />} />
        <Route path='/contacts' element={<ContactsPageComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
