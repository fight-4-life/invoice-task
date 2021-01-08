import React from 'react'
import s from './Buyer.module.css'

export const Buyer = ({buyer}) => {
    return (
        <div className={s.buyerContainer}>
            <div style={{color: 'red'}}>
                id: {buyer.id}
            </div>
            <div>
                Имя: {buyer.name}
            </div>
            <div>
                Количество покупок: {buyer.count}
            </div>
            <div>
                Средний чек: {buyer.average}
            </div>
            <div>
                Общая сумма: {buyer.total}
            </div>
        </div>
    )
}