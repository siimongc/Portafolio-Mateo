import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TitleImage from '../components/TitleImage';
import { projects } from '../data/projects';
import fotoMajo from '../Images/imagen_majo.jpeg';
import { FaPinterest, FaBehance } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <TitleImage />
                <div className="scroll-hint">
                    <button
                        className="scroll-btn"
                        onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="scroll-btn__label">Ver proyectos</span>
                        <span className="scroll-btn__arrow">↓</span>
                    </button>
                </div>
            </header>

            <section className="profile-section">
                <div className="profile-col profile-col--identity">
                    <img src={fotoMajo} alt="Maria José Molinah" className="profile-photo" />
                    <h2 className="profile-name">Maria José Molinah</h2>
                    <span className="profile-role">Diseñadora Gráfica</span>
                    <p className="profile-location">📍 Medellín, Colombia</p>
                    <p className="profile-email">mariajosemolinah@amigo.edu.co</p>
                    <div className="social-icons">
                        <a href="" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Pinterest">
                            <FaPinterest size={26} color="#e60023" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Behance">
                            <FaBehance size={26} color="#1769ff" />
                        </a>
                        <a href="mailto:mariajosemolinah@amigo.edu.co" className="social-icon" aria-label="Email">
                            <MdOutlineEmail size={28} color="#e2f788" />
                        </a>
                    </div>
                </div>

                <div className="profile-col profile-col--bio">
                    <span className="col-label">Sobre mí</span>
                    <p className="bio bio--small">Diseñadora gráfica enfocada en creatividad, narrativa visual y soluciones funcionales. Me apasiona el diseño estratégico, la ilustración y la creación de conceptos visuales que generen conexiones emocionales con las audiencias.</p>
                    <p className="bio bio--small">Manejo avanzado de herramientas como Adobe Illustrator, Photoshop, InDesign, After Effects y Figma.</p>
                    <p className="bio bio--small"> Destaco por mi versatilidad, pensamiento conceptual y sensibilidad estética, así como por mi capacidad de adaptar el lenguaje visual a cada proyecto. Tengo experiencia en entornos colaborativos y multidisciplinarios, guiando ideas desde la conceptualización hasta la ejecución con una actitud proactiva y orientada a resultados.</p>

                    <span className="col-label">Educación formal</span>
                    <p className="bio">Universidad Católica Luis Amigó</p>
                </div>

                <div className="profile-col profile-col--skills">
                    <span className="col-label">Educación no formal</span>
                    <ul className="skills-list">
                        <li>Diseño de moda — Academia de moda Colgo</li>
                        <li>Camisas tipográficas</li>
                        <li>Risografía</li>
                        <li>Ilustración expresiva</li>
                        <li>Serigrafía ilustrativa</li>
                    </ul>

                    <span className="col-label">Experiencia</span>
                    <ul className="skills-list">
                        <li>Botánico Medellin S.A.S ost &amp; Mesera — 2022</li>
                        <li>Nix Models Modelo - 2024-presente </li>
                    </ul>

                    <span className="col-label">Software</span>
                    <ul className="skills-list">
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Clip StudioP</li>
                        <li>Indesign</li>
                        <li>After Effects</li>
                        <li>Figma</li>
                        <li>Uso hábil de IA</li>
                        <li>V0</li>
                    </ul>

                    <span className="col-label">Idiomas</span>
                    <ul className="skills-list">
                        <li>Inglés C1 — Universidad EAFIT, Centro de idiomas</li>
                    </ul>
                </div>
            </section>

            <main className="projects-grid" id="proyectos">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </main>
        </div>
    );
};

export default Home;
