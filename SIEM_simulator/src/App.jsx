import './App.css'

import CardContaiber from './components/CardContainer';
import Card from './components/Card';
import InfoTable from './components/InfoTable';
import { LogsContext } from './context/LogsContext';

import { useContext } from 'react';

function App() {

  const { logs, stats } = useContext(LogsContext)

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
