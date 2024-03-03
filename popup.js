document.addEventListener('DOMContentLoaded', function () {
    fetch('https://raw.githubusercontent.com/slavic-api/API/main/deities_list.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('deities-list');
            data.gods.forEach(god => {
                const item = document.createElement('div');
                item.className = 'deity-item';
				const imageUrl = `https://raw.githubusercontent.com/slavic-api/API/main/${god.thumbnailUrl}`;

                item.innerHTML = `
 <img src="${imageUrl}" alt="${god.name}">
        <div>
            <h3>${god.name}</h3>
            <p>${god.description}</p>
        </div>
                `;
                container.appendChild(item);
            });
        })
        .catch(error => {
            console.error('Error loading the deities:', error);
            document.getElementById('deities-list').innerHTML = '<p>Error loading data. Please try again later.</p>';
        });
});
