// const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
// const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
// const sheet = 'Studio';
// const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint = 'https://api.search.nicovideo.jp/api/v2/snapshot/video/contents/search?q=%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF&targets=title&fields=contentId,title,viewCounter&filters[viewCounter][gte]=10000&_sort=-viewCounter&_offset=0&_limit=3&_context=apiguide';

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


