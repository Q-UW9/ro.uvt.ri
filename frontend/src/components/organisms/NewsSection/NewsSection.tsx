import { ContentGrid } from '../../templates/ContentGrid/ContentGrid'
import { Card } from '../../molecules/Card/Card'

interface Item{
id:number
title:string
description:string
route:string
}

interface Props{
items:Item[]
}

export function NewsSection({
items
}:Props){

return(

<section className="bg-gray-50 py-20">

<div className="mx-auto max-w-[1280px] px-6">

<h2 className="mb-10 text-4xl font-bold">

Latest Updates

</h2>

<ContentGrid columns={3}>

{items.map((item)=>(

<Card

key={item.id}

title={item.title}

description={item.description}

buttonText="Read More"

route={item.route}

/>

))}

</ContentGrid>

</div>

</section>

)

}