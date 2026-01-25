import parejasImg from "../assets/parejas.jpeg"
import misiones1Img from "../assets/misiones-love.jpeg"
import misionesHeroImg from "../assets/misiones-hero.jpeg"
import misionesEventsImg from "../assets/misiones-events.jpeg"
import misionesGroupImg from "../assets/misiones-group.jpeg"
import { missionsRegistrationLink } from "../constants.js"


/**
 * Temporary placeholder content to match the reference "Misiones" screen.
 * Swap these titles/images once we have real missions + ministry content.
 */

export const missionsSlides = [
  { id: "misiones-1", title: "Misiones La Guajira", image: misiones1Img },
  { id: "misiones-2", title: "Misiones 2", image: misiones1Img },
  { id: "misiones-3", title: "Misiones 3", image: parejasImg },
]



export const misionesHeroBg = misionesHeroImg

export const impactSlides = [
  {
    id: "impacto-oracion",
    title: "Apoya en Oración",
    description:
      "Únete a interceder por las familias, voluntarios y comunidades que estamos sirviendo.",
    image: misionesGroupImg,
    actions: [
      {
        text: "Orar",
        href: "mailto:info@cbiorlando.org?subject=Oración%20por%20Misiones",
        target: "_blank",
      },
    ],
  },
  {
    id: "impacto-donar",
    title: "Apoya con tu Donación",
    description:
      "Tu aporte hace posible que llevemos el amor de Cristo a cada lugar. ¡Gracias por tu generosidad!",
    image: misionesHeroImg,
    actions: [
      {
        text: "Donar",
        href: "/donation",
      },
    ],
  },
  {
    id: "impacto-servir",
    title: "Apoya Sirviendo",
    description:
      "Hay un lugar para ti. Súmate con tus manos y tu corazón en nuestros proyectos misioneros.",
    image: misionesEventsImg,
    actions: [
      {
        text: "Registrarme",
        href: missionsRegistrationLink,
        target: "_blank",
      },
      {
        text: "Ver Más",
        href: "/conectate",
      },
    ],
  },
]

