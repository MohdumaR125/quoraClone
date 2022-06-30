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

        image.setAttribute("src",elem.image_url);
        td2.innerText=elem.title;
        td1.append(image);
        tr.append(td1,td2);
        document.querySelector("tbody").append(tr);
    })
}