import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Reading({ data }) {
    const check = (e) => {
        const links = document.querySelectorAll('.read-link');
        links.forEach((link) => link.classList.remove('active'));
        e.currentTarget.classList.add('active');
    };

    return (
        <div className='read'>
            <div className='read-section py-3'>
                {data.map((item) => (
                    <div
                        className='read-link px-4 py-1'
                        key={item.start}
                        onClick={check}
                    >
                        <Link to={`${item.start}`}>{item.name}</Link>
                    </div>
                ))}
            </div>
            <div className='read-aside px-5 py-3'>
                <Outlet />
            </div>
        </div>
    );
}

export default Reading;
