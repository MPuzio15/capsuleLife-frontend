
// const uri = 'https://localhost:5001/api/ItemsToGetRidOff/';
const uri = 'https://us-central1-itfighters-hero.cloudfunctions.net/api/hero';

async function getDataFromApi() {
    const response = await fetch(uri).then(r => r).catch(e => console.log(e))
    if (!response.ok) {
        console.log('Data not fetched')
    }
    else {
        const body = response.json();
        return body;
    }
}
export const getItems = async () => {
    const dataFromApi = await getDataFromApi();
    const items = [];
    console.log('222222222222222', dataFromApi)
    dataFromApi.forEach((item, index) => {
        let singleItem = {
            id: item.id,
            name: item.superhero,
            publisher: item.publisher,
        };
        items.push(singleItem);
    });
    return items;
};

// export const getItems = async () => {
//     let items = [{ id: 0, name: "Książki", isComplete: false }, { id: 1, name: "Ciuchy", isComplete: false }, { id: 2, name: "Express", isComplete: false }];
//     return items;
// }