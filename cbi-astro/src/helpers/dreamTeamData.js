import dreamTeam1Img from "../assets/dreamTeam-1.JPG"
import dreamTeam2Img from "../assets/dreamTeam2.jpg"
import dreamTeamHeroImg from "../assets/dreamTeam-hero.jpg"
import dreamTeamWelcomeImg from "../assets/dreamTeam-welcome.jpg"
import dreamTeamFunnyImg from "../assets/dreamTeam-funny.JPG"
import dreamTeamUnidaImg from "../assets/dreamTeam-unidad.jpeg"
import dreamTeamFamilyImg from "../assets/dreamTeam-familia.jpeg"
import dreamTeamGroupImg from "../assets/dreamTeam-group.jpg"

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
    image: dreamTeamFamilyImg,
  },
  {
    id: "team-2",
    title: "Unidos en Misión",
    description:
      "Cada servidor aporta sus dones únicos para cumplir la misión de llevar el amor de Cristo a todos.",
    image: dreamTeamUnidaImg,
  },
  {
    id: "team-3",
    title: "Equipados para Servir",
    description:
      "Te capacitamos y acompañamos para que puedas servir con excelencia y confianza.",
    image: dreamTeamGroupImg,
  },
]

// Ministry areas where people can serve
export const ministryAreas = [
  {
    id: "media",
    name: "Media",
    description: "Crea contenido visual y digital para comunicar el mensaje de Cristo.",
    icon: "video",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "adoracion",
    name: "Adoración",
    description: "Lidera la adoración a través de la música y el canto.",
    icon: "music",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "dance",
    name: "Danza",
    description: "Expresa adoración a Dios a través de la danza.",
    icon: "sparkles",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "operaciones",
    name: "Operaciones",
    description: "Manténiene funcionando todos los procesos operativos en excelencia.",
    icon: "settings",
    color: "from-gray-500 to-gray-600",
  },
  {
    id: "kids",
    name: "CBI KIDS",
    description: "Impacta la próxima generación enseñando a los niños el amor de Dios.",
    icon: "baby",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "guest-services",
    name: "Guest Services",
    description: "Da la bienvenida y hace que cada persona se sienta en casa.",
    icon: "heart-handshake",
    color: "from-primary to-green-600",
  },
  {
    id: "conexiones",
    name: "Conexiones",
    description: "Ayuda a las personas a conectarse y encontrar su lugar en la iglesia.",
    icon: "link",
    color: "from-accent to-indigo-700",
  },
]
