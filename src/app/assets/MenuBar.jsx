"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const MenuBar = () => {
  const router = useRouter()
  function routing(location) {
  const container = document.querySelector(".container")
  const projectsContainer = document.querySelector(".projectsContainer")
  if (projectsContainer) {
    projectsContainer.classList.remove("appear")
    projectsContainer.classList.add("dissappear")    
  }
  setTimeout(() => {
    router.push(`/${location}`)
  }, 1000);
  }
  return (
    <div className="menuBarBtnContainer">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <Link href="/">
      <span class="material-symbols-outlined arrowBack">
chevron_left
</span>
      </Link>
  <button onClick={() => routing("Components")} className='menuBarBtn'>Components</button>
  <button onClick={() => routing("Pages")} className='menuBarBtn'>Pages</button>


</div>
  )
}

export default MenuBar