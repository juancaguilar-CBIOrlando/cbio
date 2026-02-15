import marulandaImg from "../assets/marulanda.jpeg"
import smitsImg from "../assets/smits.jpeg"
import riverasImg from "../assets/riveras.jpg"
import dianaCastilloImg from "../assets/pastora-diana.jpg"
import paizImg from "../assets/paiz.jpeg"

export const pastors = [
  {
    name1: "Roy",
    name2: "Julieta",
    lastName: "Smit",
    role: "Pastores Principales",
    description: `Somos los pastores Roy y Julieta Smit, apasionados por conectar a las personas con Dios. 
    
    Respondimos al llamado de plantar CBI Orlando tras años de servicio en el ministerio. Con perseverancia y visión, lideramos el proceso que culminó con la fundación de la iglesia en 2011.
    
    Como iglesia, existimos para formar discípulos con una relación íntima con Dios y establecer el Reino fortaleciendo familias sólidas, saludables y alineadas al diseño de Dios, guiando a cada persona a descubrir su propósito y servir con impacto en la iglesia y la comunidad.`,
    // FIXME: Add actual image path when available
    image: smitsImg,
  },

  {
    name1: "Julian",
    name2: "Patricia",
    lastName: "Marulanda",
    role: "Pastores Asociados",
    description: `Somos Julian y Patricia Marulanda, pastores asociados de CBI Orlando.

Estamos comprometidos con servir a nuestra comunidad y ayudar a cada persona a crecer en su relación con Dios.

Creemos en el poder de la comunidad y en el amor que transforma vidas. Nuestro corazón es ver familias restauradas y personas encontrando su propósito en Cristo.

¡Estamos aquí para caminar contigo!`,
    image: marulandaImg,
  },

  {
    name1: "Rolando",
    name2: "Wendy",
    lastName: "Paiz",
    role: "Pastores de Jóvenes",
    description: `Somos Rolando y Wendy, pastores de jóvenes de CBI Orlando.

Nuestra pasión es ver a la próxima generación levantarse con propósito, identidad y una fe firme en Jesús.

Creemos que los jóvenes tienen un llamado único y poderoso, y estamos aquí para guiarlos, inspirarlos y acompañarlos en su caminar con Dios.

¡Ven y sé parte de esta generación que está haciendo historia!`,
    // FIXME: Add actual image path when available
    image: paizImg,
  },
  {
    name1: "Emanuel",
    name2: "Giselle",
    lastName: "Rivera",
    role: "Pastores de Jóvenes",
    description: `Somos Emanuel y Giselle, pastores de jóvenes de CBI Orlando.

Nos apasiona ver jóvenes transformados por el amor de Dios, descubriendo su identidad y propósito.

Creemos que cada joven tiene un potencial increíble y estamos comprometidos a ayudarles a desarrollarlo para la gloria de Dios.

¡Te esperamos para crecer juntos en esta aventura de fe!`,
    // FIXME: Add actual image path when available
    image: riverasImg,
  },
  {
    name1: "Diana",
    lastName:"Castillo",
    role:"Pastora de CBI Kids",
    description: `Soy Diana Castillo, pastora de CBI Kids de CBI Orlando. Me apasiona ver a los niños crecer en su relación con Dios y ayudarles a descubrir su propósito.

Creemos que los niños tienen un llamado único y poderoso, y estamos aquí para guiarlos, inspirarlos y acompañarlos en su caminar con Dios.

¡Ven y sé parte de esta generación que está haciendo historia!`,
    image: dianaCastilloImg,
  }
]
