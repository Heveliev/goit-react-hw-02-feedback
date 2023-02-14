import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({option,onLeaveFeedback})=>{
    return (
        <Button  type='button' onClick={onLeaveFeedback}>{option}</Button>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}