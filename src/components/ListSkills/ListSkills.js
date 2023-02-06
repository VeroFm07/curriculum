import React from 'react'
import './ListSkills.scss';
import SkillBar from 'react-skillbars'

const ListSkills = (props) => {
    const {skills, colors}=props;

  return (
    <div className='container__list'>
      <SkillBar skills={skills} colors={colors} animationDelay={0} animationDuration={1500}/>
    </div>
  )
}

export default ListSkills
