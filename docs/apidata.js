const uri = 'https://ap.mextractr.net/ma9/emotion_analyzer';
const id = 'json';
const sheet = '45577E7B729603AA4E3E356BEB553040E977B4E7&text=%E6%98%8E%E6%97%A5%E3%82%81%E3%81%A1%E3%82%83%E3%81%8F%E3%81%A1%E3%82%83%E6%A5%BD%E3%81%97%E3%81%BF';
const endpoint = `${uri}?out=${id}&apikey=${sheet}`;


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


