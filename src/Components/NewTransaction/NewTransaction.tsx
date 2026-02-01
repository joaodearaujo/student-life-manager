import { NewTransactionProps } from "./NewTransaction.type"
import './NewTransaction.css'

const NewTransacition = ({children} : NewTransactionProps) => {
    return (
        <div className="nt-container">
            {children}
        </div>
    )
}

export default NewTransacition;