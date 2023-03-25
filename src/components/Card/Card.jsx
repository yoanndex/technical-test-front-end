import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ imageUrl, title, description, to }) =>
    <div className="flex flex-initial w-48 shadow-md">
        <div
            className="flex flex-col max-w-sm rounded-lg bg-white">
            <Link to={to} data-te-ripple-init data-te-ripple-color="light">
                <img
                    className="rounded-t-lg mw-32 h-32 mx-auto"
                    src={imageUrl}
                    alt="" />
            </Link>
            <div className="flex flex-col h-full p-6">
                <h5
                    className="mb-2 text-sm font-bold leading-tight text-neutral-800">
                    {title}
                </h5>
                <p className="h-full mb-4 text-base text-neutral-600 line-clamp-3">
                    {description}
                </p>
                <Link className="self-center" to={to} data-te-ripple-init data-te-ripple-color="light">
                    <button
                        type="button"
                        className="inline-block border rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                        data-te-ripple-init
                        data-te-ripple-radius="50"
                        data-te-ripple-color="black">
                        Consulter
                    </button>
                </Link>
            </div>
        </div>
    </div >

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}
export default Card;