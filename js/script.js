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
        
     outPutCards.innerHTML = postCards;
})

.catch(error => {
     console.error(error)
});

