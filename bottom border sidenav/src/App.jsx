import { useState } from 'react';
import BorderBottomLeftSidenav from "./components/borderScrolling/BorderBottomLeftSidenav";
import BorderBottomSrollingSidenav from './components/borderLeft/BorderBottomScrollingSideNav';
import MiddleNav from './components/middleNav/MiddleNav';

function App() {
  const [active, setActive] = useState('home');
  const activate = keys => setActive(keys);
  return (
    <>
      <BorderBottomLeftSidenav />
      <BorderBottomSrollingSidenav />
      <MiddleNav />
    </>
  )
}

export default App;