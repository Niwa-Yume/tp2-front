document.addEventListener('DOMContentLoaded', () => {
    const commandeForm = document.getElementById('commande-form');
    const commandeInput = document.getElementById('commande-input');
    const commandeList = document.getElementById('commande-list');
    const commandeCount = document.getElementById('commande-count');
    const clearButton = document.getElementById('clear-commandes');

    let commandes = JSON.parse(localStorage.getItem('commandes')) || []; 

    function updateCommandeCount() {
        commandeCount.textContent = `Nombre de commandes: ${commandes.length}`;
    }

    function saveCommandes() {
        localStorage.setItem('commandes', JSON.stringify(commandes));
    }
    
    
    function renderCommandes() { 
        commandeList.innerHTML = '';

        //forEach permet de parcourir un tableau et d'executer une fonction pour chaque élément du tableau
        commandes.forEach((commande, index) => {
            const li = document.createElement('li');
            li.textContent = commande;// c'est ici que l'on affiche les commandes
            li.classList.add('animate__animated', 'animate__fadeInDown');//ajout d'une animation lors de l'ajout d'une commande
            //supression de la commande
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '×';
            deleteButton.addEventListener('click', () => {
                deleteCommande(index);
            });

            
            const duplicateButton = document.createElement('button');
            duplicateButton.textContent = 'Dupliquer';
            duplicateButton.addEventListener('click', () => {
                duplicateCommande(index);
            });


            li.appendChild(duplicateButton);
            li.appendChild(deleteButton);
            commandeList.insertBefore(li, commandeList.firstChild);//insertBefore permet d'insérer un élément avant un autre élément
        });
    }

    function addCommande(commande) {
        if (commande.trim() !== '') {
            commandes.unshift(commande);
            updateCommandeCount();
            renderCommandes();
            saveCommandes();
            commandeInput.value = '';
        }
    }

    function deleteCommande(index) {
        commandes.splice(index, 1);
        updateCommandeCount();
        renderCommandes();
        saveCommandes();
    }


    function duplicateCommande(index) {
        commandes.unshift(commandes[index]);
        updateCommandeCount();
        renderCommandes();
        saveCommandes();
    }

    function clearCommandes() {
        commandes = [];
        updateCommandeCount();
        renderCommandes();
        saveCommandes();
    }

    commandeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addCommande(commandeInput.value);
    });

    clearButton.addEventListener('click', clearCommandes);

    updateCommandeCount();
    renderCommandes();
});
