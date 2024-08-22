document.getElementById('pool-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('pool-name').value;
    const url = document.getElementById('pool-url').value;
    const type = document.getElementById('pool-type').value;

    // Création de l'élément de liste
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${name}</strong><br>
        Type: ${type}<br>
        <a href="${url}" target="_blank">Visiter le Pool</a>
    `;

    // Ajout de l'élément à la liste
    const poolList = document.getElementById('pool-list');
    poolList.appendChild(listItem);

    // Mise à jour du nombre total de pools
    updatePoolCount();

    // Réinitialiser le formulaire
    document.getElementById('pool-form').reset();
});

function updatePoolCount() {
    const poolList = document.getElementById('pool-list');
    const poolCount = poolList.children.length;
    document.getElementById('pool-count').innerText = `Nombre de Pools: ${poolCount}`;
}