let i = 0
let count = 0
let textWhoRU = "who r u? "
let flag = false
const users = ["NSS", "Laurence", "Albercht", "Glowstick", "Myc", "Coffee Cup", "Soda", "neosrc", "FRIEND", "Pixely"]
const responseNSS = "we haven't met yet, u crazy man"
const responseSelf = "haha, very funny, plz give me ur actual name"
const responseGlow = "thx 4 giving me sentience, but let's talk in person... like actual people!"
const responseMyc = "u're one peculiar specimen, we should meet @ some point"
const responseCC_Soda = "*takes a giant sip* delicious :)"
const responseAuthor = "i don't like mushrooms go away"
const responseFRIEND = "...since when did i have a clone?"
const responsePixely = "you look pretty, let's hook up! not here though, i'm only virtual here :("
const responseWhenNoneApplies = "i don't feel like talking 2 strangers rn, sorry"
const responseNone = "uhh... can you give me a name please?"
const responses = [responseNSS, responseSelf, responseGlow, responseGlow, responseMyc, responseCC_Soda, responseCC_Soda, responseAuthor, responseFRIEND, responsePixely]

 function tick() {
   let tick = new Audio('sfx/tick.mp3');
   tick.play()
 }

function typeWriter(target, txt) {
    if (i < txt.length) {
      target.innerHTML += txt.charAt(i);
      tick();
      i++;
      setTimeout(typeWriter, 70, target, txt);
    }
    else {
      i = 0
      target.innerHTML += `
      
      >`
      target.innerHTML += "<input type='text' id='login'>"
    }
  }

  function typeResponse(target, txt) {
    if (i < txt.length) {
      target.innerHTML += txt.charAt(i);
      tick();
      i++;
      setTimeout(typeResponse, 70, target, txt);
    }
    else {
      i = 0
      if (flag == true) {
        flag = false
      }
    }
  }

  document.addEventListener("keyup", function(event) {
    if (event.key == "Enter" && i == 0) {
        compare(document.getElementById("login").value);

    }
  })

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function compare(input) {
    const cache = input
    const target = document.getElementById("login");
    document.getElementById("response").innerHTML = "";
    if (flag == true ) {
      return;
    }
    if (count < 10) {
        let match = cache.localeCompare(users[count], 'en', {sensitivity: 'base'});
        if (match == 0) {
            typeResponse(document.getElementById("response"), responses[count]);
            target.value = "";
            count = 0;
            flag = true;
            return
        }
        else {
            count++;
            compare(cache);
        }
    }
    if ((target.value == "" || target.value == null) && flag != true) {
      typeResponse(document.getElementById("response"), responseNone);
      count = 0;
      flag = true;
      return
    }
    if ((target.value != "" || target.value != null) && count == 10 && flag != true) {
        document.getElementById("login").value = "";
        typeResponse(document.getElementById("response"), responseWhenNoneApplies);
        count = 0
        flag = true
        return
        }
    }

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  function stringList(amount, length) {
    let cache = "";
    let counter = 0;
    while (counter < amount) {
      cache += makeid(length) + "\n";
      counter += 1;
    }
    return cache;
  }

  function bgTextRandom() {
    let bgt = document.getElementById("bgtext");
    bgt.innerHTML = stringList(8, 20)
  }

  window.onLoad = setTimeout(typeWriter, 1000, document.getElementById("main"), textWhoRU)
  window.onload = setInterval(bgTextRandom, 50)

