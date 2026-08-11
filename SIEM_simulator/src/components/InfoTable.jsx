import { useMemo } from "react"

const InfoTable = (props) => {

    const recentLogs = useMemo(() => {
        return props.logs.slice(-6).reverse();
    }, [props.logs])

    const handleColorStatus = (status) => {
        switch (status) {
            case 'allow':
                return {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    padding: '0 calc(12 * (100vw / 1124))',
                    border: '1px solid green',
                    borderRadius: '5px'
                }
            case 'denied':
                return {
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    padding: '0 calc(12 * (100vw / 1124))',
                    border: '1px solid red',
                    borderRadius: '5px'
                }
            default:
                return {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    padding: '0 calc(12 * (100vw / 1124))',
                    border: '1px solid gray',
                    borderRadius: '5px'
                }
        }
    }
    return (
        <table className="table">
            <caption>Входящий трафик:</caption>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">IP</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Время</th>
                </tr>
            </thead>
            <tbody>
                {props.logs.length === 0 ? (
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center' }}>
                            Нет событий. Ожидание трафика...
                        </td>
                    </tr>
                ) : (
                    recentLogs.map(log => (
                        <tr key={log.id}>
                            <th scope="row">{log.id}</th>
                            <td>{log.ip}</td>
                            <td>
                                <span style={handleColorStatus(log.status)}>
                                    {log.status}
                                </span>
                            </td>
                            <td>{log.time}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}

export default InfoTable;