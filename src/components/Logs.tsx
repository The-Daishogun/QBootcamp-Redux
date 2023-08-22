import { useAppSelector } from "../store/hooks"

export const Logs = () => {
    const logs = useAppSelector((state) => state.counter.logs)
    return (
        <ul>
            {logs.map((log) =>
                <li key={log.date.getTime()}>
                    <div className="log_msg">{log.msg}</div>
                    <div className="log_date">{log.date.toISOString()}</div>
                </li>
            )}
        </ul>
    )
}