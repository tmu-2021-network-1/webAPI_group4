// const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
// const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
// const sheet = 'Studio';
// const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint = 'https://script.google.com/macros/s/AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0/exec?id=AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0';

const renderJson = (json) => {
  const dataAll = json;
  

   dataAll.forEach((uta) => {
    const utaDiv = document.createElement('div');
    const utaone = document.createElement("span");
    utaone.className = 'utaone';
    utaone.textContent = uta['one'];
    const utatwo = document.createElement("span");
    utatwo.className = 'utatwo';
    utatwo.textContent = uta['two'];

   const  Image = document.createElement('img');
   Image.className = 'hyaku-image';
   Image.src = uta['images'];
   Image.alt = 'かるた画像です。';

    utaDiv.appendChild(utaone);
    utaDiv.appendChild(utatwo);
    utaDiv.appendChild(Image);
    document.getElementById('utahyouzi').appendChild(utaDiv);
   });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();


