import { useState } from "react";
import { UserCard } from "../../moks/FinancialData";
import Bar from "../common/Bar";
import './Cards.css'

const userCards: UserCard[] = [
  {
    bankName: 'Nubank',
    typeCard: 'credit',
    cardNumber: '5105 **** **** 4567',
    name: 'João Araújo',
    expirationDate: '06/32',
    weeklyLimit: 4000,
    weeklyUsed: 3500.6,
    currentBalance: 2000.00,
    income: 2500.00,
    outcome: 500.00,
    color: '#8A05BE'
  },
  {
    bankName: 'Santander Select',
    typeCard: 'credit',
    cardNumber: '4532 **** **** 1234',
    name: 'João Araújo',
    expirationDate: '11/30',
    weeklyLimit: 2500,
    weeklyUsed: 1200.00,
    currentBalance: 104550.50,
    income: 5200.00,
    outcome: 1800.00,
    color: '#CC0000'
  },
  {
    bankName: 'Mercado Pago',
    typeCard: 'debit',
    cardNumber: '6034 **** **** 8890',
    name: 'João Araújo',
    expirationDate: '02/28',
    weeklyLimit: 1000,
    weeklyUsed: 850.25,
    currentBalance: 450.10,
    income: 1200.00,
    outcome: 1450.00,
    color: '#000'
  },
  {
    bankName: 'Inter',
    typeCard: 'credit',
    cardNumber: '5411 **** **** 9921',
    name: 'João Araújo',
    expirationDate: '08/29',
    weeklyLimit: 6000,
    weeklyUsed: 500.00,
    currentBalance: 1520.00,
    income: 3000.00,
    outcome: 2500.00,
    color: '#FF7A00'
  }
];

const CreditCard = ({bankName, cardNumber, typeCard, name, expirationDate, color } : UserCard) => {
    return (
        <div className="card" style={{backgroundColor:`${color}`}}>
            <div className="card__content">
                <div className="card__header">
                    <h1 className="card__brand">{bankName ?? 'Bank'}</h1>
                    <p className="card__type">{typeCard ?? 'Modalite'}</p>
                </div>
                <p className="card__number">{cardNumber ?? '**** **** **** ****'}</p>
                <div className="card__info">
                    <div className="card__group">
                        <p className="card__label">Card holder</p>
                        <p className="card__value">{name ?? 'Owner'}</p>
                    </div>
                    <div className="card__group">
                        <p className="card__label">Expiration date</p>
                        <p className="card__value">{expirationDate ?? '0/0'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CardLimit = ({weeklyLimit, weeklyUsed} : UserCard ) => {

    const usedPercentage: number = (weeklyUsed / weeklyLimit) * 100
    
    return (                                                                                                                              
        <div className="limit">
            <Bar percentage={usedPercentage}/>
            <div className="limit__info">
                <p className="limit__label">Monthly payment limit</p>
                <p className="limit__value">{`$${weeklyUsed ?? '0'} / $${weeklyLimit ?? '0'}`}</p>
            </div>
        </div>
    )
}

const BalanceSummary = ({currentBalance, income, outcome} : UserCard) => {
    return (
        <div className="balance-summary">
            <div className="balance__item">
                <p className="balance__amount balance__amount--primary">{`$${currentBalance ?? '0'}`}</p>
                <p className="balance__label">Current Balance</p>
            </div>
            <div className="balance__item">
                <p className="balance__amount balance__amount--income">{`$${income ?? '0'}`}</p>
                <p className="balance__label">Income</p>
            </div>
            <div className="balance__item">
                <p className="balance__amount balance__amount--outcome">{`$${outcome ?? '0'}`}</p>
                <p className="balance__label">Outcome</p>
            </div>
        </div>
    )
}

const Cards = (MOCK_CARDS : UserCard ) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndex = () => setCurrentIndex((prev) => (prev + 1 ) % userCards.length);
    const prevIndex = () => setCurrentIndex((prev) => (prev - 1 + userCards.length) % userCards.length);
    
    const currentCard = userCards[currentIndex];

    return(
    <div className="cards">
        <h1 className="cards__title">Cards</h1>

        <div className="cards__wrapper"> 
            <main className="cards__main-column">
                <div className="cards__navigation">
                    <button className="cards__nav-button cards__nav-button--left"
                            onClick={prevIndex}
                            aria-label="Previous Card"
                    >

                        <img src="/left-arrow.png" alt="" aria-hidden="true" className="cards__arrow-icon"/>
                    </button>

                        <CreditCard {...currentCard}/>

                    <button className="cards__nav-button cards__nav-button--right"
                            onClick={nextIndex}
                            aria-label="Next Card"
                    >
                       <img src="/right-arrow.png" alt="" aria-hidden="true" className="cards__arrow-icon"/>
                    </button>
                </div>
                <CardLimit {...currentCard}/>
            </main>

            <hr className="cards__line"/>

            <aside className="cards__side-column">
                <BalanceSummary {...currentCard} /> 
            </aside>
        </div>
    </div>
    )
}

export default Cards;