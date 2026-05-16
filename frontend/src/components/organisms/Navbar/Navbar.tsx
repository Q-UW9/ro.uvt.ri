import { useState } from 'react'
import clsx from 'clsx'

import {
  Link,
  NavLink
} from 'react-router-dom'

import {
  FaBars,
  FaTimes
} from 'react-icons/fa'

import { LanguageSwitcher } from '../../atoms/LanguageSwitcher/LanguageSwitcher'

const navLinks = [
  {
    label:'Home',
    to:'/'
  },

  {
    label:'Admissions',
    to:'/admissions'
  },

  {
    label:'Erasmus',
    to:'/erasmus'
  },

  {
    label:'Research',
    to:'/research'
  },

  {
    label:'Contact',
    to:'/contact'
  }
]

export function Navbar(){

const [isOpen,setIsOpen]=useState(false)

return(

<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">

<div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">

<Link
to="/"
className="text-xl font-bold text-uvt-blue"
>
UVT RI
</Link>

<nav className="hidden items-center gap-8 md:flex">

{navLinks.map((link)=>(

<NavLink

key={link.label}

to={link.to}

className={({isActive})=>

clsx(
'text-sm font-medium transition-colors',

isActive
?'text-uvt-blue'
:'text-gray-700 hover:text-uvt-blue'
)

}

>

{link.label}

</NavLink>

))}

<LanguageSwitcher/>

</nav>

<button

type="button"

onClick={()=>setIsOpen(!isOpen)}

className="text-2xl md:hidden"

>

{isOpen ? <FaTimes/>:<FaBars/>}

</button>

</div>

<div

className={clsx(

'overflow-hidden transition-all duration-300 md:hidden',

isOpen
?'max-h-96 border-t border-gray-200'
:'max-h-0'

)}

>

<div className="flex flex-col gap-4 px-6 py-5">

{navLinks.map((link)=>(

<NavLink

key={link.label}

to={link.to}

onClick={()=>setIsOpen(false)}

className="text-sm font-medium"

>

{link.label}

</NavLink>

))}

<LanguageSwitcher/>

</div>

</div>

</header>

)

}