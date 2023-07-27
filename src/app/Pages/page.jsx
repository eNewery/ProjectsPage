import React from "react";

const Pages = () => {
  return (
    <div class="projectsContainer appear">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>
      <div class="projectsCard">
        <h2 class="projectsCardTitle">Maybelline</h2>
        <p class="projectsCardDescription">
        Maybelline es un E-Commerce totalmente responsive creado a partir de la API Make-Up y, haciendo honor a la api, Maybelline. Un E-Commerce creado con Nextjs, utilizando librerias como Emailjs para las órdenes de compra. Una API sin dudas muy completa, y una aplicación aún más.
        </p>
        <div className="projectsCardImage bgMaybelline"></div>
        <div class="projectsCardIcons">
          <a href="enlace-del-repositorio" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="enlace-del-sitio" target="_blank">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div class="projectsCard">
        <h2 class="projectsCardTitle">Weath3r</h2>
        <p class="projectsCardDescription">
        Weath3r es una aplicación web totalmente responsive que cumple con la función de informarte del clima actual en la ciudad que desees. Está hecho en nextjs consumiendo la api WeatherAPI.
<p>
  Recomendación: Usar en pantalla completa (F11)
  </p>
        </p>
        <div className="projectsCardImage bgWeather"></div>
        <div class="projectsCardIcons">
          <a href="enlace-del-repositorio" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="enlace-del-sitio" target="_blank">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div class="projectsCard">
        <h2 class="projectsCardTitle">Pizzeria Don Hornero</h2>
        <p class="projectsCardDescription">
        Pizzeria Don Hornero es un proyecto que parte por la idea de trabajar en equipo con otras personas para recoger algo de lo más cercano a una experiencia laboral. Fue realizado con un equipo que contaba con backend devs, qa testers y frontend devs. Fue realizado en Nextjs y tiene la intención de ser un menú de comida rápida que envía las órdenes de compra al gmail deseado gracias a Emailjs.
        </p>
        <div className="projectsCardImage bgPizza"></div>
        <div class="projectsCardIcons">
          <a href="enlace-del-repositorio" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="enlace-del-sitio" target="_blank">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pages;
