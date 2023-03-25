import React from 'react';

const Header = () => <div className="container mt-12 px-6 mx-auto">
    <section className="mb-8 text-gray-800 text-center">

        <div className="flex justify-center">
            <div className="max-w-[800px]">
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
                    Open Food Facts <br />
                    <span className="text-blue-600">All you can eat!</span>
                </h2>
                <p className="text-gray-500 text-lg">
                    Recherchez ce que vous voulez, du moment que ça se mange !!
                </p>
            </div>
        </div>
    </section>
</div>

export default Header;