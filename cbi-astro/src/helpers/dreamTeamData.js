import dreamTeam1Img from "../assets/dreamTeam-1.JPG"
import dreamTeam2Img from "../assets/dreamTeam2.jpg"
import dreamTeamHeroImg from "../assets/dreamTeam-hero.jpg"
import dreamTeamWelcomeImg from "../assets/dreamTeam-welcome.jpg"

/**
 * Dream Team page content data
 */

export const dreamTeamHeroBg = dreamTeamHeroImg

// Section 1: Why Serve - Left text, Right slider
export const whyServeSlides = [
  {
    id: "serve-1",
    title: "Sirve con Propósito",
    description:
      "Servir no es solo una tarea, es un llamado divino. Cuando sirves, descubres el propósito que Dios tiene para tu vida.",
    image: dreamTeam1Img,
  },
  {
    id: "serve-2",
    title: "Impacta Vidas",
    description:
      "Cada sonrisa que brindas, cada mano que extiendes, transforma vidas y glorifica a Dios.",
    image: dreamTeam2Img,
  },
  {
    id: "serve-3",
    title: "Crece Espiritualmente",
    description:
      "Al servir a otros, tu fe crece. Es en el servicio donde experimentamos más de Dios.",
    image: dreamTeamWelcomeImg,
  },
]

// Section 2: Our Team - Left slider, Right text (reversed)
export const ourTeamSlides = [
  {
    id: "team-1",
    title: "Familia de Servidores",
    description:
      "Somos más que voluntarios, somos una familia unida por el amor de Cristo y el deseo de servir.",
    image: dreamTeamWelcomeImg,
  },
  {
    id: "team-2",
    title: "Unidos en Misión",
    description:
      "Cada servidor aporta sus dones únicos para cumplir la misión de llevar el amor de Cristo a todos.",
    image: dreamTeam1Img,
  },
  {
    id: "team-3",
    title: "Equipados para Servir",
    description:
      "Te capacitamos y acompañamos para que puedas servir con excelencia y confianza.",
    image: dreamTeam2Img,
  },
]

// Section 3: What We Value - Full width slider with impact cards
export const valuesSlides = [
  {
    id: "value-1",
    title: "Excelencia",
    description:
      "Todo lo que hacemos, lo hacemos como para el Señor. Buscamos la excelencia en cada detalle porque servimos a un Dios excelente.",
    image: dreamTeam1Img,
    icon: "star",
  },
  {
    id: "value-2",
    title: "Comunidad",
    description:
      "No servimos solos. Creamos lazos de amistad y apoyo mutuo que van más allá del domingo.",
    image: dreamTeamWelcomeImg,
    icon: "users",
  },
  {
    id: "value-3",
    title: "Crecimiento",
    description:
      "Cada servidor tiene oportunidades de crecer, liderar y desarrollar sus dones para el Reino.",
    image: dreamTeam2Img,
    icon: "trending-up",
  },
  {
    id: "value-4",
    title: "Alegría",
    description:
      "Servimos con gozo porque sabemos que estamos haciendo la obra del Señor. La alegría es contagiosa.",
    image: dreamTeam1Img,
    icon: "heart",
  },
]

// Ministry areas where people can serve
export const ministryAreas = [
  {
    id: "worship",
    name: "Adoración",
    description: "Lidera la adoración a través de la música, sonido, visuales y producción.",
    icon: "music",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "hospitality",
    name: "Hospitalidad",
    description: "Da la bienvenida y haz que cada persona se sienta en casa.",
    icon: "heart-handshake",
    color: "from-primary to-green-600",
  },
  {
    id: "kids",
    name: "CBI Kids",
    description: "Impacta la próxima generación enseñando a los niños el amor de Dios.",
    icon: "baby",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "production",
    name: "Producción",
    description: "Sonido, luces, cámaras y tecnología para llevar el mensaje a todos.",
    icon: "video",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "prayer",
    name: "Oración",
    description: "Intercede por las necesidades de la iglesia y la comunidad.",
    icon: "hands-praying",
    color: "from-accent to-indigo-700",
  },
  {
    id: "connections",
    name: "Conexiones",
    description: "Ayuda a las personas a conectarse y encontrar su lugar en la iglesia.",
    icon: "link",
    color: "from-pink-500 to-rose-600",
  },
]
