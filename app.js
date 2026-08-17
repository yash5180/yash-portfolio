let education = document.querySelector("#ed");
let skills = document.querySelector("#skillscont");
let h310 = document.createElement("h3");
let h310p = document.createElement("p");

h310.innerText = "10th class (CBSE)";
h310p.innerText ="XYZ School | 2020";

education.append(h310);
education.append(h310p);

let h312 = document.createElement("h3");
let h312p = document.createElement("p");

h312.innerText = "12th class (CBSE)";
h312p.innerText ="XYZ School | 2020";

education.append(h312);
education.append(h312p);

let grad = document.createElement("h3");
let gradp = document.createElement("p");

grad.innerText = "Chandigarh University, Punjab";
gradp.innerText = "Bachelor of Engineering in Computer Science and Engineering  CGPA: 7.74" ;

education.append(grad);
education.append(gradp);

let skill = ["HTML","CSS","JavaScript","React","Node.js","Java","Data Structures & Algorithms","SQL"];

for(skil of skill){
    let skillbox = document.createElement("div");
    skillbox.classList.add("badges");
    skillbox.innerText = skil;
    skills.appendChild(skillbox);

}

let rlc = document.querySelector("#rlccont");
let rlcarr = ["• Data Structures and Algorithms (DSA)","• Object-Oriented Programming (OOP)","• Database Management Systems (DBMS)","• Operating Systems (OS)"];

for(rl of rlcarr){
    let rlcbox = document.createElement("div");
    rlcbox.classList.add("rlcbox");
    rlcbox.innerText = rl;
    rlc.appendChild(rlcbox);
}

let projects = [
    {
        title: "Spotify Clone",
        description: "A Spotify-inspired music player interface.",
        image:"Spotify.PNG"
    },

    {
        title: "NFT Collection",
        description: "A blockchain-based NFT collection project.",
        image:"NFT.PNG"
    },

    {
        title: "Todo App",
        description: "A JavaScript todo application using DOM.",
        image:"Todo.PNG"
    }
];

let proj = document.querySelector("#projectContain");

for(pro of projects){
    let card = document.createElement("div");
    card.classList.add("procar");

    let img = document.createElement("img");
    img.src = pro.image;

    let title = document.createElement("h3");
    title.innerText = pro.title;

    let desc = document.createElement("p");
    desc.innerText = pro.description;

    card.append(img);
    card.append(title);
    card.append(desc);

    proj.appendChild(card);
}

let downres = document.querySelector(".btn");
downres.addEventListener("click",()=>{
    alert("Resume is Downloading");
});

let certify = document.querySelector("#certicont");

let certification = ["• Internet Of Things","• Cloud Computing-NPTEL","• Sigma Batch – DSA (Apna College, 2024)","• Wipro Talent Next Training Program - DotNet Full Stack"];

for(cert of certification){
    let cerbox = document.createElement("div");
    cerbox.classList.add("cerbox");
    cerbox.innerText = cert;
    certify.appendChild(cerbox);
}

let hobbies = document.querySelector("#hobbycon");
let hoby = ["Reading","Listening to Music","Solving Problems","Gaming"];
for(hob of hoby){
    let hobbox = document.createElement("div");
    hobbox.innerText = hob;
    hobbies.appendChild(hobbox);
}

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

sendBtn.addEventListener("click", function() {
    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    alert("Message Sent Successfully");
    console.log(name);
    console.log(email);
    console.log(message);
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});