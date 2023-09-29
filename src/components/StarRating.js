import React from 'react';
import Rating from 'react-native-star-rating';
import Icons from '../assets/Icons';

const StarRating = props => {
  return (
    <Rating
      maxStars={5}
      fullStar={Icons.starFilled}
      emptyStar={Icons.starEmpty}
      halfStar={Icons.starHalf}
      starSize={15}
      containerStyle={{width: props?.starSize * 6 || 90}}
      {...props}
    />
  );
};

export default StarRating;
