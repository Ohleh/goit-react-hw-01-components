import css from '../Statistics/Index.module.css';
import propTypes from 'prop-types';

function setBg() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {/* check for title, render H2 */}
      {title ? <h2 className={css.title}>{title}</h2> : ''}

      <ul className={css.statList}>
        {stats.map(el => (
          <li
            className={css.item}
            key={el.id}
            style={{ backgroundColor: setBg() }}
          >
            <span className={css.label}>{el.label} </span>
            <span className={css.percentage}>{el.percentage}%</span>
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
