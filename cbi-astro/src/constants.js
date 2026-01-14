const address = "7507 Kingspointe Pkwy STE 104, Orlando, FL 32819"
const phone = "(407) 226-7024"
const email = "contacto@cbiorlando.org"

const serviceTimes = [
  // FIXME: add the image for each service
  {
    name: "Servicio Del Domingo",
    times: ["9:30 AM", "11:30 AM"],
    day: "Domingo",
    image: "/images/services/sunday.jpg"
  },
  {
    name: "Noches de Oración",
    times: ["7:30 PM"],
    day: "Martes-Iglesia",
    image: "/images/services/prayer.jpg"
  },
  {
    name: "Noches de Oración-Virtual",
    times: ["7:30 PM"],
    day: "Martes-Facebook Live",
    image: "/images/services/prayer.jpg"
  },
  {
    name: "Servicio de Jovenes",
    times: ["7:30 PM"],
    day: "Viernes",
    image: "/images/services/youth.jpg"
  }
]

export { address, phone, email, serviceTimes };