import {React, useState} from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
// import Topbar from '../components/topbar/Topbar'
// import {Menu} from '../components/menu/Menu';
import dynamic from 'next/dynamic'
const Topbar=dynamic(() => import("../components/topbar/Topbar"), {
    ssr: false
})
const Menu=dynamic(() => import("../components/menu/Menu"), {
  ssr: false
});



export const Layout = ({ children }) => {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>
    
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
    <Container>

 
      <main>{children}</main>
      <Footer />
    </Container>
    </>
  )
}
