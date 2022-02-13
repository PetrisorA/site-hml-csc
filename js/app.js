const darkMode = document.querySelector('#mode-toggle');
const body = document.body;

darkMode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    console.log(body);
});

// Verificam culoarea profilului
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('dark-mode')
    body.classList.toggle('dark-mode');
}
9
function generateCard(proiect) {
    // Generam un li
    const li = document.createElement("li");

    // Generam un div
    const div = document.createElement("div");
    div.classList.add("card");

    // Generam img
    const cardImg = document.createElement("img");
    cardImg.src = proiect.imagine;
    cardImg.alt = proiect.nume;
    // Adaugam img in div
    div.append(cardImg);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    // Generam titlul
    const title = document.createElement("h3");
    title.textContent = proiect.nume;
    cardContent.append(title);

    // Generam descrierea
    const descriere = document.createElement("p")
    descriere.textContent = proiect.descriere;
    cardContent.append(descriere);

    // Generam butonul
    const cardBtn = document.createElement("button");
    cardBtn.textContent = "Mai multe";
    cardBtn.onclick = function() {
        // Schimbam adresa din browser catre proiect
        location.href = proiect.link;
    }

    cardContent.append(cardBtn);

    // Adaugam div-ul cu informatii
    div.append(cardContent);
    // Adaugam card-ul in li
    li.append(div);
    // Adaugam li in container
    const cardsContainer = document.querySelectorAll(".cards-list")[0];
    cardsContainer.append(li);
}