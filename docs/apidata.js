const uri = 'https://sheets.googleapis.com/v4/spreadsheets/11aa0JNhBTdEbj_HnwAVjc2aUwr8FPqgAtSWW89EhGH4/values/';
//const id = 'json';
const sheet = 'All';
const key = 'AIzaSyAveXhMQp5tppUtTFo9ZXyfvsIBMFJcZEk';
const endpoint = `${uri}${sheet}?key=${key}`;


const renderJson = (json) => {
  const studios = json.recor;
  
  
  
  // const editingStudio = studios.find(d => d['name-ja'] === 'エディティングスタジオ');
  // const studioDiv = document.createElement('div');
  // studioDiv.textContent = editingStudio['name-ja'];
  // document.getElementById('studios').appendChild(studioDiv);
  
//   studios.forEach((studio) => {
//    const studioDiv = document.createElement('div');
//    const studioTitle = document.createElement("span");
//    studioTitle.className = 'studio-title';
//    studioTitle.textContent = studio['name-ja'];
//    const studioTitleEn = document.createElement("span");
//    studioTitleEn.className = 'studio-title-en';
//    studioTitleEn.textContent = studio['name-en'];
//    studioDiv.appendChild(studioTitle);
//    studioDiv.appendChild(studioTitleEn);
//    document.getElementById('studios').appendChild(studioDiv);
//   });
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


