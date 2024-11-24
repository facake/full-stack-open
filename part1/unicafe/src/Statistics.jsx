import React from 'react';
import StatisticLine from './components/StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <div>
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={all} />
          <StatisticLine text='Average' value={(good + bad * -1) / all} />
          <StatisticLine text='Positive' value={`${(good / all) * 100}%`} />
        </table>
      )}
    </div>
  );
};

export default Statistics;
