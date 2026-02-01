import Cards from "../Cards/Cards";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Goals from "../Goals/Goals";
import OutcomeStatistics from "../OutcomeStatistics/OutcomeStatistics";
import NewTransacition from "../NewTransaction/NewTransaction";
import { MainProps } from "./Main.type";

import './Main.css';

const Main = () => {
    return (
    <div className="main-container">
            <div className="main__left">
                <Cards>
                </Cards>
                <TransactionHistory>
                    <h1>2</h1>
                </TransactionHistory>
            </div>
            <div className="main__right">
                <Goals>
                </Goals>
                <OutcomeStatistics>
                    <h1>4</h1>
                </OutcomeStatistics>
                <NewTransacition>
                    <h1>5</h1>
                </NewTransacition>
            </div>
    </div>)
}

export default Main;