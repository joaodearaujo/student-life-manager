import { TransactionHistoryProps } from "./TransactionHistory.type"
import './TransactionHistory.css'
const TransactionHistory = ({children} : TransactionHistoryProps) => {
    return(
        <div className="th-container">
            {children}
        </div>
    )
}

export default TransactionHistory;