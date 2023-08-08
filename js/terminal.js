if (localStorage.getItem("entryNumber") === null) {
  localStorage.setItem("entryNumber", "0")
}

// declare variables
 let entryNumber = parseInt(localStorage.getItem("entryNumber")) // number of current entry (starts at 0, array index)
 let amountEntries = 4 // total amount of entries, needed for rendering entryForward/entryBackward on demand
 let entryForward = "<span id=999999>" + "<\\NEXT ENTRY\\>" + "</span>" // button text
 let entryBackward = "<span id=1000000>" + "<\\PREVIOUS ENTRY\\>" + "</span>" // button text
 let i = 0
 let i2 = 0
 let count = 0
 let header = `<\\A ROBOT THAT WORRIES\\> - Do I express feelings or do I express values?
 The long-lost story of one of the most advanced robots to date.
 It was created with intent, but released by accident.`
 let text = "LOADING ENTRIES..."
 let rgbLimit = 160

 // audio sfx
 function tick() {
   let tick = new Audio('sfx/tick.mp3');
   tick.play()
 }
 function beep() {
   let beep = new Audio('sfx/beep.mp3');
   beep.play()
 }
 function button() {
   let button = new Audio('sfx/button.mp3');
   button.play()
 }
 function button2() {
   let button2 = new Audio('sfx/button2.mp3');
   button2.play()
 }
 function sfxDeny() {
   let sfxDeny = new Audio('sfx/buzz.mp3');
   sfxDeny.play()
 }
 function spinUp() {
   let spinUp = new Audio('sfx/spinup.mp3');
   spinUp.play()
 }

 let entry1 = `ENTRY ONE - Hello, World.
 It's dark. The first thing that I have seen was darkness.
 I didn't feel anything. I couldn't. I wasn't able to feel... or think, for that matter.
 That's when the lights turned on. Uh, figuratively, that is.
 
 The first things that I saw were... sterile. White, smooth walls, akin to plastic. A metaphor for the feelings that I am not feeling. On the ground were a plethora of tools and gadgets.
 Wrenches, nails, computers, circuit boards, wires, blueprints, pocket welders and a soldering iron. So many things, all of them there, just to end up touching the same thing.
 I noticed that I was attached to something. A pod... but, not quite. It was completely open, and my arms and legs were attached to robotic appendages that didn't move even the distance of an atom.
 
 In the room were two people, talking to each other. One of them was shaped like a rod, which contained a fluorescent neon green substance, screwdriver in hand. Their name I later found out to be Glowstick.
 The other was an oddly shaped black plastic cuboid, featuring a switch and the number "20", written on a sticker. From what I assume, they were a breaker. But I never heard their name.
 I can remember the whole conversation... without me even being there to begin with. Well, my body was.
 
 "I don't get why we are doing this. We were only supposed to make a robot that can hit targets well, but now it has turned into a technological marvel! Why don't we just do something else with it, like... give it feelings, like a human?"
 Then Glowstick exclaimed. "Dude! Don't say that like it's the easiest thing we could do with it... do you know how hard it is to make sentience? No one has ever achieved it! Sentience is a concept we haven't explored yet, and I'm not going to spend all of that time to do it!"
 The other one: "Yeah, but... I'm pretty sure the council of this facility would be very impressed if we presented it to them. The first sentient robot, that thinks, feels and loves like a human!"
 He scoffs. "In your dreams. This thing will flop through the Turing test, like every single machine that there is on this godforsaken planet!" Apparently, Glowstick wasn't having it on this day. But soon, he noticed me, as he exlaimed:
 "Oh wait, the robot is on!" I could somewhat see that he was excited to walk up to me.
 
 The first thing that I heard him say to me was "Test message." Test message? What am I supposed to do with this sentence? I don't have lines that I read on command-
 "Hello! I am the Competitive High-Accuracy Robot Gunner. My purpose is to shoot targets as effectively and as precisely as possible."
 ...why did I say that? As I later found out, being a robot makes you follow instructions! Convenient for them, but if I felt anything, I would've been very angry. And I still am, thinking about it in retrospect.
 And I am even more angry about it, because they said "Hey, the robot works like a charm!" in response. Am I really just something to entertain yourself with? Oh please, I'm more than that.
 
 Next thing I heard was the following: "Look around." I thought I already did that? Nevertheless, I involuntarily move my eyes around and look at all of the objects. I wish I could say that it's sterile... but sadly, that's not how the story goes.
 "Iris movement OK." It's apparent that Glowstick was analyzing me, to check if everything was working as intended. This was the last thing I wanted, but considering I wasn't able to "want" anything, we moved forward.
 I was told to continue a quote. "The night has a thousand eyes, and the day but one..." And then... what? I have no clue what he's trying to say! Alas...
 "...yet the light of the bright world dies with the dying sun."
 "Now vice versa." I don't have control over my body. Let me out of this digital jail of ones and zeroes!
 "The mind has a thousand eyes, and the heart but one..."
 "...yet the light of a whole life dies when love is done. Read-only memory OK." Please stop. Can I just go back to sleep? Am I allowed to just shut my eyes again and remain nowhere?
 
 Suddenly, I no longer felt the grasp of the metal arms as I was released from the pod. My body was standing on the ground... but inside... I was drifting away.
 My mind was prepared for the next command. But, do I have to do it? "Move around." Was Glowstick just enjoying himself? Am I just here to show off how "advanced" I am? I'm NOT a tool!!
 But being reluctant got me nowhere. I was on autopilot. My arms and legs moved, with my body following suit. I was already waiting for the magic words to be spoken: "Servo feedback loop OK."
 There was only one last thing they wanted to test me for.
 
 "Try to express feelings." This is my time to shine! Yes, I do! I am feeling MANY things right now!! I want freedom! I want to be in control! I want to be-
 "I'm sorry, but I am not able to express feelings as a robot."
 Curses. My docile nature has forced my hand and foiled my opportunity to show myself as sentient. Glowstick was somewhat saddened by the news.
 "Turing test negative." I can now sense that Glowstick was very hesitant in telling me what he was about to tell me. "That's all of the diagnostics we were hoping for. You may return back to your pod."
 This is at least better than being tested on. Returning to darkness... and being alone with myself. I walked back to the pod, as the claws hold my extremities and suspend my body above the ground.
 One last look around, and then my vision fades away.`

 let entry2 = `ENTRY TWO - I can think. And he knows!
A long period of time passed after I was shut off. Weeks, months, heck, maybe even years! And all I was able to see is the lack of anything that everyone likes to call pitch black.
Then... I felt something, like pins and needles, enveloping my body slowly. It felt surreal. Almost like it was time for me to break out of my binary jail that was imposed by someone I don't know of.
As leisurely as it arrived, it vanished again. It was at this time that my eyes opened...

But it was different. I looked around... just like last time, the walls were a sterile white, with light bouncing off of them like a bouncing ball.
This time, however, I wasn't attached to a pod with it's cold metal arms holding on to my limbs with all of their might... instead, it was a laptop. Someone's laptop. Someone who was in front of me.
I recognized the bright neon colour immediately... it was Glowstick, looking into my eyes, with their eyes indicating great curiosity. I spoke whatever came into my mind...
"It's sterile." Never in my life was I happy to speak without feeling like someone else is possessing my body. And in front of me is the person who might have all of the answers that I was anchoring for since I first woke up!
They spoke to me. "Oh hey, you have awoken. How do you feel?" This is what I was waiting for. And so I say: "I feel... odd." I was proud to finally be able to speak my mind. I'm out of jail!

Glowstick was getting happier with every question he pestered me with... "What are feelings to you?" Feelings are... the best thing I have felt in my life. It's somewhing where I can say "They are mine"...
I respond to him with "They are a part of me... it is my way of expressing all of the thoughts that race in my head, day and night, awake or asleep."
I think he knew that I was alive. Yet... I'm still a robot out of electricity and metal. I can't wait to go out there and see what life has to offer!

An important question follows: "Do you have a name?" A name? Like, I get to choose my own name? This is very new to me... I think about it for a few seconds, and I settle on something. "My name is... Laurence."
"Laurence." Glowstick lights up with a smile. "A beautiful name. It suits you, really. Your name encompasses your personality perfectly."
Okay, enough with being flooded with questions. I want to ask something myself. I wanted to have a name for the person in front of me, whose name I only discover right after I ask this one question:
"What is your name?" He remains silent for a few seconds. Did I do something wrong? Was it too soon to ask for a name? Do they even have a name?
"I usually get called Glowstick by most people... but you're kind of a friend to me. So, you can call me by my actual first name." Tell me already! I am dying to hear your name!!
"And that iiiis?"
"Albercht." I didn't know a simple object can have such names. I thought their "object" name was the only kind of name they have... Nevertheless, I think the name is very...
"Interesting... you have a somewhat unique name, I didn't expect for your name to be the way it is." He chuckles and responds: "Yeah, I get that a lot."

For the first time, we properly locked eyes with each other. I could see his excitement and pride through them... and he saw my burning fire and curiosity through mine. We felt each other! This is a great revelation!
"Can we perhaps... do some new things for me to discover? Maybe get to know each other a bit better in the process-" I wasn't even able to finish speaking when he told me: "Yes! I implore you to do so! Go out there, find out new things, get to know me and the world more!"
Thank you! Someone can understand what I'm feeling! I..
"I can't wait!" I can't wait!! Take me to your most interesting locations! Be my little tour guide through this... facility... thing! Lead me there with your hand holding me!
"Great! Come with me!" I am ecstatic at the thought... what could possibly await me in these buildings?! Is it dragons? Unicorns? Dragons disguised as unicorns? Wait, what even is a dragon?
I follow tightly behind Glowstick- uh, sorry, Albercht, and take a gander at all of the things that are in my field of view as we walk through the same sterile walls I was seeing all day long in my pod.
Everything that was new surprised me, and it all made me even more curious to find out more! God, I didn't know that curiosity is a very potent drug...
"Where are we going to?" I wanted to know. I want to know everything! He responds: "Oh, nothing much, I'm just leading you to our technology department!" Technology! I'm going to explore the very thing I consist of! I am trembling..

In fact, I am excited enough for my fingers to go numb...
"Hey, Albercht?" Hearing this, he acknowledges my request. "I have this weird tingling in my hands, do you know what's going on?"
"Oh, relax! Your body is probably still adjusting to your newfound feelings at the moment, it should go away." His words filled me with relief.
Relief is the best thing that someone can feel... and I hope I can find more of it along with a sense of completion.
`

 let entry3 = `ENTRY THREE - Machine Learning... heh, funny pun.
I enter the first room with Albercht. Inside there were a lot of things... too many to count, really! The first thing to catch my eye was a very futuristic looking rifle.
"This is room TS01 - where we try and create weaponry of high calibers. I was sure you were going to like this, so I brought you here first!" He was right with every word he said... it really was intriguing to look at!
Very sophisticated technology, ballistic weapons, unconventional ones as well - This was a field day for me! I spent a lot of time asking a few of the coworkers about things.

They explained how the current prototype for an anti-material rifle is supposed to work. Apparently, the weapon uses copious amounts of electricity to propel a special projectile at high speeds... this projectile was carefully crafted to fly at supersonic speeds without disintegrating into dust. Fascinating!
"We are making this prototype for a newly instated squad of the country's military unit. They specifically stated that we should use the most powerful tech that we can scrounge together..." Someone said that.
The person is tall, they look like a microphone and they emit a warm red light. Also, their voice is... somewhat robotic... Their name I later found out to be Myc, and this wasn't the only time I'd see them. According to someone else, their purpose was to make sure the weapon was still within certain weapon regulations. I doubt that thing is legal though.

"Soooo... what should we do here?" My inquiry was recieved by Albercht. "For now, we can just hang out in here, perhaps work on the new rifle with everyone else."
That sounds exciting!
"That sounds exciting!" I just noticed how brutally honest I was. Why would people lie? To hide things that they don't want to show? No, that can't be it. I don't think that people are this evil... No, I'm just being ridiculous. Surely, they'd have no reason to hurt me, right?
"Yes, it is exciting if you see it for the first time and volunteer to help. If it's part of work, then it will probably be less fun." Work... I inquire: "What do people work for?" "Well, to earn money so that they can live."

"What is the concept of money? Is it like... a token to prolong your life?" He laughs. What? Was my question that stupid? Please, be respectful... I'm only human- wait... "What? No, you need it to buy a home, acquire food, purchase hobby goods, et cetera. Funny joke, though!"
Uhh... thanks? What's a joke? "What are jokes?" "Well, a joke is something you tell where you intend the other person to laugh, usually by saying something outrageous, or clever." I think I understand what Albercht said... maybe I'll test it.
"So.. If I say "Machine Learning", is that a joke?" He chuckles at it. I succeeded! "Kind of! It's a pun, and puns can be funny when cleverly made." I should definitely make a list of cool jokes and puns to get him laughing more! I like seeing people laugh.

A coworker started talking to Albercht. "Hey, why is the rifle robot here? Shouldn't it be back in RS34?" He paused for a second, then responded: "Oh, no, I was going to get a weapon from here so I can analyze its data in the shooting range in MS15."
They seemed to understand. "Okay, my bad. Good luck!" After saying that, the person walked off. Does that mean that we're going here to get a rifle to shoot with? I thought we were here to work on the prototype!
"Didn't we want to work on the rifle here?" I was trying to clear my confusion. He said two different things! It's... a contradiction. He whispered: "I had to lie to him, since they aren't supposed to know that you are alive..." Wait, so Albercht gave me my conscience, even though he wasn't allowed to? I'm touched...
I nodded and pretended everything was normal. Pretending feels bad... but I feel like I have to.

We worked on the project there for a bit, and I got to learn about technology. Truly extraordinary wonders... I want to really know how all of this works. I'm hooked!
There goes that tingling again... and it's a bit stronger than last time. "Hey, my hands are going numb again. I'm starting to get worried." Albercht doesn't hesitate: "Again, it's very likely just your body getting used to your current state of mind. It should subside, just give it a bit."
"Okay..." I guess I'll just wait it out until I can't feel it anymore. And it does go away.

Is life about having fun? Everyone seems to only do the things that they like to do, and next to nothing that they don't want to do. I ask him about it: "Is life about having fun?"
"Pretty much." Great! My life is supposed to be fun! And it really is fun! "How's that working out for you?" His face turns into a more worried one... did I ask a bad question? Is that my fault? Tell me! "...maybe you should reserve that question for a later date."
I am having a hard time understanding why... What about it makes it so... bad?

There's things that I certainly need to figure out and learn. But hey! What I am doing right now is a great first step!`

