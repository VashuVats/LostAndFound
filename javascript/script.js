function toggleImageOption() {
    const itemType = document.getElementById('itemType').value;
    const imageInputDiv = document.getElementById('imageInputDiv');

    if (itemType === 'Found') {
        imageInputDiv.style.display = 'none';
    } else {
        imageInputDiv.style.display = 'block';
    }
}


document.getElementById('filterDropdown').addEventListener('change', function () {
    const filterValue = this.value;
    const items = document.querySelectorAll('#itemList tr');

    items.forEach(item => {
        item.style.display = 'table-row'; 

        if (filterValue === 'lost' && item.classList.contains('found-item')) {
            item.style.display = 'none';
        }

        if (filterValue === 'found' && item.classList.contains('lost-item')) {
            item.style.display = 'none';
        }
    });
});
