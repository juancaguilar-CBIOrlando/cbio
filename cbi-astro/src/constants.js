const address = "7507 Kingspointe Pkwy STE 104, Orlando, FL 32819"
const phone = "(407) 226-7024"
const email = "contacto@cbiorlando.org"

const missionsRegistrationLink = "https://cbichurch.churchcenter.com/registrations/events/3326186"
const connectGroupsLink = "https://cbichurch.churchcenter.com/people/forms/1070757"
const famicafeRegistrationLink = "https://cbichurch.churchcenter.com/people/forms/1123610"

const serviceTimes = [
  // FIXME: add the image for each service
  {
    name: "Servicio Del Domingo",
    times: ["9:30 AM", "11:30 AM"],
    day: "Domingo",
    location: address,
    image: "/images/services/sunday.jpg"
  },
  {
    name: "Servicio de Jovenes",
    times: ["7:30 PM"],
    day: "Viernes",
    location: address,
    image: "/images/services/youth.jpg"
  },
  {
    name: "Noches de Oración",
    times: ["7:30 PM"],
    day: "Martes",
    location: address,
    image: "/images/services/prayer.jpg"
  },
  {
    name: "Noches de Oración | Virtual",
    times: ["7:30 PM"],
    day: "Martes",
    location: "Facebook Live",
    image: "/images/services/prayer.jpg",
    link: "https://www.facebook.com/cbiorlando"
  },
  {
    name: "Grupos de Conexión",
    times: ["7:30 PM"],
    day: "Viernes",
    location: "Multiple Locations",
    image: "/images/services/groups.jpg",
    link: "/servicios#grupos"
  }
]

export { address, phone, email, serviceTimes, missionsRegistrationLink, connectGroupsLink, famicafeRegistrationLink };