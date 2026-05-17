import { TabsSection } from '../components/organisms/TabsSection/TabsSection'
import { NewsSection } from '../components/organisms/NewsSection/NewsSection'

import { ContentGrid } from '../components/templates/ContentGrid/ContentGrid'
import { PageLayout } from '../components/templates/PageLayout/PageLayout'
import { PageTransition } from '../components/templates/PageTransition/PageTransition'
import { SectionRenderer } from '../components/templates/SectionRenderer/SectionRenderer'

import { Card } from '../components/molecules/Card/Card'

import { Divider } from '../components/atoms/Divider/Divider'
import { Icon } from '../components/atoms/Icon/Icon'

import { homeSections } from '../data/homeSections'
import { homePageData } from '../data/homePageData'
import { announcements } from '../data/announcements'

import { s } from './UnderConstruction.styles.js'

function UnderConstruction(){

const demoTabs=[

{
label:'Admissions',
content:<p>Admissions info here.</p>
},

{
label:'Erasmus',
content:<p>Erasmus details here.</p>
},

{
label:'Contact',
content:<p>Contact information here.</p>
}

]

return(

<PageTransition>

<PageLayout>

<SectionRenderer
sections={homePageData}
/>

<section className="mx-auto max-w-[1280px] px-6 py-20">

<h2 className="mb-10 text-4xl font-bold">

Explore Opportunities

</h2>

<ContentGrid columns={3}>

{homeSections.map((card)=>(

<Card
key={card.id}

title={card.title}

description={card.description}

buttonText={card.buttonText}

route={card.route}

/>

))}

</ContentGrid>

</section>

<NewsSection
items={announcements}
/>

<section className="bg-gray-50 py-20">

<div className="mx-auto max-w-[1280px] px-6">

<h2 className="mb-10 text-4xl font-bold">

Student Resources

</h2>

<TabsSection tabs={demoTabs}/>

</div>

</section>

<section className="mx-auto max-w-[1280px] space-y-8 px-6 py-16">

<Divider/>

<div className="flex gap-6 text-4xl">

<Icon name="globe"/>

<Icon name="graduate"/>

<Icon name="mail"/>

</div>

</section>

<div className={s.container}>

<div className={s.card}>

<div className={s.icon}>
🚧
</div>

<h1 className={s.title}>
Site în lucru
</h1>

<p className={s.text}>
Site-ul este în construcție.
Vă rugăm reveniți curând.
</p>

<p className={s.subtitle}>
The site is under construction.
Please check back soon.
</p>

</div>

</div>

</PageLayout>

</PageTransition>

)

}

export default UnderConstruction