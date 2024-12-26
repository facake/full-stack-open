const Total = ({ parts }) => <strong>Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}</strong>;

export default Total;