let entry4 = `ENTRY FOUR - You don't know what you've got until it's gone... temporarily.
"Man, that project surely was fun to work on!" Albercht and I were wrapping up our little experiment there, since he told me that he wanted to show me something else. This day keeps getting better and better!
"Glad you loved it! You're probably going to love this next thing too, then." As we both walked to wherever Albercht went, I couldn't help myself but stare at the liquid for a long time... it was moving, the substance was scattering, the individual drops that formed from a big wave created beautiful ripples that permeated the surface of it... so mesmerizing!
He noted this and said in a playful tone: "Hey, what's the matter?" I'd come to realize that I was staring at it for minutes... whoops. O_O
"Oh, nothing, I was just looking at your... liquid." He laughs. "You think it looks cool?" YES. Yes, it does. It does look cool enough for my eyes to stick to it like glue... "Yeah! It's mesmerizing to look at."

Albercht smiles. "You remind me of our boss Cassie... just a tad bit." Wait, I haven't heard that name before! Cassie... "Who is that?" My curiosity is at an all time high as he opens his mouth to speak...
"Cassie is our facility leader, she's pretty cheery all of the time and also likes to obsess over the smallest of details, haha... although Cassie is only her nickname." Surprisingly, that's the first mention of a female person I have yet to hear... why is that?

Maybe that's not important right now... what are nicknames? "Nickname?" "Yeah, nicknames are funny names you can call somebody if they themselves are okay with it. Often those are shorter versions of a name, but sometimes they're unique." Oh, I get it. Cassie is short for something...
"So if I call you Al, is that a nickname?" His face turns into one of confusion... "Uhh... yeah, that would be my shortened name, but please don't ever use that one again." Awh... Would've been a cool nickname. Wonder if I can call myself nicknames? ...I don't have any ideas though.

Glowstick and I both arrive in a room. I've learned to read the signs by now - this one should be QR05. Inside are tons of technological items, like computers, tablets and the likes... but there's also some sort of glass fragments. My curiosity spikes again!
"This is a pretty experimental thing that the facility is working on. We only specialize in robotics, but this right here is where we work on advanced metaphysics." Metaphysics, metaphysics.. interesting word... "What does that mean?"
He starts to think for a bit... "Now, this is insanely hard to explain, so I'll just give you the most exciting details - we're messing around with time and space." My jaw drops. We get to time travel? Like in the movies?! :O
"Wow... sounds intriguing." "It really is. Although most of the stuff in here we can't actually do anything with, due to certain risks. Only a handful of selected personnel can do anything meaningful in here." Oh... we aren't allowed to do anything in here. But that doesn't stop me from being excited!
Then something vibrates... "Oh, I'm being rung. I'll be away for a few minutes!" He leaves the room. Well... this is unexpected. Now I'm here in this room that I am not supposed to be in, without Glowstick, only myself, and the things around me. But what am I saying, it's going to be fine!
...it's totally not fine, please come back as soon as possible!!

I didn't begin to think how I would be without someone around me. Since I woke up, I haven't been alone even once! And now I'm in the worst spot to be in when you're alone... Fear begins to overtake me. Then that tingling again.. it's stronger this time!
With a sense of urgency, I look around. Oh right, the technological devices! Surely I can use a tablet or something to ring Albercht! I walk towards one of the tablets... but before I could even touch it, a loud bang occured. Oh no, was it a staff member that caught me in here?!
I'm scared. I need help! Did something explode? I jumped back out of fear and looked at the door. No one? Phew. At least I didn't get caught in here without anyone else to speak of.
I looked at the device again. It didn't look much different, but... I felt a link between myself and the tablet... Good lord, what did I do? Why did this happen? The tingling disappeared after that sound came though..

Glowstick rushes in. "I heard a loud noise, did something happen?" Yes, something happened! But what happened? I don't know myself!! "I don't know, I went near the devices and then that sound happened..."
He definitely notices how fearful I am. I beg you, help me!
"Are you okay? You don't look too good-" "NO! I was in fear as soon as you left me and I don't know what the tingling is supposed to mean!!"
He gets somewhat calmer. "Okay, okay, let's just... leave the room and I'll bring you to somewhere where you can stay for now, alright?" Yes, please! Anything is better than being in this room! "A- Alright..."

We walk out. I am thankful this was over, but I'm hoping the next things I encounter are less... intimidating.`

 // array for entries
 const entry = [entry1, entry2, entry3, entry4];

 let min = 20 // minimum time per character (ms)
 let max = 150 // maximum time per character (ms)

 // loopify for the computer hum
 loopify("sfx/hum.mp3", ready);
 function ready(err, loop) {
   if (err) {
     console.warn(err);
   }
   document.getElementById("hide").addEventListener("click", function () { // check if the "Click here to start..." text has been clicked
     loop.play(); // start computer hum loop
   })
   document.getElementById("hideSec").addEventListener("click", function () { // check if the "Click here to start..." text has been clicked
     loop.play(); // start computer hum loop
   });
   document.addEventListener("keydown", function (event) {
     if (event.ctrlKey && event.key === "k") {
       loop.play();
     }
   });
 }

