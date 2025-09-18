// variabile di output
const outPutCards = document.querySelector(".row");
// variabile per l'API
const apiCards = "https://lanciweb.github.io/demo/api/pictures/";

// chiamata Ajax
axios.get(apiCards).then((response) => {
    // variabile di accumulo
    let postCards = "";
    // variabile per salvare i dati 
    const cards = response.data;
    // console log per vedere se funziona
    console.log(cards)
    // ciclo la variabile dei dati salvati
    cards.forEach(card => {

        postCards += `<div class="card">
                        <img class="pin" src="img/pin.svg" alt="red pin">
                        <img src="${card.url}" alt="${card.title}">                       
                        <span>${card.date}</span>
                        <p>${card.title}</p>
                      </div>`;
        
    }) 
     // mando a schermo le card
     outPutCards.innerHTML = postCards;

     overlayEvent();
})

.catch(error => {
     console.error(error)
});

function overlayEvent(){
     // variabili di outPut
     const overlay = document.querySelector(".overlay-container");
     const everyCard = document.querySelectorAll(".card");
     const closeBtn = document.querySelector(".close-btn");

     // aggiungo evento click su ogni card
     everyCard.forEach(cardItem => {
     cardItem.addEventListener("click", () => {
          // prendo l'immagine principale della card 
          const img = cardItem.querySelector("img:not(.pin)");
          
          // creo immagine con appendChild
          const overlayImg = document.createElement("img");
          // ???
          overlayImg.src = img.src;
          overlayImg.alt = img.alt;
          overlay.appendChild(overlayImg);

          // Mostro l'overlay
          overlay.style.display = "block";

          // Attacco listener al bottone chiudi
          closeBtn.addEventListener("click", ()=>{
               overlay.style.display = "none";
               overlayImg.remove();
          });
     });
     });
}
