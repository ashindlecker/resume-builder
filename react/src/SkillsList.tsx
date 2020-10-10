import React from 'react';

function SkillsList(props: {skills: string[]}) {
    return (
        <ul className="skills-list">
           {props.skills.map((skill, index) => {
               return <li key={index}>{skill}</li>
           })} 
        </ul>
    );
}

export default SkillsList;