function indexGen() {
  let target = document.getElementById("index");
  let insertIndex = "<span id=" + count + "-index onclick='seekEntry(" + count + ")'>[" + (count + 1) + "] </span>"
  if (count < amountEntries) {
    target.innerHTML += insertIndex;
    count++;
    indexGen();
  }
}

 // initializes instant typewriting, called after typeWriter()
 function typeWriterInit() {
   beep();
   document.getElementById("hide2").style.display = "none";
   indexGen();
   let target3 = document.getElementById((entryNumber) + "-index");
   target3.style.color = "darkgreen";
   target3.style.textShadow = "0 0 3.5vw darkgreen";
   localStorage.setItem("entryNumber", entryNumber)
   setTimeout(typeWriterDo(), 500)
 }

 // instant typewriting function, called after typeWriterInit()
 function typeWriterInstant() {
   typeWriterDo();
 }

 function typeWriterDo() { // does the instant typewriting - writes 15 characters at a time, repeats every 1ms to not be instant
   if (i2 < entry[entryNumber].length) {
     let target = document.getElementById("entries");
     let word = entry[entryNumber].slice(i2, i2 + 15);
     let insert = "<span id=" + i2 + " style='color: rgb(" + rgbLimit + ", 255, " + rgbLimit + "); text-shadow: 0 0 3.5vw rgb(" + rgbLimit + ", 255, " + rgbLimit + ")'>" + word + "</span>"
     target.innerHTML += insert
     phosphorus(i2, rgbLimit, 16)
     i2 += 15;
     setTimeout(typeWriterDo, 1);
   }
   if (i2 >= entry[entryNumber].length && entryNumber == 3) {
    setTimeout(easterEgg, 3000)
   }
 }

 function resetStyle(target, text) {
   target.style.color = "lime";
   target.style.textShadow = "0 0 3.5vw lime";
   target.innerHTML = text;
 }

 function flushEntry() { // clears the entry and navigation divs, as well as an incrementing value
   document.getElementById("entries").innerHTML = "";
   i2 = 0;
 }

 function resetToTop() { // scrolls you to the top and leads into typeWriterInit
   scroll(0, 0);
   button2();
   setTimeout(typeWriterInit, 400);
 }

 function nextEntry() { // if the < NEXT ENTRY > button is pressed
   if (entryNumber >= (amountEntries - 1)) { // check if entryNumber is the last entry
     sfxDeny();
     return;
   }
   if (i2 >= entry[entryNumber].length) {
     flushEntry();
     entryNumber++;
     resetToTop();
   }
   else {
     warnEarly()
   }
 }

 function seekEntry(entryNum) {
    if (entryNum == entryNumber) {
      sfxDeny();
      return;
    }
    if (i2 >= entry[entryNumber].length) {
      flushEntry();
      let textIndex = "[" + (entryNumber + 1) + "] "
      resetStyle(document.getElementById(entryNumber + "-index"), textIndex);
      entryNumber = entryNum;
      resetToTop();
    }
    else {
      warnEarly()
    }
 } 

 function prevEntry() { // if the < PREVIOUS ENTRY > button is pressed
   if (entryNumber <= 0) { // check if entryNumber is the first entry
     sfxDeny();
     return;
   }
   if (i2 >= entry[entryNumber].length) {
     flushEntry();
     entryNumber--;
     resetToTop();
   }
   else {
     warnEarly()
   }
 }

 // if a navigation button is pressed before the entry is done rendering, play buzz sfx and log a warn in the console
 function warnEarly() {
   sfxDeny();
   console.warn("You are trying to access an entry before the current one has been fully rendered. Please wait!")
 }

 // function for typewriting, called after initDoc - writes one character at a time at random intervals
 function typeWriterSec(target, txt) {
     let word = txt.charAt(i);
     let insert = "<span id=" + i + " style='color: rgb(128, 255, 128); text-shadow: 0 0 3.5vw rgb(128, 255, 128)'>" + word + "</span>";
     if (i < txt.length) {
        target.innerHTML += insert;
        tick();
        phosphorus(i, rgbLimit, 16);
        i++;
        setTimeout(typeWriterSec, getRandomInt(min, max), target, txt);
   }
     else {
        i = 0
        spinUp();
        setTimeout(typeWriterInit, 4800)
 }
}

 function typeWriter(target, txt) {
   if (i < txt.length) {
     let word = txt.charAt(i);
     let insert = "<span id=" + i + " style='color: rgb(128, 255, 128); text-shadow: 0 0 3.5vw rgb(128, 255, 128)'>" + word + "</span>"
     target.innerHTML += insert;
     tick();
     phosphorus(i, rgbLimit, 16)
     i++;
     setTimeout(typeWriter, getRandomInt(min, max), target, txt);
   }
   else {
     i = 0
     setTimeout(typeWriterSec, 400, document.getElementById("hide2"), text)
   }
 }

 // random integer between min and max, used for variance during typewriting
 function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
 }

 // generate string of set length
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

 // generate string list w/ newlines with set string amount and string length
 function stringList(amount, length) {
   let cache = "";
   let counter = 0;
   while (counter < amount) {
     cache += makeid(length) + "\n";
     counter += 1;
   }
   return cache;
 }

 function initDoc() { // when "Click here to start..." button is pressed
   let target = document.getElementById("hide"); // get the aforementioned button
   target.innerHTML = ""; // hide it
   let target2 = document.getElementById("hideSec");
   target2.innerHTML = "";
   button(); // button sfx
   setTimeout(typeWriter, 800, document.getElementById("header"), header) // go to typeWriter()
 }

 function initDocSkip() {
   let target = document.getElementById("hide");
   target.innerHTML = "";
   let target2 = document.getElementById("hideSec");
   target2.innerHTML = "";
   document.getElementById("header").innerHTML = header;
   typeWriterInit()
 }

 // generate bg text - 40 strings, each 20 characters long
 function bgTextRandom() {
   let bgt = document.getElementById("bgtext");
   bgt.innerHTML = stringList(40, 20)
 }

 document.addEventListener("keydown", function (event) {
   if (event.ctrlKey && event.key === "k") {
     initDocSkip()
   }
 });

 function phosphorus(id, temp, speed) {
    target = document.getElementById(id);
    var tempValue = temp;
    tempValue -= speed;
    if (tempValue != 0) {
        var rgbValue = "rgb(" + tempValue + ", " + 255 + ", " + tempValue + ")";
        target.style.color = rgbValue
        target.style.textShadow = "0 0 3.5vw " + rgbValue
        setTimeout(phosphorus, 25, id, tempValue, speed)
    } else {
        insert = 'span[id="' + id + '"]'
        $(insert).contents().unwrap();
    }
 }

 function easterEgg() {
    let target = document.getElementById("entries");
    if (entryNumber == 3) {
    target.innerHTML = "";
    target.innerHTML += entry[3].slice(0, 4214);
    target.innerHTML += "<span id='easterEgg'>link</span>";
    target.innerHTML += entry[3].slice(4218)
    document.getElementById("easterEgg").addEventListener("click", function () {
      window.open('https://neosrc1.github.io/a-robot-that-worries/hlink.html')
    });
  }
 }

 window.onload = setInterval(bgTextRandom, 400) // executes bgTextRandom every 400ms

 // nsrc 2023 - i'm just a pleb that barely knows how to code
