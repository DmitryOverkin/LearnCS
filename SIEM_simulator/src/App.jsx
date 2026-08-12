import './App.css'

import CardContaiber from './components/CardContainer';
import Card from './components/Card';
import InfoTable from './components/InfoTable';

import { useEffect, useState } from 'react';

function App() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateLog();
      setLogs(prevLogs => [...prevLogs, newLog]);

      setStats(prev => ({
        total: prev.total + 1,
        denied: prev.denied + (newLog.status === 'denied' ? 1 : 0),
        info: prev.info + (newLog.status === 'info' ? 1 : 0)
      }))
    }, 2000);
    return () => clearInterval(interval)
  }, [])

  return (
    <>
        <CardContaiber>
          <Card title='Всего' value={stats.total} type='allow' />
          <Card title='Заблокировано' value={stats.denied} type='denied' />
          <Card title='Информационные' value={stats.info} type='info' />
        </CardContaiber>
        <InfoTable logs={logs} />
    </>
  )
}

export default App
