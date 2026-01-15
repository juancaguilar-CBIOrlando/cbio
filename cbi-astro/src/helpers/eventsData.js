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

export const events = [
  {
    id: 1,
    title: "Bautizos",
    category: "Crecimiento Espiritual",
    tagline: "Un paso de obediencia, un acto de fe",
    description: "Al sumergirte en las aguas, renuevas tu compromiso de seguir a Jesús y ser transformado por su amor. En el bautismo, somos lavados y renovados por el poder del Espíritu Santo.",
    date: "Próximamente", // TODO: Update with actual date
    // image: "/images/events/bautizos.jpg", // Final image path
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424ca?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Encuentros CBI",
    category: "Crecimiento Espiritual",
    tagline: "Un tiempo para conocer a Dios",
    description: "Es una experiencia de sanidad interior, rompimiento de cadenas emocionales y espirituales que nos permitirán perdonar, ser libres para amar y ser felices.",
    date: "Próximamente", // TODO: Update with actual date
    // image: "/images/events/encuentros.jpg", // Final image path
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Entrenamiento de Líderes",
    category: "Formación",
    tagline: "Equipados para servir",
    description: "Desarrolla tu potencial de liderazgo con herramientas prácticas y principios bíblicos. Un espacio para crecer, aprender y prepararte para impactar tu generación.",
    date: "Próximamente", // TODO: Update with actual date
    // image: "/images/events/entrenamiento.jpg", // Final image path
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Noche de Parejas",
    category: "Matrimonios",
    tagline: "Fortaleciendo tu relación",
    description: "Una noche especial diseñada para matrimonios y parejas. Comparte tiempo de calidad mientras aprendes principios que fortalecerán tu relación.",
    date: "Próximamente", // TODO: Update with actual date
    // image: "/images/events/parejas.jpg", // Final image path
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2069&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 5,
    title: "Viaje Misionero Guatemala",
    category: "Misiones",
    tagline: "Llevando esperanza a las naciones",
    description: "Únete a nuestro equipo misionero para llevar el amor de Cristo a Guatemala. Una oportunidad de servir, impactar vidas y experimentar el corazón de Dios por las naciones.",
    date: "Próximamente", // TODO: Update with actual date
    // image: "/images/events/guatemala.jpg", // Final image path
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 6,
    title: "Brunch de Mujeres",
    category: "Mujeres",
    tagline: "Conectando corazones",
    description: "Un espacio especial para mujeres donde podrás conectar, ser inspirada y fortalecida. Comparte con otras mujeres en un ambiente de amor y comunidad.",
    date: "Próximamente", // TODO: Update with actual date
    // image: "/images/events/brunch.jpg", // Final image path
    image: "https://images.unsplash.com/photo-1529543544277-750e360b2eb1?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

// Helper to get featured events
export const getFeaturedEvents = () => events.filter(event => event.featured);

// Helper to get events by category
export const getEventsByCategory = (category) => events.filter(event => event.category === category);

// Available categories for filtering
export const eventCategories = [
  "Sacramento",
  "Crecimiento Espiritual", 
  "Formación",
  "Matrimonios",
  "Misiones",
  "Mujeres",
];
