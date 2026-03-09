// Proyecto 1
import portadaP1Title from '../Images/Proyecto_uno/portada_p1_sin_fondo.png';

// Proyecto 2
import portadaP2Title from '../Images/proyecto_dos/portada_sin_fondo p2.png';
import p2_1 from '../Images/proyecto_dos/pa1.png';
import p2_2 from '../Images/proyecto_dos/pa2.jpeg';
import p2_3 from '../Images/proyecto_dos/pa3.jpeg';
import p2_4 from '../Images/proyecto_dos/pa4.jpeg';

// Proyecto 3
import portadaP3Title from '../Images/proyecto_tres/portada_p3_sin fondo.jpeg';

// Proyecto 4
import portadaP4Title from '../Images/proyecto_cuatro/portada_p4 sinfondo.jpeg';

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
    summary: "Desarrollo de experiencia de terror en realidad virtual creada en Unity utilizando XR Interaction Toolkit. El proyecto consistió en una narrativa inmersiva donde el usuario debía escapar de una mazmorra resolviendo un acertijo para abrir la puerta final.\n\nSe diseñaron e implementaron assets originales para construir una ambientación tenebrosa, integrando trampas, obstáculos interactivos y un sistema de iluminación dinámica con antorchas para reforzar la atmósfera. Participé en la dirección creativa, programación de interacciones, diseño de niveles y diseño sonoro de la experiencia.",
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
    summary: "Izalith es un proyecto musical independiente que nació dentro del power metal neoclásico y que me ha permitido asumir múltiples roles: compositor, productor, director creativo, gestor y administrador de redes sociales. Junto a Juan Manuel Suárez Garzón desarrollé un álbum conceptual ambientado en el universo ficticio de \"Eldrador\", que narra la historia del guerrero de la espada negra y su travesía en busca de magia para revivir a su amada.\n\nEl álbum fue producido de manera independiente en DAWs como Reaper y BandLab, fortaleciendo mis habilidades en producción, mezcla y uso de instrumentos virtuales. Actualmente, el proyecto evoluciona hacia un sonido más cercano al rock progresivo y experimental, ampliando su identidad artística.",
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
    images: [],
    description: "Maquetacion y diseño de revista de moda.",
    summary: "Proyecto personal enfocado en la creación de contenido para Reels y TikTok, combinando interpretación en bajo eléctrico y edición audiovisual. Publico regularmente covers de musica variada en bajo electrico, tutoriales y reseñas, integrando producción musical y narrativa visual en formatos cortos.\n\nAunque es un canal reciente, ha mostrado crecimiento constante y buen desempeño en visualizaciones, permitiéndome fortalecer habilidades en edición de video, optimización de contenido para redes y construcción de audiencia digital.",
    socialProfile: { platform: "tiktok", url: "https://www.tiktok.com/@geezer_booty?is_from_webapp=1&sender_device=pc" },
  },
  {
    id: 4,
    title: "canal de youtube de ciclomontañismo",
    category: "Redes",
    previewImage: portadaP4Title,
    titleImage: portadaP4Title,
    images: [],
    description: "",
    summary: "En 2019 inicié el proyecto que despertó mi pasión por la producción audiovisual. Comencé grabando el deporte que practicaba y compartiendo los videos en plataformas como Instagram y YouTube. A lo largo de este proceso desarrollé habilidades en producción y edición audiovisual, experimentando con distintos formatos: desde piezas breves pensadas para redes sociales —como reels y contenido vertical— hasta videos más elaborados con un enfoque cinematográfico.\n\nEste proyecto se convirtió en un espacio constante de aprendizaje y exploración creativa durante aproximadamente cuatro años, hasta el inicio de mi etapa universitaria.",
    socialProfile: { platform: "youtube", url: "https://www.youtube.com/@mateo_gaviria1665" },
  },
];
