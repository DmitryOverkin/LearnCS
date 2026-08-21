import { useState } from "react"

const InfoTable = (props) => {

    const [showInputIp, setShowInputIp] = useState(false)
    const [showStatusFilter, setShowStatusFilter] = useState(false);

    const handleColorStatus = (status) => {
        switch (status) {
            case 'allow':
                return {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    padding: '0 calc(12 * (100vw / 1124))',
                    border: '1px solid green',
                    borderRadius: 'calc(5 * (100vw / 1124))'
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
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    padding: '0 calc(12 * (100vw / 1124))',
                    border: '1px solid blue',
                    borderRadius: '5px'
                }
        }
    }

    const handleChangeStatus = (e) => {
        props.handleChangeStatus(e.target.value);
        setShowStatusFilter(false)
    }
    return (
        <table className="table">
            <caption>Входящий трафик:</caption>
            <thead>
                {showInputIp && <input type="text"
                    className="input-ip"
                    placeholder="Введите ip..."
                    onChange={(e) => props.handleChangeIp(e.target.value)} />}
                {showStatusFilter &&
                    <select className="select-status" value={props.currentStatus} onChange={(e) => handleChangeStatus(e)}>
                        <option disabled>Выбирете статус:</option>
                        <option value='all'>Все логи</option>
                        <option value='allow'>allow</option>
                        <option value='denied'>denied</option>
                        <option value='info'>info</option>
                    </select>}
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col"
                        onClick={props.isLogsPage ? () => setShowInputIp(!showInputIp) : null}>
                        IP
                    </th>
                    <th scope="col"
                        onClick={props.isLogsPage ? () => setShowStatusFilter(!showStatusFilter) : null}
                    >Статус</th>
                    <th scope="col" onClick={props.isLogsPage ? props.handleChangeSortedBy : null}>Время</th>
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
                    props.logs.map(log => (
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