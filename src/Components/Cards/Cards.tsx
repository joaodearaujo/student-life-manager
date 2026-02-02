import { useState } from "react";
import { UserCard } from "../../moks/FinancialData";
import './Cards.css';

const CreditCard = ({bankName, cardNumber, typeCard, name, expirationDate, color } : UserCard) => {
    return (
        <div className="credit-card" style={{backgroundColor:`${color}`}}>
            <div className="credit-card__header"> 
                <h1 className="credit-card__brand">{bankName}</h1>
                <p className="credit-card__type">{typeCard}</p>
            </div>
            <p className="credit-card__number">{cardNumber}</p>
            <div className="credit-card__info">
                <div className="credit-card__group"> 
                    <p className="credit-card__label">Card holder</p>
                    <p className="credit-card__value">{name}</p>
                </div>
                <div className="credit-card__group">
                    <p className="credit-card__label">Expiration date</p>
                    <p className="credit-card__value">{expirationDate}</p>
                </div>
            </div>
        </div>
    )
}

const CardLimit = ({weeklyLimit, weeklyUsed} : UserCard ) => {

    const usedPercentage: number = (weeklyUsed / weeklyLimit) * 100
    
    return (
        <div className="card-limit">
            <div className="card-limit__bar">
                <div className="card-limit__fill" style={{width:`${usedPercentage}%`}}></div>
            </div>
            <div className="card-limit__info">
                <p className="card-limit__label">Weekly payment limit</p>
                <p className="card-limit__value">{`$${weeklyUsed} / $${weeklyLimit}`}</p>
            </div>
        </div>
    )
}

const BalanceSummary = ({currentBalance, income, outcome} : UserCard) => {
    return (
        <div className="balance-summary">
            <div className="balance-summary__item">
                <p className="balance-summary__amount balance-summary__amount--primary">{`$${currentBalance}`}</p>
                <p className="balance-summary__label">Current Balance</p>
            </div>
            <div className="balance-summary__item">
                <p className="balance-summary__amount balance-summary__amount--income">{`$${income}`}</p>
                <p className="balance-summary__label">Income</p>
            </div>
            <div className="balance-summary__item">
                <p className="balance-summary__amount balance-summary__amount--outcome">{`$${outcome}`}</p>
                <p className="balance-summary__label">Outcome</p>
            </div>
        </div>
    )
}

const Cards = (MOCK_CARDS : UserCard ) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = () => setCurrentIndex((prev) => (prev + 1 ) % userCards.length);
    const prevIndex = () => setCurrentIndex((prev) => (prev - 1 + userCards.length) % userCards.length);
    
    const userCards: UserCard[] =[ 
        {
        bankName: 'Nubank',
        typeCard: 'credit',
        cardNumber: '5105 **** **** 4567',
        name: 'João Pedro Araújo',
        expirationDate: '06/32',
        weeklyLimit: 4000,
        weeklyUsed: 3500.6,
        currentBalance: 2000.00,
        income: 2500.00,
        outcome: 500.00,
        color: '#8A05BE'
    },
    {
        bankName: 'Inter',
        typeCard: 'debit',
        cardNumber: '4532 **** **** 1289',
        name: 'João Pedro Araújo',
        expirationDate: '11/29',
        weeklyLimit: 2500,
        weeklyUsed: 450.0,
        currentBalance: 12450.75,
        income: 5000.00,
        outcome: 1200.00,
        color: '#FF7A00'
    },
    {
        bankName: 'Santander',
        typeCard: 'platinum',
        cardNumber: '5434 **** **** 9012',
        name: 'J. Pedro Araújo',
        expirationDate: '01/28',
        weeklyLimit: 8000,
        weeklyUsed: 2100.0,
        currentBalance: 3200.50,
        income: 4000.00,
        outcome: 800.00,
        color: '#EC0000'
    },
    {
        bankName: 'C6 Bank',
        typeCard: 'black',
        cardNumber: '3782 **** **** 0041',
        name: 'Joao P. Araujo',
        expirationDate: '02/30',
        weeklyLimit: 15000,
        weeklyUsed: 8900.0,
        currentBalance: 450.10,
        income: 1500.00,
        outcome: 3200.00,
        color: '#212121'
    },
    {
        bankName: 'Chase Bank',
        typeCard: 'credit',
        cardNumber: '4242 **** **** 4242',
        name: 'Joao P. Araujo',
        expirationDate: '05/27',
        weeklyLimit: 5000,
        weeklyUsed: 5000.0,
        currentBalance: 0.00,
        income: 0.00,
        outcome: 150.00,
        color: '#117ACA'
    }
    ]

    const currentCard = userCards[currentIndex];

    return(
    <div className="cards-container">
        <h1 className="cards__title">Cards</h1>
        
        <div className="cards__wrapper"> 
            <div className="cards__main-column">
                <div className="cards__navigation">
                    <button className="cards__nav-button cards__nav-button--left"
                            onClick={prevIndex}>
                        <img src="/left-arrow.png" alt="Previous" className="cards__arrow-icon"/>
                    </button>
                        <CreditCard {...currentCard}/>
                    <button className="cards__nav-button cards__nav-button--right"
                    onClick={nextIndex}>
                        <img src="/right-arrow.png" alt="Next" className="cards__arrow-icon"/>
                    </button>
                </div>
                <CardLimit {...currentCard}/>
            </div>
            <div className="vertical-line"></div>
            <div className="cards__side-column">
                <BalanceSummary {...currentCard} />
            </div>
        </div>
    </div>
    )
}

export default Cards;