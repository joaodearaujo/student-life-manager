import './App.css'
import MainCard from './Components/MainCard/MainCard';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { MOCK_USER } from './moks/FinancialData';

import Cards from "./Components/Cards/Cards";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import Goals from "./Components/Goals/Goals";
import OutcomeStatistics from "./Components/OutcomeStatistics/OutcomeStatistics";
import NewTransaction from "./Components/NewTransaction/NewTransaction";

function App() {
  return (
      <MainCard>
        <Sidebar/>
        <Header user={MOCK_USER}></Header>
        <Main/>
      </MainCard>
  )
}

export default App;