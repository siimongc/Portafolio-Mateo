// Proyecto 1
import portadaP1Title from '../Images/Proyecto_uno/portada_p1_sin_fondo.png';

// Proyecto 2
import portadaP2Title from '../Images/proyecto_dos/portada_sin_fondo p2.png';
import p2_1 from '../Images/proyecto_dos/pa1.png';
import p2_2 from '../Images/proyecto_dos/pa2.jpeg';
import p2_3 from '../Images/proyecto_dos/pa3.jpeg';
import p2_4 from '../Images/proyecto_dos/pa4.jpeg';

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
    title: "POTERNA",
    category: "VR",
    previewImage: portadaP1Title,
    titleImage: portadaP1Title,
    images: [],
    videos: [
      "https://player.cloudinary.com/embed/?cloud_name=dphu9uruk&public_id=video_2_xq5pha",
      "https://player.cloudinary.com/embed/?cloud_name=dphu9uruk&public_id=videos_1_zo7rzv",
    ],
    description: "Poterna VR",
    link: "https://www.canva.com/design/DAHCwL6Z6M4/O9chpbhRda07lMTx2h09QA/edit?utm_content=DAHCwL6Z6M4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton ",
  },
  {
    id: 2,
    title: "IZALITH",
    category: "Musica",
    previewImage: portadaP2Title,
    titleImage: portadaP2Title,
    images: [p2_1, p2_2, p2_3, p2_4],
    description: "Sesion fotografica para agencia de modelos.",
    links: [
      { label: "Brochure", url: "https://www.canva.com/design/DAGeE1Tkdfk/aLbgspxhH7gmr5t6qIucew/edit?utm_content=DAGeE1Tkdfk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
      { label: "Canciones", url: "https://drive.google.com/drive/folders/1ALdfWFIwf-tF9EyjJ3lqYfFvlQF9Dyn6?usp=sharing" },
      { label: "Redes", url: "https://www.tiktok.com/@izalith_oficial?is_from_webapp=1&sender_device=pc" },
      { label: "Izalith en Vivo", url: "https://youtu.be/Tf6AF2LyXG4?si=WooRYKk8qTqHdeXb" },
    ],
  },
  {
    id: 3,
    title: "tik tok personal de bajo eléctrico",
    category: "Redes",
    previewImage: portadaP3Title,
    titleImage: portadaP3Title,
    images: [p3_1, p3_2, p3_3, p3_4],
    description: "Maquetacion y diseño de revista de moda.",
  },
  {
    id: 4,
    title: "canal de youtube de ciclomontañismo",
    category: "Redes",
    previewImage: portadaP4Title,
    titleImage: portadaP4Title,
    images: [p4_1, p4_2, p4_3, p4_4],
    description: "",
  },
];
