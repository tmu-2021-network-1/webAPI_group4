// const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
// const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
// const sheet = 'Studio';
// const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint = 'https://script.google.com/macros/s/AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0/exec?id=AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0';

const renderJson = (json) => {

  var  haru = [0,2,5,99];
  const utaHaruDiv = document.createElement('div');
  for(var i = 0;i<haru.length;i++){
  const utaHaruone = document.createElement("p");
  utaHaruone.className = 'utaharuone';
  utaHaruone.textContent = json[haru[i]].one;
  utaHaruDiv.appendChild(utaHaruone);
    console.log(json[haru[i]].one);
    console.log(json[haru[i]].author);
    
  }
  document.getElementById('haruuta').appendChild(utaHaruDiv);
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


