import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ elements }) => <nav className="bg-grey-light w-full rounded-md">
    <ol className="list-reset flex">
        {
            elements.map((el, index) => <>
                <li>
                    <Link
                        to={el.url}
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
                    >{el.title}</Link>
                </li>
                {index !== elements.length - 1 && <li>
                    <span className="mx-2 text-neutral-500">></span>
                </li>}
            </>)
        }
    </ol>
</nav>

Breadcrumb.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({}))
};

Breadcrumb.defaultProps = {
    elements: []
}

export default Breadcrumb;