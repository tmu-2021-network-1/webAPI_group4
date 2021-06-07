// const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
// const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
// const sheet = 'Studio';
// const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint =
  "https://script.google.com/macros/s/AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0/exec?id=AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0";

const renderJson = (json) => {
  var haru = [8, 14, 32, 34, 72];
  const utaHaruDiv = document.createElement("div");
  
  utaHaruDiv.className = "karuta";
  for (var i = 0; i < haru.length; i++) {
    const utaHaruone = document.createElement("p");
    const utaHarutwo = document.createElement("p");
    const utaHaruthree = document.createElement("p");
    const utaHarufour = document.createElement("p");
    const utaHarufive = document.createElement("p");

    utaHaruone.textContent = json[haru[i]].one;
    utaHarutwo.textContent = json[haru[i]].two;
    utaHaruthree.textContent = json[haru[i]].three;
    utaHarufour.textContent = json[haru[i]].four;
    utaHarufive.textContent = json[haru[i]].five;
    utaHaruDiv.appendChild(utaHaruone);
    utaHaruDiv.appendChild(utaHarutwo);
    utaHaruDiv.appendChild(utaHaruthree);
    utaHaruDiv.appendChild(utaHarufour);
    utaHaruDiv.appendChild(utaHarufive);


//棒グラフ作成　グラフの高さにデータを使うのでこの位置に挿入する必要あり
    const kekkaDiv = document.createElement("div");
    kekkaDiv.className = "kekka" + i;
    const kaisekiueDiv = document.createElement("div");
    kaisekiueDiv.className = "kaisekiue";
    const kaisekisitaDiv = document.createElement("div");
    kaisekisitaDiv.className = "kaisekisita";

    kekkaDiv.style.width = "175px";//"kekka"+i Divのサイズ
    kekkaDiv.style.height = "180px";

    const likedislike = document.createElement("div");
    likedislike.textContent = "likedislike";
    likedislike.className = "likedislike";
    const joysad = document.createElement("div");
    joysad.textContent = "joysad";
    joysad.className = "joysad";
    const angerfear = document.createElement("div");
    angerfear.textContent = "angerfear";
    angerfear.className = "angerfear";

    const bar1 = document.createElement("div");
    const bar2 = document.createElement("div");
    const bar3 = document.createElement("div");
    const bar4 = document.createElement("div");
    const bar5 = document.createElement("div");
    const bar6 = document.createElement("div");
    bar1.className = "bar1";//like
    bar2.className = "bar2";//joy
    bar3.className = "bar3";//anger
    bar4.className = "bar4";//dislike
    bar5.className = "bar5";//sad
    bar6.className = "bar6";//fear

    //データを元に高さが変わる棒グラフ
    if (json[haru[i]].likedislike > 0) {//likedislikeが正の時bar1(like)の高さを変化
      bar1.style.height = json[haru[i]].likedislike * 20 + 5 + "px";
    } else {//それ以外の時はbar1(like)の高さは５px
      bar1.style.height = 5 + "px";
    }
    if (json[haru[i]].joysad > 0) {
      bar2.style.height = json[haru[i]].joysad * 20 + 5 + "px";
    } else {
      bar2.style.height = 5 + "px";
    }
    if (json[haru[i]].angerfear > 0) {
      bar3.style.height = json[haru[i]].angerfear * 20 + 5 + "px";
    } else {
      bar3.style.height = 5 + "px";
    }

    if (json[haru[i]].joysad < 0) {//likedislikeが負の時bar4(dislike)の高さを変化
      bar4.style.height = json[haru[i]].likedislike * 20 + 5 + "px";
    } else {//それ以外の時はbar1(dislike)の高さは５px
      bar4.style.height = 5 + "px";
    }
    if (json[haru[i]].joysad < 0) {
      bar5.style.height = json[haru[i]].joysad * 20 + 5 + "px";
    } else {
      bar5.style.height = 5 + "px";
    }
    if (json[haru[i]].angerfear < 0) {
      bar6.style.height = json[haru[i]].angerfear * 20 + 5 + "px";
    } else {
      bar6.style.height = 5 + "px";
    }

    kaisekiueDiv.appendChild(likedislike);
    kaisekiueDiv.appendChild(joysad);
    kaisekiueDiv.appendChild(angerfear);

    kaisekiueDiv.appendChild(bar1);
    kaisekiueDiv.appendChild(bar2);
    kaisekiueDiv.appendChild(bar3);
    kaisekisitaDiv.appendChild(bar4);
    kaisekisitaDiv.appendChild(bar5);
    kaisekisitaDiv.appendChild(bar6);

    kekkaDiv.appendChild(kaisekiueDiv);
    kekkaDiv.appendChild(kaisekisitaDiv);

    document.getElementById("chart").appendChild(kekkaDiv);
//棒グラフ作成終わり
  }
  document.getElementById("haruuta").appendChild(utaHaruDiv);
};

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      renderJson(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

getData();
