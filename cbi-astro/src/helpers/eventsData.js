/**
 * Events Data for CBI Orlando
 * 
 * To add a new event:
 * 1. Add a new object to the events array
 * 2. Provide unique id, title, category, description, date, and image
 * 3. Set featured: true for events to highlight
 * 4. Set hasDetailPage: true for events that need their own page (baptisms, missions, CBI encounters)
 * 5. Set registrationLink for events that should redirect to external registration
 * 
 * To remove an event:
 * Simply remove or comment out the event object from the array
 */
import encuentros from "../assets/encuentros.jpeg"
import mujeresImg from "../assets/mujeres.jpg"
import parejasImg from "../assets/parejas.jpeg"
import bautizosImg from "../assets/bautizos3.jpeg"
import misionesImg from "../assets/misiones-events.jpeg"
import { missionsRegistrationLink } from "../constants.js"

export const events = [
  {
    id: 1,
    title: "Noche de Parejas",
    category: "Matrimonios",
    tagline: "Fortaleciendo tu relación",
    description: "Una noche especial diseñada para matrimonios y parejas. Comparte tiempo de calidad mientras aprendes principios que fortalecerán tu relación.",
    date: "Febrero 14, 2026",
    image: parejasImg,
    featured: true,
    hasDetailPage: false,
    registrationLink: null, // TODO: Add registration link when available
  },
  {
    id: 2,
    title: "Brunch de Mujeres",
    category: "Mujeres",
    tagline: "Conectando corazones",
    description: "Un espacio especial para mujeres donde podrás conectar, ser inspirada y fortalecida. Comparte con otras mujeres en un ambiente de amor y comunidad.",
    date: "Marzo 7, 2026",
    image: mujeresImg,
    featured: true,
    hasDetailPage: false,
    registrationLink: null, // TODO: Add registration link when available
  },
  {
    id: 3,
    title: "Viaje Misionero Guatemala",
    category: "Misiones",
    tagline: "Llevando esperanza a las naciones",
    description: "Únete a nuestro equipo misionero para llevar el amor de Cristo a Guatemala. Una oportunidad de servir, impactar vidas y experimentar el corazón de Dios por las naciones.",
    longDescription: `
      <p>Prepárate para una experiencia que cambiará tu vida. Nuestro viaje misionero a Guatemala es una oportunidad única de servir, amar y llevar esperanza a comunidades que lo necesitan.</p>
      <h3>¿Qué haremos?</h3>
      <ul>
        <li>Construcción y proyectos comunitarios</li>
        <li>Ministerio a niños y familias</li>
        <li>Evangelismo y discipulado</li>
        <li>Distribución de alimentos y provisiones</li>
      </ul>
      <h3>Incluye</h3>
      <ul>
        <li>Vuelo ida y vuelta</li>
        <li>Hospedaje y alimentación</li>
        <li>Transporte local</li>
        <li>Materiales para proyectos</li>
      </ul>
    `,
    date: "Marzo 23 al 30, 2026",
    image: misionesImg,
    featured: true,
    hasDetailPage: true,
    registrationLink: missionsRegistrationLink,
  },
  {
    id: 5,
    title: "Bautizos",
    category: "Crecimiento Espiritual",
    tagline: "Un paso de obediencia, un acto de fe",
    description: "Al sumergirte en las aguas, renuevas tu compromiso de seguir a Jesús y ser transformado por su amor. En el bautismo, somos lavados y renovados por el poder del Espíritu Santo.",
    longDescription: `
      <p>El bautismo es un paso de obediencia que simboliza tu muerte al pecado y tu resurrección a una nueva vida en Cristo. Es una declaración pública de tu fe y tu decisión de seguir a Jesús.</p>
      <h3>¿Por qué bautizarse?</h3>
      <ul>
        <li><strong>Es un mandamiento de Jesús:</strong> "Vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre, del Hijo y del Espíritu Santo." - Mateo 28:19</li>
        <li><strong>Es un símbolo de tu nueva vida:</strong> Representa tu muerte al pecado y tu resurrección a una nueva vida en Cristo.</li>
        <li><strong>Es una declaración pública:</strong> Compartes con tu familia, amigos y la iglesia tu decisión de seguir a Jesús.</li>
      </ul>
      <h3>¿Qué necesito para bautizarme?</h3>
      <ul>
        <li>Haber aceptado a Jesús como tu Señor y Salvador</li>
        <li>Completar la clase de bautismo</li>
        <li>Traer ropa cómoda para el día del bautizo</li>
      </ul>
    `,
    date: "Abril 12, 2026",
    image: bautizosImg,
    featured: true,
    hasDetailPage: true,
    registrationLink: null, // TODO: Add registration link when available
  },
  {
    id: 4,
    title: "Encuentros CBI",
    category: "Crecimiento Espiritual",
    tagline: "Un tiempo para conocer a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, ser libres para amar y ser felices.",
    longDescription: `
      <p>Los Encuentros CBI son experiencias diseñadas para llevarte a un encuentro personal y transformador con Dios. Durante este retiro, tendrás la oportunidad de experimentar sanidad interior, liberación y renovación espiritual.</p>
      <h3>¿Qué puedes esperar?</h3>
      <ul>
        <li><strong>Sanidad interior:</strong> Tiempo de ministración personal donde Dios trae sanidad a áreas heridas de tu corazón.</li>
        <li><strong>Liberación:</strong> Rompimiento de ataduras y cadenas que te han mantenido cautivo.</li>
        <li><strong>Renovación:</strong> Un nuevo comienzo en tu relación con Dios.</li>
        <li><strong>Comunidad:</strong> Conexión profunda con otros creyentes en un ambiente de amor y aceptación.</li>
      </ul>
      <h3>Detalles del evento</h3>
      <ul>
        <li>Duración: Fin de semana completo (viernes a domingo)</li>
        <li>Incluye: Hospedaje, alimentación y materiales</li>
        <li>Cupo limitado</li>
      </ul>
    `,
    date: null, // TODO: Update with actual date
    image: encuentros,
    featured: false,
    hasDetailPage: true,
    registrationLink: null, // TODO: Add registration link when available
  },
  {
    id: 6,
    title: "Encuentros de Hombres",
    category: "Hombres",
    tagline: "Un tiempo para conocer a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, ser libres para amar y ser felices.",
    date: null, // TODO: Update with actual date
    image: encuentros,
    featured: false,
    hasDetailPage: false,
    registrationLink: null, // TODO: Add registration link when available
  },
  {
    id: 7,
    title: "Vigilia",
    category: "Crecimiento Espiritual",
    tagline: "Un tiempo para acercarnos a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, crecer en comunidad y ser felices.",
    date: null, // TODO: Update with actual date
    image: encuentros,
    featured: false,
    hasDetailPage: false,
    registrationLink: null, // TODO: Add registration link when available
  },
];

// Helper to get featured events
export const getFeaturedEvents = () => events.filter(event => event.featured);

// Helper to get events by category
export const getEventsByCategory = (category) => events.filter(event => event.category === category);

// Helper to get upcoming events without a confirmed date
export const getUpcomingUnscheduledEvents = () => events.filter(event => event.date === null);

// Helper to get event by id
export const getEventById = (id) => events.find(event => event.id === Number(id));

// Helper to get events with detail pages (for static generation)
export const getEventsWithDetailPage = () => events.filter(event => event.hasDetailPage);

// Helper to determine the link for an event card
export const getEventLink = (event) => {
  if (event.hasDetailPage) {
    return `/eventos/${event.id}`;
  }
  if (event.registrationLink) {
    return event.registrationLink;
  }
  return `/eventos/${event.id}`; // Fallback to detail page
};

// Helper to check if event link is external
export const isExternalLink = (event) => {
  return !event.hasDetailPage && event.registrationLink;
};

// Available categories for filtering
export const eventCategories = [
  "Crecimiento Espiritual", 
  "Formación",
  "Matrimonios",
  "Misiones",
  "Mujeres",
  "Hombres",
  "Adoración",  
];
