import React from 'react'

export default function Roulette(props) {
  const {
    onGoClick,
  } = props;
  return (
    <div className="roulette">
        &nbsp;
        <h1 className="font-question">DON'T KNOW WHAT TO EAT?</h1>
        <h3 className="font-wheel">WHEEL DECIDE</h3>
        &nbsp;
        <button class="button-59" role="button" onClick={onGoClick}>GO</button>
    </div>
  )
}
