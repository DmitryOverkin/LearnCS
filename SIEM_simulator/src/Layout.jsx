import { Outlet } from 'react-router';
import { sideBarBtns } from './data/data';
import { useState } from 'react';

import { Link } from 'react-router';

function Layout() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClickActiveBtn = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className='container'>
            <aside className='sidebar'>
                {sideBarBtns.map((btn, index) => (
                    <Link to={btn.path}
                        className={`sidebar__btn ${index === activeIndex ? 'active' : ''}`}
                        key={btn.title}
                        onClick={() => handleClickActiveBtn(index)} >
                        {btn.title}
                    </Link>
                ))}
            </aside>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;