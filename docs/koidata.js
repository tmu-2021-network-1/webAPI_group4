// const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
// const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
// const sheet = 'Studio';
// const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const endpoint = 'https://script.google.com/macros/s/AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0/exec?id=AKfycbxldXF6kuQUSbhI6M0pD5M9aDyr7lIJkw2VE__eupgvZ00zwIu_40-_hy_PlCSAVvK0';

const renderJson = (json) => {

  var  aki = [2,12,13,17,18,19,20,24,25,26,29,37,38,39,40,41,42,43,44,45,47,48,49,50,51,52,53,54,55,57,58,62,64,71,73,76,79,81,84,85,87,88,89,91,96];
  const utaDiv = document.createElement('div');
  utaDiv.className = 'karuta';
  for(var i = 0;i<aki.length;i++){
    const karutaDiv = document.createElement('div');
    karutaDiv.className = 'karuta_matomari';
    const karutaDiv_each = document.createElement('div');
    karutaDiv_each.className = `karuta${i}`;
    // if((i-2)%3 == 0){
    // karutaDiv.classList.add('karuta_one');//１枚だけ並ぶカルタ専用のclassの追加
    // }
    // else{
    //   karutaDiv.classList.add('karuta_two');　//２枚並ぶカルタ専用のclassの追加
    // }
    const Image = document.createElement('img');
    Image.className = 'mon';
    Image.src ="image/mon/koi.png";
    Image.alt = '紋の画像';
    const utaauthor = document.createElement("p");
    const utaone = document.createElement("p"); 
    const utatwo = document.createElement("p");
    const utathree = document.createElement("p");
    const utafour = document.createElement("p");
    const utafive = document.createElement("p");
    utaauthor.className = 'author';
    utaone.className = 'line'; 
    utatwo.className = 'line';
    utathree.className = 'line';
    utafour.className = 'line';
    utafive.className = 'line';
    utaauthor.textContent = json[aki[i]].author;
    utaone.textContent = json[aki[i]].one;
    utatwo.textContent = json[aki[i]].two;
    utathree.textContent = json[aki[i]].three;
    utafour.textContent = json[aki[i]].four;
    utafive.textContent = json[aki[i]].five;
    karutaDiv.appendChild(Image);
    karutaDiv.appendChild(utaauthor);
    karutaDiv.appendChild(utaone);
    karutaDiv.appendChild(utatwo);
    karutaDiv.appendChild(utathree);
    karutaDiv.appendChild(utafour);
    karutaDiv.appendChild(utafive);
    karutaDiv_each.appendChild(karutaDiv);
    utaDiv.appendChild(karutaDiv_each);

    //棒グラフ
    const kekkaDiv = document.createElement("div");
    kekkaDiv.className = "kekka" + i;
    const kaisekiueDiv = document.createElement("div");
    kaisekiueDiv.className = "kaisekiue";
    const kaisekisitaDiv = document.createElement("div");
    kaisekisitaDiv.className = "kaisekisita";

    kekkaDiv.style.width = "15vw";//"kekka"+i Divのサイズ
    kekkaDiv.style.height = "11vw";

    const likedislike = document.createElement("div");
    likedislike.textContent = "好き/嫌い";
    likedislike.className = "likedislike";
    const joysad = document.createElement("div");
    joysad.textContent = "喜び/悲しみ";
    joysad.className = "joysad";
    const angerfear = document.createElement("div");
    angerfear.textContent = "怒り/恐れ";
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
    if (json[aki[i]].likedislike > 0) {//likedislikeが正の時bar1(like)の高さを変化
      bar1.style.height = json[aki[i]].likedislike * 3 + 0.5 + "vw";
    } else {//それ以外の時はbar1(like)の高さは５px
      bar1.style.height = 0.5 + "vw";
    }
    if (json[aki[i]].joysad > 0) {
      bar2.style.height = json[aki[i]].joysad * 3 + 0.5 + "vw";
    } else {
      bar2.style.height = 0.5 + "vw";
    }
    if (json[aki[i]].angerfear > 0) {
      bar3.style.height = json[aki[i]].angerfear * 3 + 0.5 + "vw";
    } else {
      bar3.style.height = 0.5 + "vw";
    }

    if (json[aki[i]].likedislike < 0) {//likedislikeが負の時bar4(dislike)の高さを変化
      bar4.style.height = json[aki[i]].likedislike * (-3) + 0.5 + "vw";
    } else {//それ以外の時はbar1(dislike)の高さは５px
      bar4.style.height = 0.5 + "vw";
    }
    if (json[aki[i]].joysad < 0) {
      bar5.style.height = json[aki[i]].joysad * (-3) + 0.5 + "vw";
    } else {
      bar5.style.height = 0.5 + "vw";
    }
    if (json[aki[i]].angerfear < 0) {
      bar6.style.height = json[aki[i]].angerfear * (-3) + 0.5 + "vw";
    } else {
      bar6.style.height = 0.5 + "vw";
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

    karutaDiv_each.appendChild(kekkaDiv);
  }
  
  document.getElementById('uta').appendChild(utaDiv);
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


