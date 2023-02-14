import { List,Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good,neutral,bad,total,positivePercentage}) =>{
    return(
        <List >
        <Item >Good:{good}</Item>
        <Item >Neutral:{neutral}</Item>
        <Item >Bad:{bad}</Item>
        <Item >Total:{total}</Item>
        <Item >Positive feedback:{positivePercentage}%</Item>
      </List>
    )
}



Statistics.protoType = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.func.isRequired,
  positivePercentage:PropTypes.func.isRequired
}


