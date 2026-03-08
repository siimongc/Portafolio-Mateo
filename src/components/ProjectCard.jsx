import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="project-card">
            <div className="card-image-container">
                <img
                    src={project.previewImage}
                    alt={project.title}
                    className="card-image card-image--active"
                />
                <div className="card-overlay">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-category">{project.category}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
