var leftData=[
    {
        image_url: "https://qph.cf2.quoracdn.net/main-thumb-t-5488-100-3xdwG0xXYXFkIQpIO4ZhoMLOHQE3ASFk.jpeg" ,
        title:"Epistemology",
    },
    {
        image_url:"	https://qph.cf2.quoracdn.net/main-thumb-t-1798-100-OymNc8d6wCXvNogdXfoxtqipKla69TTA.jpeg",
        title:"World war I",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-3620-100-yTrqVsrvziy0KXZZHKGdQGRkUk7r1iif.jpeg" ,
        title: "Morals and Morality" ,
    },
    {
        image_url:"	https://qph.cf2.quoracdn.net/main-thumb-t-3380-100-rckzkdfhbgmchbpicmnpkmjtebtgsipb.jpeg" ,
        title:"New Delhi" ,
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-4391-100-3bVQhJxiE59N0ETLVArfDbzv8SddeFOa.jpeg",
        title:"Pakistan",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1055-100-YcjXiFeYHut8R6Xu1gDIQjzcg0MyfeMZ.jpeg",
        title:"Literature",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1943-100-nbjawgmsyqhsizvohxhfcxhnjutwpdil.jpeg",
        title:"Ethics"
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1375-100-aybrjrdmkktbagbhpqujankemexuyeti.jpeg",
        title:"India",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1497-100-GNNZHw8iGYKcBBdqFGxoNvw85bgzRI0Z.jpeg" ,
        title:"Philosophy"
    },
    {
        image_url:"	https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg",
        title:"History",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-813-100-mHRdyrT74CRRctkfFsF5MPHUYobecrPW.jpeg",
        title:"Celebrity Gossip",
    },
];

displayLeftSide(leftData);

function displayLeftSide(data){
    data.map(function(elem){
        var tr=document.createElement("tr");
       var td1=document.createElement("td");
        var td2=document.createElement("td");
        var image=document.createElement("img");
        image.setAttribute("class","leftimage");

        image.setAttribute("src",elem.image_url);
        td2.innerText=elem.title;
        td1.append(image);
        tr.append(td1,td2);
        document.querySelector("tbody").append(tr);
    })
}

feedData=[
    {
        profilepic:"https://qphs.fs.quoracdn.net/main-thumb-135629173-50-fpakbgazcwctlkzymnblmfmveuucjaub.jpeg",
        name: "Saurav Pandey",
        tag:"Lives in India Updated Apr 1",
        heading:"How bad are things for female travelers/locals in Delhi?",
        postdata:"I wanna share my personal experience.I have to go to Delhi for my exam which is nearby at the Dwarka metro station. Soon after the exam, I am in a hurry to go to the Anand Vihar terminal to return home asap.In the metro, one lady who is for sure is a Punjabi woman comes and told me to stand up and give my seat for her to sit. I told her politely that ma'am there is a lot of space as the bench was empty and occupied by three people only.She told me to leave immediately as these seats are particularly reserved for ladies only. I said ok and sit on the front bench having enough space to sit for more than 3 people.      She along with her husband and daughters were sitting comfortably on the seat. Meanwhile, her daughter taunts me…“ mom - you Removed him.Mom replied- why not I will do the same with all, because they don't have ethics.",

        img_url:"https://qphs.fs.quoracdn.net/main-qimg-b86bd503d8b27d59826b69f2268a47b6-lq",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
    {
        profilepic:"" ,
        name:"" ,
        tag:"",
        heading:"",
        postdata:"",
        img_url:"",
    },
]

displayFeed(feedData);

function displayFeed(data){
    data.map(function(elem){
        var headingDiv= document.createElement("div");
        headingDiv.setAttribute("id","postHeading");
        var profilepic=document.createElement("img");
        profilepic.setAttribute("src",elem.profilepic);
        
        var Name=document.createElement("p");
        Name.innerText=elem.name;

        var follow= document.createElement("p");
        follow.innerText="Follow";

        var Tag= document.createElement("p");
        Tag.innerText=elem.tag;

        var postDiv=document.createElement("div");

        var Heading= document.createElement("h3");
        Heading.innerText=elem.heading;

        var Postdata=document.createElement("p");
        Postdata.innerText=elem.postdata;

        var postImage=document.createElement("img");
        postImage.setAttribute("src",elem.img_url);

        headingDiv.append(profilepic,Name,follow,Tag);
        postDiv.append(Heading,Postdata,postImage);

        document.getElementById("feed").append(headingDiv,postDiv);

    })
}
