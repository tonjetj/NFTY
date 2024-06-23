import * as t from './theme.ts';
// import * as c from './components.ts';

export const GlobalStyles = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap');

 body {
    background-color: ${t.colors.dark}; 
    color: ${t.colors.white};
 }

 h1, h2, h3, h4, h5, h6 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700; 
 }

 p, .card__btn {
    font-family: 'Overpass', sans-serif;
    font-weight: 200; 
 }
 
 .card__container {
      display: flex; 
      justify-content: center; 
      padding: 10px; 
      flex-wrap: wrap;
      max-width: 1130px;
      border-radius: 10px; 
      margin: 0 auto; 
      gap: 15px; 
      overflow: hidden; 
      background-color: ${t.colors.grey};
 }

  .card__nft {
      display: flex;
      flex-direction: column; 
      justify-content: flex-end; 
      height: 400px;
      width: 250px;
      border-radius: 10px; 
      padding: 10px; 
      background-repeat: no-repeat; 
      background-size: cover; 
      background-position: center; 
      box-shadow: inset 0px -120px 50px 0px rgba(0, 0, 0, 0.7);

 }

  .card__nft:hover {
      transform: scale(1.025); 
      cursor: pointer; 
 }

   .card__copy {
      display: flex; 
      flex-direction: column; 
      text-transform: capitalize; 
   }
   
   .btn__group {
      display: flex; 
      gap: 10px; 
   }

   .card__btn {
      border-radius: 8px; 
      border: none; 
      font-size: 15px; 
      height: 50px; 
      padding: 10px; 
      color: ${t.colors.white};
   }

   .card__btn.primary{
      background-color: ${t.colors.primary};
      width: 80%; 
   }

   .card__btn.primary:hover {
      background-color: ${t.colors.secondary}; 
      transition: ease 0.4s; 
      cursor: pointer; 
   }

   .card__btn.secondary{
      border-radius: 8px; 
      border: none; 
      background-color: ${t.colors.fadedWhite};
      padding: 10px; 
      color: ${t.colors.white};
      height: 50px; 
      width: 20%; 
      font-size: 15px; 
   }

`;