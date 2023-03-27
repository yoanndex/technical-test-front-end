import React, { useMemo, useRef } from 'react';
import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';


const MainLayout = () => {
    const searchTermRef = useRef('');
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { searchTerm, code } = useParams();

    const breadcrumbDatas = useMemo(
        () => {
            if (pathname === '/') {
                searchTermRef.current = '';
            }
            if (searchTerm) {
                searchTermRef.current = searchTerm;
            }
            const datas = [{ url: '/', title: 'Accueil' }];
            code && searchTermRef.current && datas.push({ url: `products/${searchTermRef.current}`, title: searchTermRef.current });
            return datas;
        },
        [pathname, searchTerm]
    );

    return <>
        <Header />
        <div className='mx-16 mt-16'>
            <div className="flex justify-between">
                {pathname !== '/' && <Breadcrumb elements={breadcrumbDatas} />}
                {pathname !== '/' && <button
                    onClick={() => navigate(-1)}
                    type="button"
                    className="block ml-auto mr-0 mb-8 border rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-radius="50"
                    data-te-ripple-color="black">
                    Retour
                </button>}
            </div>
            <div className='mt-16'>
                <Outlet />
            </div>
        </div>
    </>
}

export default MainLayout;