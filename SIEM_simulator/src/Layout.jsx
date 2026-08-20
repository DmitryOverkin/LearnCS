import { Outlet } from 'react-router';
import { sideBarBtns } from './data/data';
import { LogsContext } from './context/LogsContext';

import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useLogs from './hooks/useLogs';



function Layout() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { logs, stats, generateLog, addLog, addStat } = useLogs()

    const handleClickActiveBtn = (index) => {
        setActiveIndex(index);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = generateLog();
            addLog(newLog);
            addStat(newLog)
        }, 2000);
        return () => clearInterval(interval)
    }, [])

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
                <LogsContext.Provider value={{ logs, stats }}>
                    <Outlet />
                </LogsContext.Provider>
            </div>
        </div>
    );
}

export default Layout;