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
    // ciclo la variabile dei dati
    cards.forEach(card => {
        postCards += `<div class="card">
                        <img class="pin" src="img/pin.svg" alt="red pin">
                        <img src="${card.url}" alt="${card.title}">
                        <p>${card.title}</p>
                        <span>${card.date}</span>
                      </div>`;
    }) 
        // .catch(error => {
        //     console.error(error)
        // })

     outPutCards.innerHTML = postCards;
});

