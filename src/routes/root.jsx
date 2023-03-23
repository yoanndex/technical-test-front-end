import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Root = () => <div>
    <nav>
        <ul>
            <li>
                <Link to="/">OPEN FOOD FACTS</Link>
            </li>
            <li>
                <Link to="/Products/pomme de terre">Recherche: pomme de terre</Link>
            </li>
            <li>
                <Link to="/Product/3168930009078">Flocons d'avoine complète</Link>
            </li>
            <li>
                <Link to="/Product/8852018101024">Chicken Flavour</Link>
            </li>
        </ul>
    </nav>
    <div>
        <Outlet />
    </div>
</div>

export default Root;