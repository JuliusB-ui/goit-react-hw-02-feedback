import css from './CreateFeedback.module.css';
import PropTypes from 'prop-types';

export const CreateFeedback = ({ options, leaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.optBtn}
          key={option}
          onClick={() => leaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

CreateFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
