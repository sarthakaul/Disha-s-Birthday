const storyParts = [
    
    {
        title: "Happy Birthday, Disha!",
        story: "You are the most amazing person in my life, and I am so grateful for you. Here's a little something to show my love for you.",
        image: "assets/IMG20220930135310.jpg"
    },
    {
        title: "Jb hm pehli baar ghumne gye",
        story: "I still remember the first time we met.I still remember ki i was hoping ki koundal or tera kuch shuru se na chal rha ho,and thankfully saala chota nikla height ka",
        image:"assets/first meets/IMG20220930121100.jpg"
       
    },
    {
        title: "Teri freshers",
        story: "I'll remember this freshers for my life,this was the day you proposed me in front of everyone and did something jo ki mere liye kbhi kisi ne nhi kiya tha ,thankyou so much",
        image: "assets/first meets/IMG-20221002-WA0081.jpg"
    },
    {
        title: "Our First Photoshoot",
        story: "iss din mai tu vicky or shivangi ghumne gye the,or ye hmaara pehla couple photoshoot tha ,(shyd iske baad kbhi dobaara hua bhi nhi but chlo koi na)",
        image: "assets/first meets/IMG20221031171308.jpg"
    },
    {
        title: "Thodi sundr to hai tu",
        story: "Haan i admit thodi sundar to hai tu bhle hi mai zyada tareef ni krta teri but i adore you so much and i waana be with you for my life(haan max. time jo tu sundr dikhti hai co mere photography skills ka kamaal hota hai)",
        image: "assets/first meets/IMG20230104161541.jpg"
    },
    {
        title: "Hamaari pehli holi",
        story: "Dekh hmaari pehli holi,iss din hum dono bheeg ke pahaaad pe dhoop seekne chle gye the,haaye raam i just hate holis ,just tere liye jaata hu",
        image: "assets/holi/IMG-20230308-WA0007.jpg"
    },
    {
        title: "Sleeping beauty",
        story: "I literally have countless of these screenshots and fir tu mujhe bolti hai ki mai so jaata hu,vaah bhyi!!",
        image: "assets/holi/Screenshot_2023-10-24-22-00-11-60_6012fa4d4ddec268fc5c7112cbb265e7.jpg"
    },
    {
        title: "We will be like this forever",
        story: "Dekh at last I just wanna say ki i love you the most and i'll keep doing it forever,regardless of the fights we have regularly,i'll be there for you forever,till my last breadth,and haan turn the next slide for the final question",
        image: "assets/holi/Snapchat-435072569.jpg"
    },
    {
        title: "The main question",
        story: "Will you marry me?(10 saal baad ofc)",
        image: "assets/holi/IMG-20230602-WA0007.jpg" // Path to the proposal image
    }
];

let currentPart = 0;

function showNextPart() {
    currentPart++;
    if (currentPart < storyParts.length) {
        document.getElementById('title').innerText = storyParts[currentPart].title;
        document.getElementById('story').innerText = storyParts[currentPart].story;
        const imageElement = document.getElementById('image');
        imageElement.src = storyParts[currentPart].image;

        // Load image to determine its orientation
        const img = new Image();
        img.onload = function () {
            if (img.width > img.height) {
                imageElement.classList.remove('portrait');
            } else {
                imageElement.classList.add('portrait');
            }
        };
        img.src = storyParts[currentPart].image;

        if (currentPart === storyParts.length - 1) {
            document.getElementById('next-button').style.display = 'none';
            document.getElementById('proposal-buttons').style.display = 'block';
        }
    } else {
        document.getElementById('next-button').innerText = "The End";
        document.getElementById('next-button').disabled = true;
    }
}

document.getElementById('next-button').addEventListener('click', showNextPart);

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('title').innerText = "Ab to tune haan boldi!";
    document.getElementById('story').innerText = "Dekh,10 saal baad ye hoga tera mera bacha,mazee kr ab ;)";
    document.getElementById('image').src = "assets/first meets/Screenshot_2023-05-14-15-28-17-66_40deb401b9ffe8e1df2f1cc5ba480b12.jpg"; // Path to the image shown when she says yes
    document.getElementById('proposal-buttons').style.display = 'none';
});

document.getElementById('no-button').addEventListener('click', function() {
    let loopCounter = 0;
    function askAgain() {
        loopCounter++;
        if (loopCounter < 2) { // Number of times to loop before showing a special message or giving another option
            alert("Please say yes! I love you so much!");
        } else {
            document.getElementById('title').innerText = "Please?";
            document.getElementById('story').innerText = "I can't imagine my life without you. Will you marry me?";
        }
        document.getElementById('proposal-buttons').style.display = 'block';
    }
    askAgain();
});
