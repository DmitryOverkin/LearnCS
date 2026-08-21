import { useContext, useMemo, useState } from 'react';
import InfoTable from '../components/InfoTable';
import PaginationTools from '../components/PaginationTools';
import { LogsContext } from '../context/LogsContext';

const AllLogs = () => {
    const { logs } = useContext(LogsContext)
    const [page, setPage] = useState(1);

    // Фильтрация логов
    const [ip, setIp] = useState('');
    const [status, setStatus] = useState('all');
    const [sortedBy, setSortedBy] = useState('asc');

    const LOGS_PER_PAGE = 12

    const handleChangeIp = (value) => {
        setIp(value)
    }

    const handleChangeStatus = (newStatus) => {
        setStatus(newStatus)
    }


    const handleChangeSortedBy = () => {
        setSortedBy(sortedBy === 'asc' ? 'desc' : 'asc')
    }

    const filteredLogs = useMemo(() => {
        let filteredLogs = [...logs]

        if (ip.length >= 3) { filteredLogs = filteredLogs.filter(log => log.ip.includes(ip)) }

        if (status !== 'all') { filteredLogs = filteredLogs.filter(log => log.status === status) }

        if (sortedBy === 'asc') { filteredLogs = [...filteredLogs].sort((a, b) => a.id - b.id) }
        if (sortedBy === 'desc') { filteredLogs = [...filteredLogs].sort((a, b) => b.id - a.id) }

        return filteredLogs;

    }, [logs, ip, status, sortedBy])

    const recentLogs = useMemo(() => {
        const start = (page - 1) * LOGS_PER_PAGE;
        const end = start + LOGS_PER_PAGE;
        return filteredLogs.slice(start, end);

    }, [filteredLogs, page])


    const nextPage = () => {
        if (page * LOGS_PER_PAGE < filteredLogs.length) {
            setPage(prev => prev + 1)
        }
    }

    const prevPage = () => {
        setPage(prev => Math.max(prev - 1, 1))
    }

    return (
        <div className='all-logs__container'>
            <InfoTable
                currentStatus={status}
                isLogsPage={true}
                logs={recentLogs}
                handleChangeIp={handleChangeIp}
                handleChangeStatus={handleChangeStatus}
                handleChangeSortedBy={handleChangeSortedBy}
            />
            <PaginationTools page={page} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}

export default AllLogs;