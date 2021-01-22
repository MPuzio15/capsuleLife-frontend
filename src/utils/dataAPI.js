// const uri = 'https://localhost:5001/api/ItemsToGetRidOff/';
const uri = 'https://us-central1-itfighters-hero.cloudfunctions.net/api/hero';

async function getDataFromApi() {
  try {
    const response = await fetch(uri);
    const list = await response.json();
    return list;
  } catch (err) {
    console.log(err);
  }
}
export const getItems = async () => {
  const dataFromApi = await getDataFromApi();
  const items = [];
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
export const deleteItem = async (id) => {
  const url = `${uri}/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: null,
  });
};
