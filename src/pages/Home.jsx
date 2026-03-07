import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TitleImage from '../components/TitleImage';
import { projects } from '../data/projects';
import fotoMajo from '../Images/Foto_perfil_mateo.png';
import { FaPinterest, FaBehance, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <TitleImage />
            </header>

            <div className="scroll-hint">
                <button
                    className="scroll-btn"
                    onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="scroll-btn__label">Ver proyectos</span>
                    <span className="scroll-btn__arrow">↓</span>
                </button>
            </div>

            <section className="profile-section">
                <div className="profile-col profile-col--identity">
                    <img src={fotoMajo} alt="Maria José Molinah" className="profile-photo" />
                    <h2 className="profile-name">Mateo Gaviria Cardona</h2>
                    <span className="profile-role">Diseñador Interactivo</span>
                    <p className="profile-location">📍 Medellín, Colombia</p>
                    <p className="profile-email">matedigger30@gmail.com</p>
                    <div className="social-icons">
                        <a href="https://co.pinterest.com/Majito_Molina/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Pinterest">
                            <FaPinterest size={26} color="#e60023" />
                        </a>
                        <a href="https://www.behance.net/mariajomolina" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Behance">
                            <FaBehance size={26} color="#1769ff" />
                        </a>
                        <a href="https://www.instagram.com/geezer_booty/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <FaInstagram size={26} color="#E1306C" />
                        </a>
                    </div>
                </div>

                <div className="profile-col profile-col--bio">
                    <span className="col-label">Sobre mí</span>
                    <p className="bio bio--small">Estudiante de Diseño Interactivo con experiencia en producción audiovisual, diseño sonoro y creación de contenido digital.</p>
                    <p className="bio bio--small">Interesado en el desarrollo de experiencias interactivas e inmersivas que integren narrativa, sonido y tecnología. Experiencia en gestión de proyectos creativos y producción musical independiente.</p>
                    <p className="bio bio--small"> con enfoque en la exploración de medios digitales como herramientas de expresión y comunicación, combinando pensamiento conceptual con ejecución técnica. Capacidad para trabajar de manera autónoma y colaborativa en entornos creativos, aportando soluciones innovadoras desde la intersección entre arte y tecnología.</p>

                    <span className="col-label">Educación formal</span>
                    <p className="bio">EAFIT - university</p>

                    <span className="col-label">Educación no formal</span>
                    <ul className="skills-list">
                        <li>Comunicación audiovisual - Platzi</li>
                        <li>Adobe Premiere Pro - Platzi</li>
                        <li>Adobe Photoshop - Platzi</li>
                        <li>Social Media Management - Platzi</li>
                    </ul>
                </div>

                <div className="profile-col profile-col--skills">

                    <span className="col-label">Experiencia</span>
                    <ul className="skills-list">
                        <li>Izalith – Proyecto musical independiente (Dirección creativa, compositor, productor y gestión general) (2023 – Actualidad)</li>
                        <li>EAFIT - proyecto en realidad virtual “poterna” (Dirección creativa, programador, diseño sonoro) </li>
                        <li>Vinnienoize band/Ankenoz - (participación en grandes presentaciones y gestión de logística y sonido) (2024-actualidad) </li>
                        <li>Canal de YouTube e Instagram (varios formatos de video)(2019 – 2024) </li>
                        <li>inyectores y carburadores el mono - (servicio al cliente, diligencias varias, mecánica) (2021 - 2023) </li>

                    </ul>

                    <span className="col-label">Software</span>
                    <ul className="skills-list">
                        <li>Unity</li>
                        <li>Adobe Premiere Pro</li>
                        <li>Adobe Photoshop</li>
                        <li>Reaper</li>
                        <li>BandLab</li>
                        <li>YouTube Studio</li>
                        <li>TikTok Studio</li>
                        <li>Adobe lightroom</li>
                    </ul>

                    <span className="col-label">Idiomas</span>
                    <ul className="skills-list">
                        <li>Inglés C1 — Universidad EAFIT, Centro de idiomas</li>
                    </ul>
                </div>
            </section>

            <div className="cv-hint">
                <a href="" target="_blank" rel="noopener noreferrer" className="scroll-btn">
                    <span className="scroll-btn__label">Ver hoja de vida</span>
                    <span>↗</span>
                </a>
            </div>

            <main className="projects-grid" id="proyectos">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </main>
        </div>
    );
};

export default Home;
