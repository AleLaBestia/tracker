import React from 'react'

const isIncome=Math.round(Math.random())

function InfoCard() {
    return (
        <div style={{textAlign:'center',padding:'0 10%'}}>
            TRY SAYING:<br />
             ADD {isIncome ? 'INCOME ' : 'EXPENSE '} 
             FOR {isIncome ? '$100 ' : '50 '} 
             IN CATEGORY {isIncome ? 'BUSINESS ' : 'HOUSE '}
             FOR NEXT TUESDAY
        </div>
    )
}

export default InfoCard
