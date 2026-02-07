import './TransactionHistory.css'
import { historyInfoProps } from "./TransactionHistory.type"

const historyInfo = [
  {
    "id": 1,
    "receiver": "Tesco Supermarket",
    "type": "Groceries",
    "date": "01 Feb 2026",
    "amount": 145.20,
    "icon": "/grocery-store.png"
  },
  {
    "id": 2,
    "receiver": "Five Guys Burgers",
    "type": "Fast Food",
    "date": "02 Feb 2026",
    "amount": 32.50,
    "icon": "/fast-food.png"
  },
  {
    "id": 3,
    "receiver": "Uber Eats Delivery",
    "type": "Delivery",
    "date": "02 Feb 2026",
    "amount": 12.90,
    "icon": "/fast-delivery.png"
  },
  {
    "id": 4,
    "receiver": "John Doe (Transfer)",
    "type": "Personal",
    "date": "03 Feb 2026",
    "amount": 500.00,
    "icon": "/user.png"
  },
  {
    "id": 5,
    "receiver": "Whole Foods Market",
    "type": "Groceries",
    "date": "04 Feb 2026",
    "amount": 89.99,
    "icon": "/grocery-store.png"
  },
  {
    "id": 6,
    "receiver": "Pizza Hut",
    "type": "Fast Food",
    "date": "04 Feb 2026",
    "amount": 25.00,
    "icon": "/fast-food.png"
  },
  {
    "id": 7,
    "receiver": "DHL Express Shipping",
    "type": "Delivery",
    "date": "05 Feb 2026",
    "amount": 45.15,
    "icon": "/fast-delivery.png"
  },
  {
    "id": 8,
    "receiver": "Alice Smith",
    "type": "Personal",
    "date": "05 Feb 2026",
    "amount": 150.00,
    "icon": "/user.png"
  },
  {
    "id": 9,
    "receiver": "Walmart",
    "type": "Groceries",
    "date": "06 Feb 2026",
    "amount": 210.30,
    "icon": "/grocery-store.png"
  },
  {
    "id": 10,
    "receiver": "KFC",
    "type": "Fast Food",
    "date": "06 Feb 2026",
    "amount": 18.75,
    "icon": "/fast-food.png"
  },
  {
    "id": 11,
    "receiver": "DoorDash",
    "type": "Delivery",
    "date": "06 Feb 2026",
    "amount": 6.00,
    "icon": "/fast-delivery.png"
  },
  {
    "id": 12,
    "receiver": "Gym Instructor",
    "type": "Personal",
    "date": "06 Feb 2026",
    "amount": 80.00,
    "icon": "/user.png"
  }
];
const HistoryTable = (historyInfo : historyInfoProps) => {
    return (
        <tbody className="history__body">
                <tr className="history__row">
                    <td className="history__cell history__cell--receiver">
                            <span>
                        <div className="history__image-background">
                            <img src={`${historyInfo.icon}`} 
                                 alt="" 
                                 className="history__icon"/>
                        </div>
                            {historyInfo.receiver}
                            </span>
                    </td>
                    <td className="history__cell history__cell--type">{historyInfo.type}</td>
                    <td className="history__cell history__cell--date">{historyInfo.date}</td>
                    <td className="history__cell history__cell--amount">${historyInfo.amount}</td>
                </tr>
        </tbody>
    )
}

const TransactionHistory = () => {

    return(
        <div className="transaction-history">
            <h1 className="transaction-history__title">Transaction History</h1>
            <div className="transaction-history__table-container">
                <table className="transaction-history__table">
                    <thead className="transaction-history__head">
                        <th className="transaction-history__header transaction-history__header--receiver">Receiver</th>
                        <th className="transaction-history__header transaction-history__header--type" >Type</th>
                        <th className="transaction-history__header transaction-history__header--date">Date</th>
                        <th className="transaction-history__header transaction-history__header--amount">Amount</th>
                    </thead>
                    {historyInfo.map((item, index) => (
                        <HistoryTable
                            id={index}
                            receiver={item.receiver}
                            type={item.type}
                            date={item.date}
                            amount={item.amount}
                            icon={item.icon}
                        />
                    ))}
                </table>
            </div>           
        </div>
    )
}

export default TransactionHistory;