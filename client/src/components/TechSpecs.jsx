import React from 'react';
import TechSpec from './TechSpec.jsx';

const TechSpecs = ({techSpecs}) => {
  return (
    <div>
      <div className="features">
        {techSpecs && techSpecs.map((techSpec, index) => <TechSpec key={index} techSpec={techSpec} />)}
      </div>
    </div>
  )
}

export default TechSpecs;

