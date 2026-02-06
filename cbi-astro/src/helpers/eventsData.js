/**
 * Events Data for CBI Orlando
 * 
 * To add a new event:
 * 1. Add a new object to the events array
 * 2. Provide unique id, title, category, description, date, and image
 * 3. Set featured: true for events to highlight
 * 4. Set hasDetailPage: true and pageUrl for events that have dedicated pages (/bautizos, /encuentros, /viaje-misionero)
 * 5. Set registrationLink for events that should redirect to external registration
 * 6. Set endDate (YYYY-MM-DD format) for auto-filtering - use the last day for date ranges
 * 
 * To remove an event:
 * Simply remove or comment out the event object from the array
 * 
 * Note: Events with dedicated pages (Bautizos, Encuentros CBI, Misiones) have their content
 * defined directly in their respective page files under /src/pages/
 */
import encuentros from "../assets/encuentros.jpeg"
import mujeresImg from "../assets/mujeres.jpg"
import parejasImg from "../assets/parejas.jpeg"
import bautizosImg from "../assets/bautizos3.jpeg"
import misionesImg from "../assets/misiones-events.jpeg"
import { missionsRegistrationLink } from "../constants.js"

export const eventCategories = [
  "Crecimiento Espiritual", 
  "Formación",
  "Matrimonios",
  "Misiones",
  "Mujeres",
  "Hombres",
  "Adoración",  
];

export const events = [
  {
    id: 1,
    title: "Impacto a la Comunidad",
    category: eventCategories[3],
    tagline: "Ayudando a nuestras comunidades",
    description: "Un dia especial para ayudar a nuestras comunidades locales que necesitan sentir amor y esperanza de Dios.",
    date: "Marzo 28, 2026",
    endDate: "2026-03-28",
    image: misionesImg,
    featured: true,
    hasDetailPage: false,
    registrationLink: missionsRegistrationLink,
  },
  {
    id: 2,
    title: "Brunch de Mujeres",
    category: eventCategories[4],
    tagline: "Conectando corazones",
    description: "Un espacio especial para mujeres donde podrás conectar, ser inspirada y fortalecida. Comparte con otras mujeres en un ambiente de amor y comunidad.",
    date: "Marzo 7, 2026",
    endDate: "2026-03-07",
    image: mujeresImg,
    featured: true,
    hasDetailPage: false,
    registrationLink: null,
  },
  {
    id: 3,
    title: "Viaje Misionero Guatemala",
    category: eventCategories[3],
    tagline: "Llevando esperanza a las naciones",
    description: "Únete a nuestro equipo misionero para llevar el amor de Cristo a Guatemala. Una oportunidad de servir, impactar vidas y experimentar el corazón de Dios por las naciones.",
    date: "Marzo 23 al 30, 2026",
    endDate: "2026-03-30", // Last day of the trip
    image: misionesImg,
    featured: true,
    hasDetailPage: true,
    pageUrl: "/viaje-misionero",
    registrationLink: missionsRegistrationLink,
  },
  {
    id: 5,
    title: "Bautizos",
    category: eventCategories[0],
    tagline: "Un paso de obediencia, un acto de fe",
    description: "Al sumergirte en las aguas, renuevas tu compromiso de seguir a Jesús y ser transformado por su amor. En el bautismo, somos lavados y renovados por el poder del Espíritu Santo.",
    date: "Abril 12, 2026",
    endDate: "2026-04-12",
    image: bautizosImg,
    featured: true,
    hasDetailPage: true,
    pageUrl: "/bautizos",
    registrationLink: null,
  },
  {
    id: 4,
    title: "Encuentros CBI",
    category: eventCategories[0],
    tagline: "Un tiempo para conocer a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, ser libres para amar y ser felices.",
    date: null,
    endDate: null,
    image: encuentros,
    featured: false,
    hasDetailPage: true,
    pageUrl: "/encuentros",
    registrationLink: null,
  },
  {
    id: 6,
    title: "Encuentros de Hombres",
    category: eventCategories[5],
    tagline: "Un tiempo para conocer a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, ser libres para amar y ser felices.",
    date: null,
    endDate: null,
    image: encuentros,
    featured: false,
    hasDetailPage: false,
    registrationLink: null,
  },
  {
    id: 7,
    title: "Vigilia",
    category: eventCategories[0],
    tagline: "Un tiempo para acercarnos a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, crecer en comunidad y ser felices.",
    date: null,
    endDate: null,
    image: encuentros,
    featured: false,
    hasDetailPage: false,
    registrationLink: null,
  },
];

// Helper to get featured events
export const getFeaturedEvents = () => events.filter(event => event.featured);

// Helper to get events by category
export const getEventsByCategory = (category) => events.filter(event => event.category === category);

// Helper to get upcoming events without a confirmed date (for "Lo Que Viene" section)
export const getUpcomingUnscheduledEvents = () => events.filter(event => event.endDate === null);

/**
 * Get scheduled events that haven't passed yet
 * Uses endDate field for comparison - events show until endDate has passed
 * Returns events sorted by date (soonest first)
 */
export const getUpcomingScheduledEvents = () => {
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  
  return events
    .filter(event => event.endDate !== null && event.endDate >= today)
    .sort((a, b) => a.endDate.localeCompare(b.endDate));
};

// Helper to get event by id
export const getEventById = (id) => events.find(event => event.id === Number(id));

// Helper to determine the link for an event card
export const getEventLink = (event) => {
  if (event.hasDetailPage && event.pageUrl) {
    return event.pageUrl;
  }
  if (event.registrationLink) {
    return event.registrationLink;
  }
  return null; // No link for events without detail page or registration
};

// Helper to check if event link is external
export const isExternalLink = (event) => {
  return !event.hasDetailPage && event.registrationLink;
};

// Available categories for filtering

