/**
 * Events Data for CBI Orlando
 * 
 * To add a new event:
 * 1. Add a new object to the events array
 * 2. Provide unique id, title, category, description, date, and image
 * 3. Set featured: true for events to highlight
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
  },
  {
    id: 3,
    title: "Viaje Misionero Guatemala",
    category: "Misiones",
    tagline: "Llevando esperanza a las naciones",
    description: "Únete a nuestro equipo misionero para llevar el amor de Cristo a Guatemala. Una oportunidad de servir, impactar vidas y experimentar el corazón de Dios por las naciones.",
    date: "Marzo 23 al 30, 2026",
    image: misionesImg,
    featured: true,
    registrationLink: missionsRegistrationLink,
  },
  {
    id: 5,
    title: "Bautizos",
    category: "Crecimiento Espiritual",
    tagline: "Un paso de obediencia, un acto de fe",
    description: "Al sumergirte en las aguas, renuevas tu compromiso de seguir a Jesús y ser transformado por su amor. En el bautismo, somos lavados y renovados por el poder del Espíritu Santo.",
    date: "Abril 12, 2026",
    image: bautizosImg,
    featured: true,
  },
  {
    id: 4,
    title: "Encuentros CBI",
    category: "Crecimiento Espiritual",
    tagline: "Un tiempo para conocer a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, ser libres para amar y ser felices.",
    date: null, // TODO: Update with actual date
    image: encuentros,
    featured: false,
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
  },
  {
    id: 7,
    title: "Vijilia",
    category: "Crecimiento Espiritual",
    tagline: "Un tiempo para acercarnos",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, crecer en comunidad y ser felices.",
    date: null, // TODO: Update with actual date
    image: encuentros,
    featured: false,
  },
];

// Helper to get featured events
export const getFeaturedEvents = () => events.filter(event => event.featured);

// Helper to get events by category
export const getEventsByCategory = (category) => events.filter(event => event.category === category);

// Helper to get upcoming events without a confirmed date
export const getUpcomingUnscheduledEvents = () => events.filter(event => event.date === null);

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
