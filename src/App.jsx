import './App.css';
import HomePage from '@components/HomePage/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductPage from '@components/ProductPage/ProductPage';
import AboutPage from '@components/AboutPage/AboutPage';
import ContactPage from '@components/ContactPage/ContactPage';
import ShopPage from '@components/ShopPage/ShopPage';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import LoginModal from '@components/LoginModal/LoginModal';
import RegisterModal from '@components/RegisterModal/RegisterModal';
import PrivateRoute from '@components/PrivateRoute/PrivateRoute';
import MyProfile from '@components/MyProfile/MyProfile';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';

function App() {
    return (
        <>
            <MyHeader />
            <ScrollToTop/>
            <Routes>
                <Route path='/login' element={<LoginModal />} />
                <Route path='/register' element={<RegisterModal />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
                <Route
                    path='/profile'
                    element={
                        <PrivateRoute>
                            <MyProfile />
                        </PrivateRoute>
                    }
                />
                <Route path='/products' element={<ProductPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/shops' element={<ShopPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='*' element={<LoginModal />} />
            </Routes>
            <MyFooter />
        </>
    );
}

export default App;
