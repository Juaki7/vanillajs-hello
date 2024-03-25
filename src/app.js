/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hola");
};
let generateExcuse = () => {
  let pronombre = ["A", "The"];
  let sujeto = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let verbo = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let posicion = ["homework", "toe", "car", "shoe"];
  let donde = ["on the street", "in my house", "in my driveway"];

  let pronIndx = Math.floor(Math.random() * pronombre.length);
  let sujetoIndx = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let posicionIndex = Math.floor(Math.random() * posicion.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronIndx] +
    " " +
    sujeto[sujetoIndx] +
    " " +
    verbo[verboIndex] +
    " " +
    posicion[posicionIndex] +
    " " +
    donde[dondeIndex]
  );
};
