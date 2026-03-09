import React from 'react';
import './ProjectSummary.css';

const ProjectSummary = ({ text }) => {
    if (!text) return null;
    const paragraphs = text.split('\n\n').filter(Boolean);
    return (
        <div className="project-summary">
            {paragraphs.map((p, i) => (
                <p key={i} className="project-summary__text">{p}</p>
            ))}
        </div>
    );
};

export default ProjectSummary;
