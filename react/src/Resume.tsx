import React from 'react';
import { ResumeDAO } from './dataobjects/ResumeDAO';
import WorkExperience from './WorkExperience';
import './Resume.scss'
import SkillsList from './SkillsList';

function Resume(props: ResumeDAO) {
    return (
        <div className="resume-container">
            <div className="personal-info">
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
            <section className="section">
                <h2>Experience</h2>
            </section>
            <div className="work-experience-list">
                {props.experience.map((e, i) => {
                    return <WorkExperience key={i} {...e} />
                })}
            </div>
            <section className="section">
                <h2>Skills</h2>
            </section>
            <SkillsList skills={props.skills}/>
        </div>
    )
}

export default Resume;