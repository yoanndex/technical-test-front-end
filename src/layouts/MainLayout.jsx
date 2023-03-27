import React, { useMemo, useRef } from 'react';
import { Outlet, useNavigate, useLocation, useParams, useNavigation } from 'react-router-dom';
import Header from 'components/Header/Header';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';


const MainLayout = () => {
    const searchTermRef = useRef('');
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { searchTerm, code } = useParams();
    const { state } = useNavigation();
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
        {state === 'loading' && <div className="absolute w-screen h-screen flex items-center justify-center bg-black/20 z-10">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Chargement...</span>
            </div>
        </div>}
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