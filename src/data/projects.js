// Proyecto 1
import portadaP1 from '../Images/Proyecto_uno/portada_p1.png';
import portadaP1Title from '../Images/Proyecto_uno/portada_p1_sin_fondo.png';
import p1_1 from '../Images/Proyecto_uno/p1.png';
import p1_2 from '../Images/Proyecto_uno/p2.png';
import p1_3 from '../Images/Proyecto_uno/p3.png';
import p1_4 from '../Images/Proyecto_uno/p4.png';
import p1_5 from '../Images/Proyecto_uno/p5.png';
import p1_6 from '../Images/Proyecto_uno/p6.png';
import p1_7 from '../Images/Proyecto_uno/p7.png';
import p1_8 from '../Images/Proyecto_uno/p8.png';

// Proyecto 2
import portadaP2Title from '../Images/proyecto_dos/portada_sin_fondo p2.png';
import p2_1 from '../Images/proyecto_dos/pa1.png';
import p2_2 from '../Images/proyecto_dos/pa2.png';
import p2_3 from '../Images/proyecto_dos/pa3.png';
import p2_4 from '../Images/proyecto_dos/pa4.png';
import p2_5 from '../Images/proyecto_dos/pa5.png';
import p2_6 from '../Images/proyecto_dos/pa6.png';
import p2_7 from '../Images/proyecto_dos/pa7.png';
import p2_8 from '../Images/proyecto_dos/pa8.png';
import p2_9 from '../Images/proyecto_dos/pa9.png';

// Proyecto 3
import portadaP3Title from '../Images/proyecto_tres/portada_p3_sin fondo.png';
import p3_1 from '../Images/proyecto_tres/p1.png';
import p3_2 from '../Images/proyecto_tres/p2.png';
import p3_3 from '../Images/proyecto_tres/p3.png';
import p3_4 from '../Images/proyecto_tres/p4.png';

// Proyecto 4
import portadaP4Title from '../Images/proyecto_cuatro/portada_p4 sinfondo.png';
import p4_1 from '../Images/proyecto_cuatro/p1.png';
import p4_2 from '../Images/proyecto_cuatro/p2.png';
import p4_3 from '../Images/proyecto_cuatro/p3.png';
import p4_4 from '../Images/proyecto_cuatro/p4.png';

export const projects = [
  {
    id: 1,
    title: "Creme & Vice",
    category: "Identidad Visual",
    previewImage: portadaP1,
    titleImage: portadaP1Title,
    images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7, p1_8],
    description: "Diseño de identidad completa para Botanico Medellin.",
    link: "https://drive.google.com/file/d/1KEE6jaLKNIvP1CE749l9f6lp8gY0MOwU/view?usp=sharing",
  },
  {
    id: 2,
    title: "Orquideas y Felinos",
    category: "Fotografia",
    previewImage: portadaP2Title,
    titleImage: portadaP2Title,
    images: [p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7, p2_8, p2_9],
    description: "Sesion fotografica para agencia de modelos.",
    link: "https://drive.google.com/file/d/1ugOW1l7Zth98tk0dk67givmw3PKCGkPE/view?usp=sharing",
  },
  {
    id: 3,
    title: "Prints",
    category: "Diseño Editorial",
    previewImage: portadaP3Title,
    titleImage: portadaP3Title,
    images: [p3_1, p3_2, p3_3, p3_4],
    description: "Maquetacion y diseño de revista de moda.",
  },
  {
    id: 4,
    title: "Poster",
    category: "Diseño",
    previewImage: portadaP4Title,
    titleImage: portadaP4Title,
    images: [p4_1, p4_2, p4_3, p4_4],
    description: "",
  },
];
