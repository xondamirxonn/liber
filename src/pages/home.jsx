import React from "react";
import { Container, Button } from "@mui/material";
import Nav from "../layout/header/components/nav/nav";
import Hero from "../layout/header/components/hero/hero";
import Information from "../components/information/information";
import Rukns from "../components/rukns/rukns";
import News from "../components/newadds/news";
import Audio from "../components/audiokitob/audio";



export const Home = () => {
  
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Orqaga qayt ishini tugatib qo'y";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  })
  return (
    <div >
      <Container maxWidth="lg">
        <Nav />
        <Hero />
        <Information />
        <Rukns />
        <News />
        <Audio />
      </Container>
    </div>
  );
};
