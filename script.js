document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/slavic-api/API/main/deities_list.json')
        .then(response => response.json())
        .then(data => {
            const listElement = document.getElementById('deitiesList');
            listElement.innerHTML = ''; // Clear the loading text
            data.forEach(deity => {
                const item = document.createElement('div');
                item.textContent = deity.name; // Adjust based on the structure of your JSON
                listElement.appendChild(item);
            });
        })
        .catch(error => {
            console.error('Error fetching the deities list:', error);
            document.getElementById('deitiesList').textContent = 'Failed to load data.';
        });
});
