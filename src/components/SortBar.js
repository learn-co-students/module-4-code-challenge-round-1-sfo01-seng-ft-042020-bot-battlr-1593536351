import React from 'react'
import './sort-bar.styles.scss'

const SortBar = ({ sortBy, handleSortBots }) => {
  return (
    <div className='sort-bar'>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="health" checked={sortBy === 'health'} onChange={handleSortBots}/>
        Health
      </label>
      <label>
        <input type="radio" value="damage" checked={sortBy === 'damage'} onChange={handleSortBots}/>
        Damage
      </label>
      <label>
        <input type="radio" value="armor" checked={sortBy === 'armor'} onChange={handleSortBots}/>
        Armor
      </label>
    </div>
  )
}

export default SortBar
