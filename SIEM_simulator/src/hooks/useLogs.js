import { useState } from "react";

const useLogs = () => {
    const [logs, setLogs] = useState([]);
    const [stats, setStats] = useState({ total: 0, denied: 0, info: 0 });


    const generateRandomIP = () => {
        return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256))
            .join('.');
    }

    const generateLog = () => {
        const ipAddr = generateRandomIP();

        const statuses = ['allow', 'allow', 'allow', 'allow', 'denied', 'info'];
        const logStatus = statuses[Math.floor(Math.random() * statuses.length)];

        const date = new Date();

        return {
            id: Date.now(),
            ip: ipAddr,
            status: logStatus,
            time: date.toLocaleString()
        }
    }

    const addLog = (newLog) => setLogs(prevLogs => [...prevLogs, newLog])
    const addStat = (newLog) => setStats(prev => ({
        total: prev.total + 1,
        denied: prev.denied + (newLog.status === 'denied' ? 1 : 0),
        info: prev.info + (newLog.status === 'info' ? 1 : 0)
    }))

    return { logs, stats, generateLog, addLog, addStat }
}

export default useLogs;