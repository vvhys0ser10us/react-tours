import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour) => {
            const { id } = tour
            return <Tour key={id} {...tour} removeTour={removeTour}></Tour>
          })}
        </div>
      </div>
    </section>
  )
}

export default Tours
