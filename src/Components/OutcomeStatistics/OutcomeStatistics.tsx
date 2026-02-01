import { OutcomeStatisticsProps } from './OutcomeStatistics.type';
import './OutcomeStatistics.css';

const OutcomeStatistics = ({children} :OutcomeStatisticsProps ) => {
    return(
        <div className="os-container">
            {children}
        </div>
    )
}

export default OutcomeStatistics;