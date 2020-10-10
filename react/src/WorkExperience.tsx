import React from 'react';
import { WorkExperienceDAO } from './dataobjects/WorkExperienceDAO';
import Plural from './Plural';

function WorkExperience(props: WorkExperienceDAO) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dateToString = (date: Date) => `${months[date.getMonth()]} ${date.getFullYear()}`
    const startDateText = dateToString(props.start);
    const endDateText = props.end ? dateToString(props.end) : 'Present';

    const monthDiff = (d1: Date, d2: Date) => {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    const workLengthTotalMonths = monthDiff(props.start, props.end ? props.end : new Date())
    const workLengthYears = Math.floor(workLengthTotalMonths / 12);
    const workLengthMonths = workLengthTotalMonths % 12;
    return (
        <div className="workexperience-container">
            <h3 className="title">{props.title}</h3>
            <h4 className="company">{props.company}</h4>
            <p className="dates">
                <span className="times">{startDateText} - {endDateText}</span>
                <span className="duration">
                    <span>( {workLengthYears ? Plural({ value: workLengthYears, text: 'year', plural: 's' }) : ''}</span>
                    <span>{workLengthMonths ? Plural({ value: workLengthMonths, text: 'month', plural: 's' }) : ''} )</span>
                </span>
            </p>
            <ul className="duties-list">
                {props.duties.map((d) => {
                    return <li>{d}</li>
                })}
            </ul>
        </div>
    );
}

export default WorkExperience;