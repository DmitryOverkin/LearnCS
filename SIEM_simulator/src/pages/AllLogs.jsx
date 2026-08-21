import { useContext, useMemo, useState } from 'react';
import InfoTable from '../components/InfoTable';
import PaginationTools from '../components/PaginationTools';
import { LogsContext } from '../context/LogsContext';

const AllLogs = () => {
    const { logs } = useContext(LogsContext)
    const [page, setPage] = useState(1);

    const LOGS_PER_PAGE = 12

    const recenLogs = useMemo(() => {
        const start = (page - 1) * LOGS_PER_PAGE;
        const end = start + LOGS_PER_PAGE;
        return logs.slice(start, end);
    }, [logs, page])


    const nextPage = () => {
        if (page * LOGS_PER_PAGE < logs.length) {
            setPage(prev => prev + 1)
        }
    }

    const prevPage = () => {
        setPage(prev => Math.max(prev - 1, 1))
    }

    return (
        <div className='all-logs__container'>
            <InfoTable logs={recenLogs} />
            <PaginationTools page={page} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}

export default AllLogs;