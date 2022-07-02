import cssStat from '../Statistics/Index.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={cssStat.statistics}>
      {/* check for title, render H2 */}
      {title ? <h2 className="title">{title}</h2> : ''}

      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label} - </span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};

export default Statistics;
