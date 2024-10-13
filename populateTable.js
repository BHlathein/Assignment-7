const addDataRows = () => {
    // make new data service and fetch data
    const dataService = new DataService();
    const data = dataService.getData();
    // console.log(data);

    // get the parent element, also rewrite to remove previous results (stops duplicates from being created if fetch data is pressed again)
    const rowsElement = document.getElementById('rows');
    rowsElement.innerHTML = '';
    data.forEach(record => createRow(rowsElement, record));
}

const createRow = (parentElem, rowData) => {
    const row = document.createElement('tr');

    // create cells for each category
    const nameCell = document.createElement('td');
    nameCell.textContent = rowData.name;
    row.appendChild(nameCell);

    const genderCell = document.createElement('td');
    genderCell.textContent = rowData.gender;
    row.appendChild(genderCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = rowData.address;
    row.appendChild(addressCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = rowData.age;
    row.appendChild(ageCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = rowData.phoneNumber;
    row.appendChild(phoneCell);

    const pictureCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = rowData.picture;
    pictureCell.appendChild(img);
    row.appendChild(pictureCell);
    img.style.width = '50px';
    img.style.height = '60px';

    parentElem.appendChild(row);
}
