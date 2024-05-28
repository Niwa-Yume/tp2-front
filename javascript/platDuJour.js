const apiUrl = 'https://mocki.io/v1/3b631cb4-ccd1-4b64-af87-12b0514a05e6';

async function fetchPlatDuJour() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erreur liée à la requête pour l\'API ', error);
    }
}

async function renderPlatDuJour() {
    const platDuJour = await fetchPlatDuJour();
    const platsList = document.getElementById('plats-list');

    platsList.innerHTML = '';

    platDuJour.forEach(plat => {
        const platItem = document.createElement('div');
        platItem.className = 'plat-item animate__animated animate__fadeInUp'; // Ajout de l'animation

        const nameElement = document.createElement('h2');
        nameElement.textContent = plat.name;
        
        const priceElement = document.createElement('p');
        priceElement.textContent = `Prix: ${plat.price} €`;
        
        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = `Ingrédients: ${plat.ingredients.join(', ')}`;

        platItem.appendChild(nameElement);
        platItem.appendChild(priceElement);
        platItem.appendChild(ingredientsElement);

        platsList.appendChild(platItem);
    });
}

document.addEventListener('DOMContentLoaded', renderPlatDuJour);