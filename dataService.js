class DataService {
    constructor() {
        this.data = [
            {
                name: "Victor Norman",
                gender: "M",
                address: "1501 Reedsdale St",
                age: 59,
                phoneNumber: "(616) 526-7805",
                picture: "https://calvin.edu/sites/default/files/styles/card_person/public/images/people/https/calvin.edu/dA/68880a17-6531-4f02-9584-68f5c8513428/binaryimage/03_Norman.jpg?h=8bae06a0&itok=bvAugCKX",
            },
            {
                name: "Stacy Madre",
                gender: "F",
                address: "690 Hot Potato Road",
                age: 43,
                phoneNumber: "(420) 579-1837",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoYZxuwAF87BrU8g0W0Wj8YWeE7IbqouCQQ&s",
            },
            {
                name: "Bob Marley",
                gender: "M",
                address: "52 DeadEnd Street",
                age: 79,
                phoneNumber: "(287) 332-9938",
                picture: "https://cdn.britannica.com/22/19222-050-2267F357/Bob-Marley.jpg",
            },
            {
                name: "Pop King",
                gender: "M",
                address: "53 DeadEnd Street",
                age: 66,
                phoneNumber: "(839) 923-3782",
                picture: "https://images6.fanpop.com/image/answers/3698000/3698348_1443046286819.42res_391_472.jpg",
            },
            {
                name: "Moo Deng",
                gender: "F",
                address: "332 Hippo Avenue",
                age: "4 Months",
                phoneNumber: "(828) 282-8282",
                picture: "https://api.time.com/wp-content/uploads/2024/09/moo-deng.jpeg",
            },
            
        ];
    }

    getData = (numRecords) => {
        return numRecords === undefined ? this.data : this.data.slice(0, numRecords);
    }
}

// testing the DataService class
//const dataService = new DataService();
//console.log(dataService.getData()); 
//console.log(dataService.getData(2));  
//console.log(dataService.getData(1));    
//console.log(dataService.getData(5));     
