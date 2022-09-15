import React from 'react';

const Navbar = () => {
	return (
        <header className='nav'>
        <nav>
            <ul className='navHome'>
                <li>
                <h2>Map</h2>
                </li>

                <li>
                    <h2>Friends</h2>
                </li>

                <li>
                    <h2>Favorites</h2>
                </li>
            </ul>
        </nav>
    </header>
	);
};

export default Navbar;