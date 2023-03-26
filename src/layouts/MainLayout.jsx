import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';

const MainLayout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return <>
        <Header />
        <div className='mx-16'>
            {pathname !== '/' && <button
                onClick={() => navigate(-1)}
                type="button"
                className="block ml-auto mr-0 mb-8 border rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-radius="50"
                data-te-ripple-color="black">
                Retour
            </button>}
            <Outlet />
        </div>
    </>
}

export default MainLayout;