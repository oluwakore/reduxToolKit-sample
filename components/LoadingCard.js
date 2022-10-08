import React from 'react'
import {Card, Skeleton} from 'antd'

function LoadingCard({count}) {
  const cards = () => {
    let totalCards = []

    for(let i = 0; i < count; i++) {
      totalCards.push(
        <Card key={i}>
          <Skeleton active></Skeleton>
        </Card>
      )
    }

    return totalCards
  }


  return (
    <div>
      {cards()}
    </div>
  )
}

export default LoadingCard