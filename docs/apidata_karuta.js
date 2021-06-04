const endpoint = 'https://script.google.com/macros/s/AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0/exec?id=AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0';

const renderJson = (json) => {
  const dataAll = json;
  

   dataAll.forEach((uta) => {
    
    if(uta)
    //カルタのまとまりのdiv
    const utaDiv = document.createElement('div');

    //57577全て入れる
    const utaone = document.createElement("div");
    utaone.className = 'utaone';
    utaone.textContent = uta['one'];
    const utatwo = document.createElement("div");
    utatwo.className = 'utatwo';
    utatwo.textContent = uta['two'];
    const utathree = document.createElement("div");
    utathree.className = 'utathree';
    utathree.textContent = uta['three'];
    const utafour = document.createElement("div");
    utafour.className = 'utafour';
    utafour.textContent = uta['four'];
    const utafive= document.createElement("div");
    utafive.className = 'utafive';
    utafive.textContent = uta['five'];

//    const  Image = document.createElement('img');
//    Image.className = 'hyaku-image';
//    Image.src = uta['images'];
//    Image.alt = 'かるた画像です。';

    //分析結果のまとまりのdiv
    const analysisDiv = document.createElement('div');   
    //分析結果全て入れる
    const likedislike = document.createElement("div");
    likedislike.className = 'likedislike';
    likedislike.textContent = uta['likedislike'];
    const joysad = document.createElement("div");
    joysad.className = 'joysad';
    joysad.textContent = uta['joysad'];
    const angerfear = document.createElement("div");
    angerfear.className = 'angerfear';
    angerfear.textContent = uta['angerfear'];

    //カルタの枠に57577入れてく
    utaDiv.appendChild(utaone);
    utaDiv.appendChild(utatwo);
    utaDiv.appendChild(utathree);
    utaDiv.appendChild(utafour);
    utaDiv.appendChild(utafive);
    //utaDiv.appendChild(Image);
    
    //分析結果の枠に結果入れてく
    analysisDiv.appendChild(likedislike);
    analysisDiv.appendChild(joysad);
    analysisDiv.appendChild(angerfear);
	
    //karutaというidをもつdivにカルタ枠と分析結果枠両方入れる
    document.getElementById('karuta').appendChild(utaDiv);
    document.getElementById('karuta').appendChild(analysisDiv);
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


