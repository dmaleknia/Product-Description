import React from 'react';
import Feature from './Feature.jsx';

const Features = ({features}) => {
  return (
    <div>
      <div className="features">
        {features && features.map((feature, index) => <Feature key={index} feature={feature}/>)}
      </div>
    </div>
  )
}


export default Features;

