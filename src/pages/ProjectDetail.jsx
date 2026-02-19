import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="project-not-found">Proyecto no encontrado</div>;
    }

    return (
        <div className="project-detail-container">
            <Link to="/" className="back-button">← Volver</Link>

            <header className="project-header">
                {project.titleImage
                    ? <img src={project.titleImage} alt={project.title} className="project-title-image" />
                    : <h1 className="project-title">{project.title}</h1>
                }
            </header>

            <div className="project-gallery">
                {project.images.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`${project.title} - ${index + 1}`} />
                    </div>
                ))}
            </div>

            {project.link && (
                <div className="project-link-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Ver más sobre el proyecto aquí →
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
