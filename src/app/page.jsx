"use client"
import Link from 'next/link'
export default function Home() {
  function openMenu(){
    const mainContainer = document.querySelector(".mainContainer")
    const menuBarBtnContainer = document.querySelector(".menuBarBtnContainer")




    menuBarBtnContainer.classList.remove("dissappearMenu")
    menuBarBtnContainer.classList.remove("displayNone")
    mainContainer.classList.remove("appear")
    menuBarBtnContainer.classList.add("appearMenu")
    mainContainer.classList.add("dissappear")
    setTimeout(() => {
      mainContainer.classList.add("displayNone")
    }, 1000);
  }
  return (
    <main className='mainContainer'>
  <button className='menuBarBtn appear' onClick={() => openMenu()}>Start</button>
    </main>
  )
}
