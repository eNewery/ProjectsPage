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
    setTimeout(() => {
      router.push(`/${location}`)
    }, 1000);
  }
  else{
    router.push(`/${location}`)
  }
  }    


  function closeMenu() {
    const menuBarBtnContainer = document.querySelector(".menuBarBtnContainer");
const mainContainer = document.querySelector(".mainContainer");
    if (mainContainer) {
      mainContainer.classList.add("appear");
      mainContainer.classList.remove("displayNone");
      mainContainer.classList.remove("dissappear");
    }
    if (menuBarBtnContainer) {
      menuBarBtnContainer.classList.remove("appearMenu");
      menuBarBtnContainer.classList.add("dissappearMenu");
      routing("/")
      setTimeout(() => {
        menuBarBtnContainer.classList.add("displayNone")
  }, 1000);
    }

  }
  return (
    <div className="menuBarBtnContainer">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <button onClick={() => closeMenu()} className='arrowBackBtn'>
      <span class="material-symbols-outlined arrowBack">
chevron_left
</span>
      </button>
  <button onClick={() => routing("Components")} className='menuBarBtn'>Components</button>
  <button onClick={() => routing("Pages")} className='menuBarBtn'>Pages</button>


</div>
  )
}

export default MenuBar