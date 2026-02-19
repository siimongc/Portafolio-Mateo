import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = project.images;

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Link to={`/project/${project.id}`} className="project-card">
            <div className="card-image-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={project.title}
                        className={`card-image${index === currentIndex ? ' card-image--active' : ''}`}
                    />
                ))}
                <div className="card-overlay">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-category">{project.category}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
