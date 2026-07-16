import { BrowserRouter, Navigate, Route , Router, Routes } from 'react-router-dom';
import HorizontalScrollMenu from "./pages/horizontal/HorizontalScrollMenu";
import MainLayout from "./layout/MainLayout";
import NotFound from './pages/NotFound/NotFound';
import VerticalLayout from './layout/VerticalLayout';
import FullScroll from './pages/vertical/full/FullScroll';
import AutoScroll from './pages/vertical/auto/AutoScroll';
import FixedScroll from './pages/vertical/fixed/FixedScroll';

function Routers() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index={true} element = { <Navigate to='/sidebar/horizontal' /> }/>
              <Route path='sidebar/horizontal' element = { <HorizontalScrollMenu /> }/>
              <Route path='sidebar/vertical' element={<VerticalLayout />}>
                  <Route index={true} element = { <Navigate to='/sidebar/vertical/full'/> }/>
                  <Route path='full' element = { <FullScroll /> } />
                  <Route path='auto' element = { <AutoScroll /> } />
                  <Route path='fixed' element = { <FixedScroll /> } />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Routers;