import { HeroSection } from '../../organisms/HeroSection/HeroSection'
import { ContentGrid } from '../ContentGrid/ContentGrid'

interface Section {
  type:string
  data:any
}

interface Props{
 sections:Section[]
}

export function SectionRenderer({
sections
}:Props){

return(

<>

{sections.map((section,index)=>{

switch(section.type){

case 'hero':

return(

<HeroSection
key={index}
{...section.data}
/>

)

case 'grid':

return(

<ContentGrid
key={index}
columns={3}
>

{section.data}

</ContentGrid>

)

default:

return null

}

})}

</>

)

}