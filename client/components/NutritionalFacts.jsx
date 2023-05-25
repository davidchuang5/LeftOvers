import React from 'react'

const NutrionalFacts = ({calories}) => {
  return (
    <div>
      <p key={calories}>Calories: {Math.round(calories)}</p>
    </div>
  )
}

export default NutrionalFacts;