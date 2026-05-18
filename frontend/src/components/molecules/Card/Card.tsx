import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'

interface CardProps{
  title:string
  description:string
  buttonText?:string
  route?:string
}

export function Card({
 title,
 description,
 buttonText,
 route='/'
}:CardProps){

 return(

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5
}}

className="
rounded-2xl
border
border-gray-200
bg-white
p-8
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"
>

<h3 className="mb-4 text-2xl font-semibold">
{title}
</h3>

<p className="mb-6 text-gray-600">
{description}
</p>

{buttonText &&(

<Link to={route}>
<Button>

{buttonText}

</Button>
</Link>

)}

</motion.div>

)

}