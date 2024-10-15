let main = document.getElementById("demo");

// nav start 
let navbar=document.createElement("nav");
navbar.setAttribute("class","bg-dark navbar navbar-expand-lg p-0");
main.appendChild(navbar);

let navdiv=document.createElement("div");
navdiv.setAttribute("class","container-fluid");
navbar.appendChild(navdiv);

let nava=document.createElement("a");
nava.setAttribute("href","#")
nava.setAttribute("class","navbar-brand m-0 text-center ");
navdiv.appendChild(nava);

let navicon=document.createElement("img");
navicon.setAttribute("src","img/Logo1.png");
navicon.setAttribute("class","w-50 align-self-center")
nava.appendChild(navicon);

let navbtn=document.createElement("button");
navbtn.setAttribute("type","button");
navbtn.setAttribute("class","navbar-toggler w-25 collapsed");
navbtn.setAttribute("data-bs-toggle","collapse");
navbtn.setAttribute("data-bs-target","#navbar1");
navdiv.appendChild(navbtn);

let navbtnspan=document.createElement("i");
navbtnspan.setAttribute("class"," icon fa-solid fa-bars text-light" );
navbtn.appendChild(navbtnspan);

let navcollapse=document.createElement("div");
navcollapse.setAttribute("class","collapse navbar-collapse");
navcollapse.setAttribute("id","navbar1");
navdiv.appendChild(navcollapse);

let navul=document.createElement("ul");
navul.setAttribute("class","navbar-nav justify-content-evenly w-75 text-light");
navcollapse.appendChild(navul);


let arr1=["Home","About Us","Serivces","Packages ","Contact"];

for(let i=0;i<arr1.length;i++){
 
let li=document.createElement("li");
li.setAttribute("class","nav-item ")
navul.appendChild(li);
let a=document.createElement("a");
a.setAttribute("href","#");
a.setAttribute("class"," nav-link text-decoration-none text-light");
a.innerText=arr1[i];
li.appendChild(a);
}

let navform=document.createElement("form");
navcollapse.appendChild(navform);

let navcollapsebtn=document.createElement("button");
navcollapsebtn.setAttribute("type","button");
navcollapsebtn.setAttribute("class","btn btn-outline-warning");
navform.appendChild(navcollapsebtn);

let navcollapsebtntext=document.createTextNode("BOOK TICKET");
navcollapsebtn.appendChild(navcollapsebtntext);

// navbar end 

// hero section start 
let hero = document.createElement("div");
hero.setAttribute("class", "container-fluid hero")
main.appendChild(hero);


let herologocon = document.createElement("div");
herologocon.setAttribute("class", "container");
hero.appendChild(herologocon);
let herorow = document.createElement("row");
herorow.setAttribute("class", "row d-flex justify-content-center");
herologocon.appendChild(herorow);

let herologo = document.createElement("div");
herologo.setAttribute("class", "col-12 col-md-6 ");
let i = document.createElement("i");
i.setAttribute("class", "icon fa-brands fa-facebook p-lg-5 p-3 fs-2 color-icon");
herologo.appendChild(i);
herorow.appendChild(herologo);

let i2 = document.createElement("i");
i2.setAttribute("class", "icon fa-brands fa-instagram p-lg-5 p-3 fs-2 color-icon");
herologo.appendChild(i2);

let i3 = document.createElement("i");
i3.setAttribute("class", "icon fa-brands fa-twitter p-lg-4 p-3 fs-2 color-icon");
herologo.appendChild(i3);

let i4 = document.createElement("i");
i4.setAttribute("class", "icon fa-brands fa-youtube p-lg-4 p-3 fs-2 color-icon");
herologo.appendChild(i4);

let heropage = document.createElement("div");
heropage.setAttribute("class", "container");
hero.appendChild(heropage);

let heropagerow = document.createElement("row");
heropagerow.setAttribute("class", "row");
heropage.appendChild(heropagerow);

let airimg = document.createElement("div");
airimg.setAttribute("class", "col-12 col-md-5  rounded-2 color-border");
heropagerow.appendChild(airimg);

let img = document.createElement("img");
img.setAttribute("src", "img/Png-2.png");
img.setAttribute("class", "img-fluid ");
airimg.appendChild(img);

let airtext = document.createElement("div");
airtext.setAttribute("class", "col-12 col-md-7");
heropagerow.appendChild(airtext);

let herotext = document.createElement("h3");
herotext.setAttribute("class", "text-light")
let heropara = document.createTextNode("Welcome to ");
airtext.appendChild(herotext);
herotext.appendChild(heropara);
let flightspan = document.createElement("span");
flightspan.setAttribute("class", "color-icon");
let flightspantext = document.createTextNode("Flights");
flightspan.appendChild(flightspantext);
herotext.appendChild(flightspan);


let herotext2 = document.createElement("h3");
herotext2.setAttribute("class", "text-light");
let heropara2 = document.createTextNode("Private Charter with ");
airtext.appendChild(herotext2);
herotext2.appendChild(heropara2);
let flightspan2 = document.createElement("span");
flightspan2.setAttribute("class", "h1 dispaly-4 color-icon");
let flightspantext2 = document.createTextNode("Global");
flightspan2.appendChild(flightspantext2);
herotext2.appendChild(flightspan2);
let heropara3 = document.createTextNode(" Coverage");
herotext2.appendChild(heropara3);

let herotext3 = document.createElement("p");
herotext3.setAttribute("class", "text-light mt-3");
let heropara4 = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?")
airtext.appendChild(herotext3);
herotext3.appendChild(heropara4);

let herotext4=document.createElement("button");
herotext4.setAttribute("class","btn btn-outline-light color-icon m-auto d-block mt-4");
let heropara5=document.createTextNode("EXPLORE");
airtext.appendChild(herotext4);
herotext4.appendChild(heropara5);

// hero section end 

// OUR SERVICES start 

let our=document.createElement("div");
our.setAttribute("class","container-fluid ");
main.appendChild(our);


let ourmain=document.createElement("div");
ourmain.setAttribute("class","container");
our.appendChild(ourmain);

let ourrow=document.createElement("div");
ourrow.setAttribute("class","row mt-4");
ourmain.appendChild(ourrow);

let our1col=document.createElement("div");
our1col.setAttribute("class","col-12 col-lg-5");
ourrow.appendChild(our1col);

let ourtext=document.createElement("p");
ourtext.setAttribute("class","color-icon mt-5")
let ourpara=document.createTextNode("OUR SERVICES");
ourtext.appendChild(ourpara);
our1col.appendChild(ourtext);

let ourtext1=document.createElement("h2");
ourtext1.setAttribute("class","text-dark");
let ourpara1=document.createTextNode("We Have Best")
ourtext1.appendChild(ourpara1);
our1col.appendChild(ourtext1);

let ourspan=document.createElement("span");
ourspan.setAttribute("class","h2 fw-bold display-4 color-icon ms-3");
let ourspantext=document.createTextNode("Luxury Services");
ourspan.appendChild(ourspantext);
ourtext1.appendChild(ourspan);

let ourpara1min=document.createTextNode(" For You");
ourtext1.appendChild(ourpara1min);

let ourtext2=document.createElement("p");
ourtext2.setAttribute("class","text-dark mt-2");
let ourpara2=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?")
ourtext2.appendChild(ourpara2);
our1col.appendChild(ourtext2);

let ourtext3=document.createElement("button");
ourtext3.setAttribute("class","btn btn-outline-warning color-icon m-auto d-block");
let ourpara3=document.createTextNode("VIEW SERVICES");
ourtext3.appendChild(ourpara3);
our1col.appendChild(ourtext3);


let our2col=document.createElement("div");
our2col.setAttribute("class","col-12 col-lg-7 ourimg mb-2 p-3 mt-2");
ourrow.appendChild(our2col);

let our2row=document.createElement("div");
our2row.setAttribute("class","row container");
our2col.appendChild(our2row);

let our2col1=document.createElement("div");
our2col1.setAttribute("class","col-12 col-md-6 ");
our2row.appendChild(our2col1);
let our2col1min=document.createElement("div");
our2col1min.setAttribute("class"," our-col  border border-warning border-1 p-2 mt-2");
our2col1.appendChild(our2col1min);

let our2col1para=document.createElement("i");
our2col1para.setAttribute("class","icon fa-solid fa-paper-plane fs-3 text-light");
our2col1min.appendChild(our2col1para);

let our2col1para1=document.createElement("h5");
our2col1para1.setAttribute("class","text-light");
let our2col1para1text=document.createTextNode("Private Jet Charter");
our2col1para1.appendChild(our2col1para1text);
our2col1min.appendChild(our2col1para1);

let our2col1para2=document.createElement("p");
our2col1para2.setAttribute("class","text-light ");
let our2col1para2text=document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
our2col1para2.appendChild(our2col1para2text);
our2col1min.appendChild(our2col1para2);



let our2col2=document.createElement("div");
our2col2.setAttribute("class","col-12 col-md-6 ");
our2row.appendChild(our2col2);
let our2col2min=document.createElement("div");
our2col2min.setAttribute("class"," our-col container border border-warning border-1 p-2 mt-2");
our2col2.appendChild(our2col2min);

let our2col2para=document.createElement("i");
our2col2para.setAttribute("class","icon fa-solid fa-gears fs-3 text-light");
our2col2min.appendChild(our2col2para);

let our2col2para1=document.createElement("h5");
our2col2para1.setAttribute("class","text-light");
let our2col2para1text=document.createTextNode("Private Helicopter");
our2col2para1.appendChild(our2col2para1text);
our2col2min.appendChild(our2col2para1);

let our2col2para2=document.createElement("p");
our2col2para2.setAttribute("class","text-light ");
let our2col2para2text=document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
our2col2para2.appendChild(our2col2para2text);
our2col2min.appendChild(our2col2para2);



let our2col3=document.createElement("div");
our2col3.setAttribute("class","col-12 col-md-6 ");
our2row.appendChild(our2col3);
let our2col3min=document.createElement("div");
our2col3min.setAttribute("class"," our-col container border border-warning border-1 p-2 mt-2");
our2col3.appendChild(our2col3min);

let our2col3para=document.createElement("i");
our2col3para.setAttribute("class","icon fa-solid fa-truck-medical fs-3 text-light");
our2col3min.appendChild(our2col3para);

let our2col3para1=document.createElement("h5");
our2col3para1.setAttribute("class","text-light");
let our2col3para1text=document.createTextNode("Air Ambulance");
our2col3para1.appendChild(our2col3para1text);
our2col3min.appendChild(our2col3para1);

let our2col3para2=document.createElement("p");
our2col3para2.setAttribute("class","text-light ");
let our2col3para2text=document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
our2col3para2.appendChild(our2col3para2text);
our2col3min.appendChild(our2col3para2);



let our2col4=document.createElement("div");
our2col4.setAttribute("class","col-12 col-md-6 ");
our2row.appendChild(our2col4);
let our2col4min=document.createElement("div");
our2col4min.setAttribute("class"," our-col container border border-warning border-1 p-2 mt-2");
our2col4.appendChild(our2col4min);

let our2col4para=document.createElement("i");
our2col4para.setAttribute("class","icon fa-solid fa-person-circle-plus fs-3 text-light");
our2col4min.appendChild(our2col4para);

let our2col4para1=document.createElement("h5");
our2col4para1.setAttribute("class","text-light");
let our2col4para1text=document.createTextNode("Business Jet Charter");
our2col4para1.appendChild(our2col4para1text);
our2col4min.appendChild(our2col4para1);

let our2col4para2=document.createElement("p");
our2col4para2.setAttribute("class","text-light ");
let our2col4para2text=document.createTextNode("We bring the right people together to challenge established thinking and drive transform in 2020");
our2col4para2.appendChild(our2col4para2text);
our2col4min.appendChild(our2col4para2);

// section 2 end 


// section 3 start 
let Luxurymain=document.createElement("div");
Luxurymain.setAttribute("class","container-fluid luxury-img")
main.appendChild(Luxurymain)

let Luxurycon=document.createElement("div");
Luxurycon.setAttribute("class","container");
Luxurymain.appendChild(Luxurycon);

let Luxuryrow=document.createElement("div");
Luxuryrow.setAttribute("class","row mt-3 mb-5");
Luxurycon.appendChild(Luxuryrow);

let Luxurycol1=document.createElement("div");
Luxurycol1.setAttribute("class","col-12 col-md-12 col-lg-5 mt-4 d-md-flex align-item-center justify-contain-center rounded-3 d-lg-block color mb-lg-3");
Luxuryrow.appendChild(Luxurycol1);


let Luxurycol1row1=document.createElement("div");
Luxurycol1row1.setAttribute("class","text-center  mt-lg-5 ")
Luxurycol1.appendChild(Luxurycol1row1)
let Luxurycol1row1icon=document.createElement("i");
Luxurycol1row1.appendChild(Luxurycol1row1icon);
Luxurycol1row1icon.setAttribute("class","icon fa-regular fa-circle-check fs-lg text-light ");
let Luxurycol1row1icontext=document.createTextNode(" Luxury Flight");
Luxurycol1row1icon.appendChild(Luxurycol1row1icontext);

let Luxurycol1row1p=document.createElement("p");
Luxurycol1row1p.setAttribute("class","text-light");
Luxurycol1row1.appendChild(Luxurycol1row1p);
let Luxurycol1row1ptext=document.createTextNode("Reach with us to reach your destination");
Luxurycol1row1p.appendChild(Luxurycol1row1ptext);


let Luxurycol1row2=document.createElement("div");
Luxurycol1row2.setAttribute("class","text-center  mt-lg-5")
Luxurycol1.appendChild(Luxurycol1row2)
let Luxurycol1row2icon=document.createElement("i");
Luxurycol1row2.appendChild(Luxurycol1row2icon);
Luxurycol1row2icon.setAttribute("class","icon fa-regular fa-circle-check fs-lg text-light");
let Luxurycol1row2icontext=document.createTextNode(" Best Services");
Luxurycol1row2icon.appendChild(Luxurycol1row2icontext);

let Luxurycol1row2p=document.createElement("p");
Luxurycol1row2p.setAttribute("class","text-light");
Luxurycol1row2.appendChild(Luxurycol1row2p);
let Luxurycol1row2ptext=document.createTextNode("Reach with us to reach your destination");
Luxurycol1row2p.appendChild(Luxurycol1row2ptext);



let Luxurycol1row3=document.createElement("div");
Luxurycol1row3.setAttribute("class","text-center mt-lg-5")
Luxurycol1.appendChild(Luxurycol1row3)
let Luxurycol1row3icon=document.createElement("i");
Luxurycol1row3.appendChild(Luxurycol1row3icon);
Luxurycol1row3icon.setAttribute("class","icon fa-regular fa-circle-check fs-lg text-light");
let Luxurycol1row3icontext=document.createTextNode(" Certified Pilot");
Luxurycol1row3icon.appendChild(Luxurycol1row3icontext);

let Luxurycol1row3p=document.createElement("p");
Luxurycol1row3p.setAttribute("class","text-light");
Luxurycol1row3.appendChild(Luxurycol1row3p);
let Luxurycol1row3ptext=document.createTextNode("Reach with us to reach your destination");
Luxurycol1row3p.appendChild(Luxurycol1row3ptext);



let Luxurycol2=document.createElement("div");
Luxurycol2.setAttribute("class","col-md-5 col-lg-3");
Luxuryrow.appendChild(Luxurycol2);

let Luxurycol2imgdiv=document.createElement("div");
Luxurycol2imgdiv.setAttribute("class","p-3 mt-3");
Luxurycol2.appendChild(Luxurycol2imgdiv)

let Luxurycol2img=document.createElement("img");
Luxurycol2img.setAttribute("src","img/F-1-1.jpg");
Luxurycol2img.setAttribute("class","img-fluid rounded-3");
Luxurycol2imgdiv.appendChild(Luxurycol2img);


let Luxurycol3=document.createElement("div");
Luxurycol3.setAttribute("class","col-10 col-md-5 col-lg-4 Luxurycol3-img mt-4 mb-3 rounded-3");
Luxuryrow.appendChild(Luxurycol3);

let Luxurycol3text1=document.createElement("p");
Luxurycol3text1.setAttribute("class","color-icon")
Luxurycol3.appendChild(Luxurycol3text1)
let Luxurycol3text1p=document.createTextNode("ABOUT FLIGHT");
Luxurycol3text1.appendChild(Luxurycol3text1p);

let Luxurycol3text2=document.createElement("h2");
Luxurycol3text2.setAttribute("class","text-light fs-bold");
Luxurycol3.appendChild(Luxurycol3text2);
let Luxurycol3text2p=document.createTextNode("We Have Best");
Luxurycol3text2.appendChild(Luxurycol3text2p);

let Luxurycol3text2span=document.createElement("span");
Luxurycol3text2span.setAttribute("class"," h2 color-icon fs-bold");
Luxurycol3text2.appendChild(Luxurycol3text2span);
let Luxurycol3text2span1=document.createTextNode(" Luxury Services");
Luxurycol3text2span.appendChild(Luxurycol3text2span1);

let Luxurycol3text2p1=document.createTextNode(" For You");
Luxurycol3text2.appendChild(Luxurycol3text2p1);

let Luxurycol3text3=document.createElement("p");
Luxurycol3text3.setAttribute("class","text-light fs-bold");
Luxurycol3.appendChild(Luxurycol3text3);
let Luxurycol3text3p=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
Luxurycol3text3.appendChild(Luxurycol3text3p);


let Luxurycol3text4=document.createElement("button");
Luxurycol3text4.setAttribute("class","btn btn-outling-warning m-auto d-block text-warning border border-warning");
Luxurycol3.appendChild(Luxurycol3text4);
let Luxurycol3text4p=document.createTextNode("VIEW ABOUT");
Luxurycol3text4.appendChild(Luxurycol3text4p);

// section 3 end 

// section 4 start 

let Benefitmain=document.createElement("div");
Benefitmain.setAttribute("class","container-fluid");
main.appendChild(Benefitmain);

let Benefitcon=document.createElement("div");
Benefitmain.setAttribute("class","container");
Benefitmain.appendChild(Benefitcon);

let Benefitrow=document.createElement("div");
Benefitrow.setAttribute("class","row");
Benefitcon.appendChild(Benefitrow);

let Benefitcol1=document.createElement("div");
Benefitcol1.setAttribute("class","col-lg-4 mt-5 ");
Benefitrow.appendChild(Benefitcol1);

let Benefitcol1p=document.createElement("p");
Benefitcol1p.setAttribute("class","color-icon");
Benefitcol1.appendChild(Benefitcol1p);
let Benefitcol1ptext=document.createTextNode("OUR BENEFIT");
Benefitcol1p.appendChild(Benefitcol1ptext);


let Benefitcol1h=document.createElement("h2");
Benefitcol1h.setAttribute("class","text-dark");
let Benefitcol1htext=document.createTextNode("Learn More About");
Benefitcol1.appendChild(Benefitcol1h);
Benefitcol1h.appendChild(Benefitcol1htext);

let Benefitcol1hspan=document.createElement("span");
Benefitcol1hspan.setAttribute("class","color-icon");
Benefitcol1hspantext=document.createTextNode(" Private Jet");
Benefitcol1h.appendChild(Benefitcol1hspan);
Benefitcol1hspan.appendChild(Benefitcol1hspantext);

let Benefitcol1htext2=document.createTextNode(" Benefits")
Benefitcol1h.appendChild(Benefitcol1htext2);

let Benefitcol1p2=document.createElement("p");
Benefitcol1p2.setAttribute("class","text-dark");
Benefitcol1.appendChild(Benefitcol1p2);
let Benefitcol1p2text=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
Benefitcol1p2.appendChild(Benefitcol1p2text);



let Benefitcol2=document.createElement("div");
Benefitcol2.setAttribute("class","col-lg-8 rounded-2 text-center g-3");
Benefitrow.appendChild(Benefitcol2);

let Benefitcol2row=document.createElement("div");
Benefitcol2row.setAttribute("class","row d-flex justify-content-evenly container mb-5");
Benefitcol2.appendChild(Benefitcol2row);

// Benefitcol2rowcol1 start 
let Benefitcol2rowcol1=document.createElement("div");
Benefitcol2rowcol1.setAttribute("class","col-md-5 col-lg-3 border rounded-3 text-center mx-1 mb-2 color text-light");
Benefitcol2row.appendChild(Benefitcol2rowcol1);

let Benefitcol2rowcol1num=document.createElement("p");
Benefitcol2rowcol1num.setAttribute("class"," mb-0 fw-bold ");
Benefitcol2rowcol1.appendChild(Benefitcol2rowcol1num);
let Benefitcol2rowcol1numt=document.createTextNode("01");
Benefitcol2rowcol1num.appendChild(Benefitcol2rowcol1numt);

let Benefitcol2rowcol1h=document.createElement("p");
Benefitcol2rowcol1h.setAttribute("class","text-dark mb-0 fs-5 fw-bold");
Benefitcol2rowcol1.appendChild(Benefitcol2rowcol1h);
let Benefitcol2rowcol1ht=document.createTextNode("Safety and Security");
Benefitcol2rowcol1h.appendChild(Benefitcol2rowcol1ht);

let Benefitcol2rowcol1p=document.createElement("p");
Benefitcol2rowcol1p.setAttribute("class","text-dark mb-0");
Benefitcol2rowcol1.appendChild(Benefitcol2rowcol1p);
let Benefitcol2rowcol1pt=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.");
Benefitcol2rowcol1p.appendChild(Benefitcol2rowcol1pt);


// Benefitcol2rowcol2 start 
let Benefitcol2rowcol2=document.createElement("div");
Benefitcol2rowcol2.setAttribute("class","col-md-5 col-lg-3 border rounded-3  text-center mx-1 mb-2  color text-light");
Benefitcol2row.appendChild(Benefitcol2rowcol2);

let Benefitcol2rowcol2num=document.createElement("p");
Benefitcol2rowcol2num.setAttribute("class","text-center fw-bold mb-0");
Benefitcol2rowcol2.appendChild(Benefitcol2rowcol2num);
let Benefitcol2rowcol2numt=document.createTextNode("02");
Benefitcol2rowcol2num.appendChild(Benefitcol2rowcol2numt);

let Benefitcol2rowcol2h=document.createElement("p");
Benefitcol2rowcol2h.setAttribute("class","text-dark mb-0 fs-5 fw-bold");
Benefitcol2rowcol2.appendChild(Benefitcol2rowcol2h);
let Benefitcol2rowcol2ht=document.createTextNode("Safety and Security");
Benefitcol2rowcol2h.appendChild(Benefitcol2rowcol2ht);

let Benefitcol2rowcol2p=document.createElement("p");
Benefitcol2rowcol2p.setAttribute("class","text-dark mb-0");
Benefitcol2rowcol2.appendChild(Benefitcol2rowcol2p);
let Benefitcol2rowcol2pt=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.");
Benefitcol2rowcol2p.appendChild(Benefitcol2rowcol2pt);


// Benefitcol2rowcol3 start

let Benefitcol2rowcol3=document.createElement("div");
Benefitcol2rowcol3.setAttribute("class","col-md-5 col-lg-3 border rounded-3  text-center mx-1 mb-2  color text-light");
Benefitcol2row.appendChild(Benefitcol2rowcol3);

let Benefitcol2rowcol3num=document.createElement("p");
Benefitcol2rowcol3num.setAttribute("class"," text-center fw-bold mb-0");
Benefitcol2rowcol3.appendChild(Benefitcol2rowcol3num);
let Benefitcol2rowcol3numt=document.createTextNode("03");
Benefitcol2rowcol3num.appendChild(Benefitcol2rowcol3numt);

let Benefitcol2rowcol3h=document.createElement("p");
Benefitcol2rowcol3h.setAttribute("class","text-dark mb-0 fs-5 fw-bold");
Benefitcol2rowcol3.appendChild(Benefitcol2rowcol3h);
let Benefitcol2rowcol3ht=document.createTextNode("Safety and Security");
Benefitcol2rowcol3h.appendChild(Benefitcol2rowcol3ht);

let Benefitcol2rowcol3p=document.createElement("p");
Benefitcol2rowcol3p.setAttribute("class","text-dark mb-0");
Benefitcol2rowcol3.appendChild(Benefitcol2rowcol3p);
let Benefitcol2rowcol3pt=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.");
Benefitcol2rowcol3p.appendChild(Benefitcol2rowcol3pt);

// Benefitcol2rowcol4 start

let Benefitcol2rowcol4=document.createElement("div");
Benefitcol2rowcol4.setAttribute("class","col-md-5 col-lg-3 border rounded-3  text-center mx-1 mb-2  color text-light");
Benefitcol2row.appendChild(Benefitcol2rowcol4);

let Benefitcol2rowcol4num=document.createElement("p");
Benefitcol2rowcol4num.setAttribute("class"," text-center fw-bold mb-0");
Benefitcol2rowcol4.appendChild(Benefitcol2rowcol4num);
let Benefitcol2rowcol4numt=document.createTextNode("04");
Benefitcol2rowcol4num.appendChild(Benefitcol2rowcol4numt);

let Benefitcol2rowcol4h=document.createElement("p");
Benefitcol2rowcol4h.setAttribute("class"," text-dark mb-0 fs-5 fw-bold");
Benefitcol2rowcol4.appendChild(Benefitcol2rowcol4h);
let Benefitcol2rowcol4ht=document.createTextNode("Safety and Security");
Benefitcol2rowcol4h.appendChild(Benefitcol2rowcol4ht);

let Benefitcol2rowcol4p=document.createElement("p");
Benefitcol2rowcol4p.setAttribute("class","text-dark mb-0");
Benefitcol2rowcol4.appendChild(Benefitcol2rowcol4p);
let Benefitcol2rowcol4pt=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.");
Benefitcol2rowcol4p.appendChild(Benefitcol2rowcol4pt);

// Benefitcol2rowcol5 start

let Benefitcol2rowcol5=document.createElement("div");
Benefitcol2rowcol5.setAttribute("class","col-md-5 col-lg-3 border rounded-3  text-center mx-1 mb-2  color text-light");
Benefitcol2row.appendChild(Benefitcol2rowcol5);

let Benefitcol2rowcol5num=document.createElement("p");
Benefitcol2rowcol5num.setAttribute("class","text-center fw-bold mb-0");
Benefitcol2rowcol5.appendChild(Benefitcol2rowcol5num);
let Benefitcol2rowcol5numt=document.createTextNode("05");
Benefitcol2rowcol5num.appendChild(Benefitcol2rowcol5numt);

let Benefitcol2rowcol5h=document.createElement("p");
Benefitcol2rowcol5h.setAttribute("class","text-dark mb-0 fs-5 fw-bold ");
Benefitcol2rowcol5.appendChild(Benefitcol2rowcol5h);
let Benefitcol2rowcol5ht=document.createTextNode("Safety and Security");
Benefitcol2rowcol5h.appendChild(Benefitcol2rowcol5ht);

let Benefitcol2rowcol5p=document.createElement("p");
Benefitcol2rowcol5p.setAttribute("class","text-dark mb-0");
Benefitcol2rowcol5.appendChild(Benefitcol2rowcol5p);
let Benefitcol2rowcol5pt=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.");
Benefitcol2rowcol5p.appendChild(Benefitcol2rowcol5pt);

// Benefitcol2rowcol6 start

let Benefitcol2rowcol6=document.createElement("div");
Benefitcol2rowcol6.setAttribute("class","col-md-5 col-lg-3 border rounded-3  text-center mx-1 mb-2  color text-light");
Benefitcol2row.appendChild(Benefitcol2rowcol6);

let Benefitcol2rowcol6num=document.createElement("p");
Benefitcol2rowcol6num.setAttribute("class"," text-center fw-bold mb-0");
Benefitcol2rowcol6.appendChild(Benefitcol2rowcol6num);
let Benefitcol2rowcol6numt=document.createTextNode("06");
Benefitcol2rowcol6num.appendChild(Benefitcol2rowcol6numt);

let Benefitcol2rowcol6h=document.createElement("p");
Benefitcol2rowcol6h.setAttribute("class","text-dark mb-0 fs-5 fw-bold");
Benefitcol2rowcol6.appendChild(Benefitcol2rowcol6h);
let Benefitcol2rowcol6ht=document.createTextNode("Safety and Security");
Benefitcol2rowcol6h.appendChild(Benefitcol2rowcol6ht);

let Benefitcol2rowcol6p=document.createElement("p");
Benefitcol2rowcol6p.setAttribute("class","text-dark mb-0");
Benefitcol2rowcol6.appendChild(Benefitcol2rowcol6p);
let Benefitcol2rowcol6pt=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.");
Benefitcol2rowcol6p.appendChild(Benefitcol2rowcol6pt);



// section 5 start

let nummain=document.createElement("div");
nummain.setAttribute("class","container-fluid nummain-img ");
main.appendChild(nummain);

let nummaincon=document.createElement("div");
nummaincon.setAttribute("class","container ");
nummain.appendChild(nummaincon);

let numrow=document.createElement("div");
numrow.setAttribute("class","row align-items-center justify-content-evenly py-3 ");
nummaincon.appendChild(numrow);

// icon 1 start 
let numcol1=document.createElement("div");
numcol1.setAttribute("class","col-md-3 text-center mt-4 mb-4 ");
numrow.appendChild(numcol1);

let numcol1p=document.createElement("p");
numcol1p.setAttribute("class","icon fa-solid fa-id-card text-light fs-4 fw-bold");
numcol1.appendChild(numcol1p);

let numcol1p2=document.createElement("p");
numcol1p2.setAttribute("class","text-light fs-4 fw-bold");
let numcolp2text=document.createTextNode("89");
numcol1.appendChild(numcol1p2);
numcol1p2.appendChild(numcolp2text);

let numcol1p3=document.createElement("p");
numcol1p3.setAttribute("class","text-light");
let numcolp3text=document.createTextNode("Professional Pilots");
numcol1.appendChild(numcol1p3);
numcol1p3.appendChild(numcolp3text);

// icon 2 start 
let numcol2=document.createElement("div");
numcol2.setAttribute("class","col-md-3 text-center mt-4 mb-4");
numrow.appendChild(numcol2);

let numcol2p=document.createElement("p");
numcol2p.setAttribute("class","icon fa-solid fa-earth-americas text-light fs-4 fw-bold");
numcol2.appendChild(numcol2p);

let numcol2p2=document.createElement("p");
numcol2p2.setAttribute("class","text-light fs-4 fw-bold");
let numcol2p2text=document.createTextNode("269");
numcol2.appendChild(numcol2p2);
numcol2p2.appendChild(numcol2p2text);

let numcol2p3=document.createElement("p");
numcol2p3.setAttribute("class","text-light");
let numcol2p3text=document.createTextNode("World Airports");
numcol2.appendChild(numcol2p3);
numcol2p3.appendChild(numcol2p3text);

// icon 3 start 

let numcol3=document.createElement("div");
numcol3.setAttribute("class","col-md-3 text-center mt-4 mb-4");
numrow.appendChild(numcol3);

let numcol3p=document.createElement("p");
numcol3p.setAttribute("class","icon fa-regular fa-paper-plane text-light fs-4 fw-bold");
numcol3.appendChild(numcol3p);

let numcol3p2=document.createElement("p");
numcol3p2.setAttribute("class","text-light fs-4 fw-bold");
let numcol3p2text=document.createTextNode("589");
numcol3.appendChild(numcol3p2);
numcol3p2.appendChild(numcol3p2text);

let numcol3p3=document.createElement("p");
numcol3p3.setAttribute("class","text-light");
let numcol3p3text=document.createTextNode("Jet Airplanes");
numcol3.appendChild(numcol3p3);
numcol3p3.appendChild(numcol3p3text);


// icon 4 start 

let numcol4=document.createElement("div");
numcol4.setAttribute("class","col-md-3 text-center mt-4 mb-4");
numrow.appendChild(numcol4);

let numcol4p=document.createElement("p");
numcol4p.setAttribute("class","icon fa-solid fa-map-location text-light fs-4 fw-bold");
numcol4.appendChild(numcol4p);

let numcol4p2=document.createElement("p");
numcol4p2.setAttribute("class","text-light fs-4 fw-bold");
let numcol4p2text=document.createTextNode("126");
numcol4.appendChild(numcol4p2);
numcol4p2.appendChild(numcol4p2text);

let numcol4p3=document.createElement("p");
numcol4p3.setAttribute("class","text-light");
let numcol4p3text=document.createTextNode("Directions");
numcol4.appendChild(numcol4p3);
numcol4p3.appendChild(numcol4p3text);

// section 5 end 

// section 5.1  start 

let section5=document.createElement("div");
section5.setAttribute("class","container-fluid");
main.appendChild(section5);

let section5row=document.createElement("div");
section5row.setAttribute("class","row mt-3");
section5.appendChild(section5row);

let section5col1=document.createElement("div");
section5col1.setAttribute("class","col-12 text-center");
section5row.appendChild(section5col1);

let section5col1p=document.createElement("p");
section5col1p.setAttribute("class","color-icon");
section5col1.appendChild(section5col1p);
section5col1ptext=document.createTextNode("OUR LUXURY CHARTER");
section5col1p.appendChild(section5col1ptext);

let section5col1h=document.createElement("h3");
section5col1h.setAttribute("class","text-dark fw-bold");
section5col1.appendChild(section5col1h);
section5col1htext=document.createTextNode("We Provide Luxury Deals for You");
section5col1h.appendChild(section5col1htext);

let section5col1p2=document.createElement("p");
section5col1p2.setAttribute("class","text-dark");
section5col1.appendChild(section5col1p2);
section5col1p2text=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
section5col1p2.appendChild(section5col1p2text);



let section5col2=document.createElement("div");
section5col2.setAttribute("class","col-12");
section5row.appendChild(section5col2);

let section5col2row=document.createElement("div");
section5col2row.setAttribute("class","row container justify-content-evenly");
section5col2.appendChild(section5col2row);

// section5col2col1 start 
let section5col2col1=document.createElement("div");
section5col2col1.setAttribute("class","col-md-10 col-lg-3 section5col2col1  rounded-3 mb-3");
section5col2row.appendChild(section5col2col1);

let section5col2col1h=document.createElement("h2");
section5col2col1h.setAttribute("class","text-light mt-3 p-2");
section5col2col1.appendChild(section5col2col1h);
let section5col2col1htext=document.createTextNode("Airbus A380- All Surya");
section5col2col1h.appendChild(section5col2col1htext);


let section5col2col1p=document.createElement("p");
section5col2col1p.setAttribute("class","color-icon mt-3 p-2");
section5col2col1.appendChild(section5col2col1p);
let section5col2col1ptext=document.createTextNode("Nomaden 900");
section5col2col1p.appendChild(section5col2col1ptext);

let section5col2col1p2=document.createElement("p");
section5col2col1p2.setAttribute("class","text-light mt-3 p-2");
section5col2col1.appendChild(section5col2col1p2);
let section5col2col1p2text=document.createTextNode("5 - 16 Seats");
section5col2col1p2.appendChild(section5col2col1p2text);

let section5col2col1p3=document.createElement("p");
section5col2col1p3.setAttribute("class","text-light fw-bold fs-5 mt-3 p-2");
section5col2col1.appendChild(section5col2col1p3);
let section5col2col1p3text=document.createTextNode("Price: $10,000/ hr");
section5col2col1p3.appendChild(section5col2col1p3text);


// section5col2col2 start 

let section5col2col2=document.createElement("div");
section5col2col2.setAttribute("class","col-md-10 col-lg-3 section5col2col1 text-center rounded-3 mb-3");
section5col2row.appendChild(section5col2col2);

let section5col2col2h=document.createElement("h2");
section5col2col2h.setAttribute("class","text-light mt-3 p-2");
section5col2col2.appendChild(section5col2col2h);
let section5col2col2htext=document.createTextNode("Boeing 747-8 VIP - All Surya");
section5col2col2h.appendChild(section5col2col2htext);


let section5col2col2p=document.createElement("p");
section5col2col2p.setAttribute("class","color-icon mt-3 p-2");
section5col2col2.appendChild(section5col2col2p);
let section5col2col2ptext=document.createTextNode("Nomaden 900");
section5col2col2p.appendChild(section5col2col2ptext);

let section5col2col2p2=document.createElement("p");
section5col2col2p2.setAttribute("class","text-light mt-3 p-2");
section5col2col2.appendChild(section5col2col2p2);
let section5col2col2p2text=document.createTextNode("5 - 10 Seats");
section5col2col2p2.appendChild(section5col2col2p2text);

let section5col2col2p3=document.createElement("p");
section5col2col2p3.setAttribute("class","text-light fw-bold fs-5 mt-3 p-2");
section5col2col2.appendChild(section5col2col2p3);
let section5col2col2p3text=document.createTextNode("Price: $15,000/ hr");
section5col2col2p3.appendChild(section5col2col2p3text);

// section5col2col3 start 

let section5col2col3=document.createElement("div");
section5col2col3.setAttribute("class","col-md-10 col-lg-3 section5col2col1 text-center rounded-3 mb-3");
section5col2row.appendChild(section5col2col3);

let section5col2col3h=document.createElement("h2");
section5col2col3h.setAttribute("class","text-light mt-3 p-2");
section5col2col3.appendChild(section5col2col3h);
let section5col2col3htext=document.createTextNode("Boeing 767-33A - All Surya");
section5col2col3h.appendChild(section5col2col3htext);


let section5col2col3p=document.createElement("p");
section5col2col3p.setAttribute("class","color-icon mt-3 p-2");
section5col2col3.appendChild(section5col2col3p);
let section5col2col3ptext=document.createTextNode("Nomaden 900");
section5col2col3p.appendChild(section5col2col3ptext);

let section5col2col3p2=document.createElement("p");
section5col2col3p2.setAttribute("class","text-light mt-3 p-2");
section5col2col3.appendChild(section5col2col3p2);
let section5col2col3p2text=document.createTextNode("15 - 20 Seats");
section5col2col3p2.appendChild(section5col2col3p2text);

let section5col2col3p3=document.createElement("p");
section5col2col3p3.setAttribute("class","text-light fw-bold fs-5 mt-3 p-2");
section5col2col3.appendChild(section5col2col3p3);
let section5col2col3p3text=document.createTextNode("Price: $25,000/ hr");
section5col2col3p3.appendChild(section5col2col3p3text);

// section 5.1 end 

// section 6 start 
let section6=document.createElement("div");
section6.setAttribute("class","section6-img container-fluid");
main.appendChild(section6);

let section6con=document.createElement("div");
section6con.setAttribute("class","container");
section6.appendChild(section6con);

let section6row=document.createElement("div");
section6row.setAttribute("class","row");
section6con.appendChild(section6row);

// col1 start 
let section6col1=document.createElement("div");
section6col1.setAttribute("class","col-lg-4 mt-5 mb-5 rounded-2 text-center");
section6row.appendChild(section6col1);

let section6col1p=document.createElement("p");
section6col1p.setAttribute("class","color-icon");
section6col1.appendChild(section6col1p);
let section6col1ptext=document.createTextNode("TESTIMONIALS");
section6col1p.appendChild(section6col1ptext);

let section6col1h=document.createElement("h3");
section6col1h.setAttribute("class","text-light fw-bold");
section6col1.appendChild(section6col1h);
let section6col1htext=document.createTextNode("What Client Says About Flights");
section6col1h.appendChild(section6col1htext);

let section6col1p2=document.createElement("p");
section6col1p2.setAttribute("class","text-light");
section6col1.appendChild(section6col1p2);
let section6col1p2text=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?");
section6col1p2.appendChild(section6col1p2text);

let section6col1b=document.createElement("button");
section6col1b.setAttribute("class","color-icon btn btn-outline-warning m-auto d-block ");
section6col1.appendChild(section6col1b);
let section6col1btext=document.createTextNode("VIEW TESTIMONIALS");
section6col1b.appendChild(section6col1btext);

// col2 start 
let section6col2=document.createElement("div");
section6col2.setAttribute("class","col-lg-7 rounded-2 text-center mt-5");
section6row.appendChild(section6col2);

let col2carousel=document.createElement("div");
col2carousel.setAttribute("class", "carousel slide pointer-event");
col2carousel.setAttribute("data-bs-ride", "carousel");
col2carousel.setAttribute("id", "carouselcontrol");
section6col2.appendChild(col2carousel);

let carouselinner=document.createElement("div");
carouselinner.setAttribute("class","carousel-inner s7_inner")
col2carousel.appendChild(carouselinner);

//   carousel -item -1 start
let carouselitem1=document.createElement("div");
carouselitem1.setAttribute("class","carousel-item text-center active")
carouselinner.appendChild(carouselitem1);

let carouselitem1p=document.createElement("p");
carouselitem1p.setAttribute("class","text-light mx-auto  w-75");
carouselitem1.appendChild(carouselitem1p);

let carouselitem1picon=document.createElement("i");
carouselitem1picon.setAttribute("class","icon fa-solid fa-quote-left fs-5 color-icon ");
carouselitem1p.appendChild(carouselitem1picon);

let carouselitem1ptext=document.createTextNode("Nam antimperdiet ex. Sed eget eros suscipit erat condimentum vehicula et egestas nisi. Phasellus pulvinar cursus sem, non placerat nulla elementum eu. Aenean fermentum sem sed gravida tincidunt. Morbi vitae lacus mi. Proin arcu augue, euismod sodales molestie ac, varius e erat, aliquam eget enim sed")
carouselitem1p.appendChild(carouselitem1ptext);

let carouselitem1div=document.createElement("div");
carouselitem1div.setAttribute("class","  w-75 mx-auto");
carouselitem1.appendChild(carouselitem1div);

let carouselitem1f=document.createElement("figure");
carouselitem1f.setAttribute("class","w-50 mx-auto");
carouselitem1div.appendChild(carouselitem1f);

let carouselitem1fimg=document.createElement("img");
carouselitem1fimg.setAttribute("src","img/t1.jpg");
carouselitem1fimg.setAttribute("class","w-25 mx-auto");
carouselitem1f.appendChild(carouselitem1fimg);

let carouselitem1fcaption=document.createElement("figcaption");
carouselitem1fcaption.setAttribute("class","pt-3");
carouselitem1f.appendChild(carouselitem1fcaption);

let carouselitem1fcaptionp=document.createElement("p");
carouselitem1fcaptionp.setAttribute("class","fw-light text-light mb-0");
carouselitem1fcaption.appendChild(carouselitem1fcaptionp);
let carouselitem1fcaptionptext=document.createTextNode("colt porter");
carouselitem1fcaptionp.appendChild(carouselitem1fcaptionptext);

let carouselitem1fcaptionp2=document.createElement("p");
carouselitem1fcaptionp2.setAttribute("class","fw-light mb-0 color-icon");
carouselitem1fcaption.appendChild(carouselitem1fcaptionp2);
let carouselitem1fcaptionp2text=document.createTextNode("desination");
carouselitem1fcaptionp2.appendChild(carouselitem1fcaptionp2text);

//   carousel -item -1 end

//   carousel -item -2 start

let carouselitem2=document.createElement("div");
carouselitem2.setAttribute("class","carousel-item text-center ")
carouselinner.appendChild(carouselitem2);

let carouselitem2p=document.createElement("p");
carouselitem2p.setAttribute("class","text-light mx-auto w-75");
carouselitem2.appendChild(carouselitem2p);

let carouselitem2picon=document.createElement("i");
carouselitem2picon.setAttribute("class","icon fa-solid fa-quote-left fs-5 color-icon");
carouselitem2p.appendChild(carouselitem2picon);

let carouselitem2ptext=document.createTextNode("Nam antimperdiet ex. Sed eget eros suscipit erat condimentum vehicula et egestas nisi. Phasellus pulvinar cursus sem, non placerat nulla elementum eu. Aenean fermentum sem sed gravida tincidunt. Morbi vitae lacus mi. Proin arcu augue, euismod sodales molestie ac, varius e erat, aliquam eget enim sed")
carouselitem2p.appendChild(carouselitem2ptext);

let carouselitem2div=document.createElement("div");
carouselitem2div.setAttribute("class","w-75 mx-auto f7_figdiv");
carouselitem2.appendChild(carouselitem2div);

let carouselitem2f=document.createElement("figure");
carouselitem2f.setAttribute("class","w-50 mx-auto");
carouselitem2div.appendChild(carouselitem2f);

let carouselitem2fimg=document.createElement("img");
carouselitem2fimg.setAttribute("src","img/t2.jpg");
carouselitem2fimg.setAttribute("class","w-25 mx-auto");
carouselitem2f.appendChild(carouselitem2fimg);

let carouselitem2fcaption=document.createElement("figcaption");
carouselitem2fcaption.setAttribute("class","pt-3");
carouselitem2f.appendChild(carouselitem2fcaption);

let carouselitem2fcaptionp=document.createElement("p");
carouselitem2fcaptionp.setAttribute("class","fw-light text-light mb-0");
carouselitem2fcaption.appendChild(carouselitem2fcaptionp);
let carouselitem2fcaptionptext=document.createTextNode("colt porter");
carouselitem2fcaptionp.appendChild(carouselitem2fcaptionptext);

let carouselitem2fcaptionp2=document.createElement("p");
carouselitem2fcaptionp2.setAttribute("class","fw-light mb-0 color-icon");
carouselitem2fcaption.appendChild(carouselitem2fcaptionp2);
let carouselitem2fcaptionp2text=document.createTextNode("desination");
carouselitem2fcaptionp2.appendChild(carouselitem2fcaptionp2text);

//   carousel -item -2 end

//   carousel -item -3 start

let carouselitem3=document.createElement("div");
carouselitem3.setAttribute("class","carousel-item text-center ")
carouselinner.appendChild(carouselitem3);

let carouselitem3p=document.createElement("p");
carouselitem3p.setAttribute("class","text-light mx-auto w-75");
carouselitem3.appendChild(carouselitem3p);

let carouselitem3picon=document.createElement("i");
carouselitem3picon.setAttribute("class","icon fa-solid fa-quote-left fs-5 color-icon");
carouselitem3p.appendChild(carouselitem3picon);

let carouselitem3ptext=document.createTextNode("Nam antimperdiet ex. Sed eget eros suscipit erat condimentum vehicula et egestas nisi. Phasellus pulvinar cursus sem, non placerat nulla elementum eu. Aenean fermentum sem sed gravida tincidunt. Morbi vitae lacus mi. Proin arcu augue, euismod sodales molestie ac, varius e erat, aliquam eget enim sed")
carouselitem3p.appendChild(carouselitem3ptext);

let carouselitem3div=document.createElement("div");
carouselitem3div.setAttribute("class","w-75 mx-auto f7_figdiv");
carouselitem3.appendChild(carouselitem3div);

let carouselitem3f=document.createElement("figure");
carouselitem3f.setAttribute("class","w-50 mx-auto");
carouselitem3div.appendChild(carouselitem3f);

let carouselitem3fimg=document.createElement("img");
carouselitem3fimg.setAttribute("src","img/t3.jpg");
carouselitem3fimg.setAttribute("class","w-25 mx-auto");
carouselitem3f.appendChild(carouselitem3fimg);

let carouselitem3fcaption=document.createElement("figcaption");
carouselitem3fcaption.setAttribute("class","pt-3");
carouselitem3f.appendChild(carouselitem3fcaption);

let carouselitem3fcaptionp=document.createElement("p");
carouselitem3fcaptionp.setAttribute("class","fw-light text-light mb-0");
carouselitem3fcaption.appendChild(carouselitem3fcaptionp);
let carouselitem3fcaptionptext=document.createTextNode("colt porter");
carouselitem3fcaptionp.appendChild(carouselitem3fcaptionptext);

let carouselitem3fcaptionp2=document.createElement("p");
carouselitem3fcaptionp2.setAttribute("class","fw-light mb-0 color-icon");
carouselitem3fcaption.appendChild(carouselitem3fcaptionp2);
let carouselitem3fcaptionp2text=document.createTextNode("desination");
carouselitem3fcaptionp2.appendChild(carouselitem3fcaptionp2text);

//   carousel- button - 1 start

let carouselbtn1=document.createElement("button");
carouselbtn1.setAttribute("class","carousel-control-prev btn");
carouselbtn1.setAttribute("type"," button");
carouselbtn1.setAttribute("data-bs-target"," #carouselcontrol");
carouselbtn1.setAttribute("data-bs-slide","prev");
col2carousel.appendChild(carouselbtn1);

let carouselbtn1icon=document.createElement("i");
carouselbtn1icon.setAttribute("class","icon fa-solid fa-angles-left fs-2 color");
carouselbtn1.appendChild(carouselbtn1icon);


//   carousel- button - 2 start

let carouselbtn2=document.createElement("button");
carouselbtn2.setAttribute("class","carousel-control-next btn");
carouselbtn2.setAttribute("type"," button");
carouselbtn2.setAttribute("data-bs-target"," #carouselcontrol");
carouselbtn2.setAttribute("data-bs-slide","next");
col2carousel.appendChild(carouselbtn2);

let carouselbtn2icon=document.createElement("i");
carouselbtn2icon.setAttribute("class","icon fa-solid fa-angles-right fs-2 color");
carouselbtn2.appendChild(carouselbtn2icon);

// section 6 end 

// section 7 start 

let section7=document.createElement("div");
section7.setAttribute("class","container-fluid");
main.appendChild(section7);

let section7con=document.createElement("div");
section7con.setAttribute("class","container");
section7.appendChild(section7con);

let section7row=document.createElement("div");
section7row.setAttribute("class","row");
section7con.appendChild(section7row);

let section7col1=document.createElement("div");
section7col1.setAttribute("class","col-lg-4 mt-5");
section7row.appendChild(section7col1);


let section7col1p=document.createElement("p");
section7col1p.setAttribute("class","color-icon ")
let section7col1ptext=document.createTextNode("OUR SERVICES");
section7col1p.appendChild(section7col1ptext);
section7col1.appendChild(section7col1p);

let section7col1h=document.createElement("h2");
section7col1h.setAttribute("class","text-dark");
let section7col1htext=document.createTextNode("We Have Best")
section7col1h.appendChild(section7col1htext);
section7col1.appendChild(section7col1h);

let section7col1hspan=document.createElement("span");
section7col1hspan.setAttribute("class","h2 fw-bold display-4 color-icon ms-3");
let section7col1hspantext=document.createTextNode("Luxury Services");
section7col1hspan.appendChild(section7col1hspantext);
section7col1h.appendChild(section7col1hspan);

let section7col1hmin=document.createTextNode(" For You");
section7col1h.appendChild(section7col1hmin);

let section7col1p2=document.createElement("p");
section7col1p2.setAttribute("class","text-dark mt-2");
let section7col1p2text=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?")
section7col1p2.appendChild(section7col1p2text);
section7col1.appendChild(section7col1p2);

let section7col1btn=document.createElement("button");
section7col1btn.setAttribute("class","btn btn-outline-warning color-icon m-auto d-block");
let section7col1btnt=document.createTextNode("VIEW SERVICES");
section7col1btn.appendChild(section7col1btnt);
section7col1.appendChild(ourtext3);

let section7col2=document.createElement("div");
section7col2.setAttribute("class","col-lg-8 mt-5 mb-3");
section7row.appendChild(section7col2);

let section7col2row=document.createElement("div");
section7col2row.setAttribute("class","row mt-3 justify-content-evenly");
section7col2.appendChild(section7col2row);

let section7col2rowcol1=document.createElement("div");
section7col2rowcol1.setAttribute("class","col-md-5 text-center section7-img1 rounded-2 text-light mb-3 ");
section7col2row.appendChild(section7col2rowcol1);


let section7col2rowcol1h=document.createElement("h3");
section7col2rowcol1h.setAttribute("class","fw-bold mt-3")
section7col2rowcol1.appendChild(section7col2rowcol1h);
let section7col2rowcol1htext=document.createTextNode("Modern glamour in Boston ")
section7col2rowcol1h.appendChild(section7col2rowcol1htext);

let section7col2rowcol1p=document.createElement("p");
section7col2rowcol1p.setAttribute("class","fw-bold mt-2");
section7col2rowcol1.appendChild(section7col2rowcol1p);

let section7col2rowcol1ptext=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit.")
section7col2rowcol1p.appendChild(section7col2rowcol1ptext);

let section7col2rowcol1i1=document.createElement("i")
section7col2rowcol1i1.setAttribute("class","icon fa-regular fa-circle-check color-icon fs-3");
section7col2rowcol1.appendChild(section7col2rowcol1i1);

let section7col2rowcol1i1p=document.createElement("p");
section7col2rowcol1i1p.setAttribute("class","mt-2 text-light")
let section7col2rowcol1i1pt=document.createTextNode("Nulla at  maximus leo non molestie diam.");
section7col2rowcol1i1p.appendChild(section7col2rowcol1i1pt);
section7col2rowcol1.appendChild(section7col2rowcol1i1p);

let section7col2rowcol1i2=document.createElement("i")
section7col2rowcol1i2.setAttribute("class","icon fa-regular fa-circle-check color-icon fs-3");
section7col2rowcol1.appendChild(section7col2rowcol1i2);

let section7col2rowcol1i2p=document.createElement("p");
section7col2rowcol1i2p.setAttribute("class","mt-2 text-light")
let section7col2rowcol1i2pt=document.createTextNode("Suspendisse auctor felis ipsum.");
section7col2rowcol1i2p.appendChild(section7col2rowcol1i2pt);
section7col2rowcol1.appendChild(section7col2rowcol1i2p);


let section7col2rowcol1i3=document.createElement("i")
section7col2rowcol1i3.setAttribute("class","icon fa-regular fa-circle-check color-icon fs-3");
section7col2rowcol1.appendChild(section7col2rowcol1i3);

let section7col2rowcol1i3p=document.createElement("p");
section7col2rowcol1i3p.setAttribute("class","mt-2 text-light")
let section7col2rowcol1i3pt=document.createTextNode("Suspendisse auctor felis ipsum.");
section7col2rowcol1i3p.appendChild(section7col2rowcol1i3pt);
section7col2rowcol1.appendChild(section7col2rowcol1i3p);





let section7col2rowcol2=document.createElement("div");
section7col2rowcol2.setAttribute("class","col-md-5 text-center section7-img1 rounded-2 text-light mb-3");
section7col2row.appendChild(section7col2rowcol2);


let section7col2rowcol2h=document.createElement("h3");
section7col2rowcol2h.setAttribute("class","fw-bold mt-3")
section7col2rowcol2.appendChild(section7col2rowcol2h);
let section7col2rowcol2htext=document.createTextNode("Modern glamour in Boston ")
section7col2rowcol2h.appendChild(section7col2rowcol2htext);

let section7col2rowcol2p=document.createElement("p");
section7col2rowcol2p.setAttribute("class","fw-bold mt-2");
section7col2rowcol2.appendChild(section7col2rowcol2p);

let section7col2rowcol2ptext=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit.")
section7col2rowcol2p.appendChild(section7col2rowcol2ptext);

let section7col2rowcol2i1=document.createElement("i")
section7col2rowcol2i1.setAttribute("class","icon fa-regular fa-circle-check color-icon fs-3");
section7col2rowcol2.appendChild(section7col2rowcol2i1);

let section7col2rowcol2i1p=document.createElement("p");
section7col2rowcol2i1p.setAttribute("class","mt-2 text-light")
let section7col2rowcol2i1pt=document.createTextNode("Nulla at  maximus leo non molestie diam.");
section7col2rowcol2i1p.appendChild(section7col2rowcol2i1pt);
section7col2rowcol2.appendChild(section7col2rowcol2i1p);

let section7col2rowcol2i2=document.createElement("i")
section7col2rowcol2i2.setAttribute("class","icon fa-regular fa-circle-check color-icon fs-3");
section7col2rowcol2.appendChild(section7col2rowcol2i2);

let section7col2rowcol2i2p=document.createElement("p");
section7col2rowcol2i2p.setAttribute("class","mt-2 text-light")
let section7col2rowcol2i2pt=document.createTextNode("Suspendisse auctor felis ipsum.");
section7col2rowcol2i2p.appendChild(section7col2rowcol2i2pt);
section7col2rowcol2.appendChild(section7col2rowcol2i2p);


let section7col2rowcol2i3=document.createElement("i")
section7col2rowcol2i3.setAttribute("class","icon fa-regular fa-circle-check color-icon fs-3");
section7col2rowcol2.appendChild(section7col2rowcol2i3);

let section7col2rowcol2i3p=document.createElement("p");
section7col2rowcol2i3p.setAttribute("class","mt-2 text-light")
let section7col2rowcol2i3pt=document.createTextNode("Suspendisse auctor felis ipsum.");
section7col2rowcol2i3p.appendChild(section7col2rowcol2i3pt);
section7col2rowcol2.appendChild(section7col2rowcol2i3p);

// section 7 end 

// section 8 start 
let section8=document.createElement("div");
section8.setAttribute("class","container-fluid section8-img");
main.appendChild(section8);

let section8con=document.createElement("div");
section8con.setAttribute("class","container");
section8.appendChild(section8con);

let section8row=document.createElement("div");
section8row.setAttribute("class","row justify-content-center mt-5 ");
section8con.appendChild(section8row);

let section8col=document.createElement("div");
section8col.setAttribute("class","col-10 mt-5 text-light mb-3");
section8row.appendChild(section8col);

let section8h=document.createElement("h2");
section8h.setAttribute("class"," text-center mt-3");
section8col.appendChild(section8h);
let section8htext=document.createTextNode("Tell us your requirements and one of our charter experts will send you a quote.")
section8h.appendChild(section8htext);

let section8p=document.createElement("p");
section8p.setAttribute("class","mt-4");
section8col.appendChild(section8p);
let section8ptext=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?")
section8p.appendChild(section8ptext);

let section8btn=document.createElement("button");
section8btn.setAttribute("class","btn btn-outline-warning m-auto d-block mt-5");
section8col.appendChild(section8btn);
let section8btntext=document.createTextNode("ENQUIRE NOW");
section8btn.appendChild(section8btntext);

// section 8 end 

// section 9 start 
let section9=document.createElement("div");
section9.setAttribute("class","container-fluid section9-img");
main.appendChild(section9);

let section9con=document.createElement("div");
section9con.setAttribute("class","container");
section9.appendChild(section9con);

let section9row=document.createElement("div");
section9row.setAttribute("class","row ");
section9con.appendChild(section9row);

let section9col1=document.createElement("div");
section9col1.setAttribute("class","col-md-4 mb-4 ");
section9row.appendChild(section9col1);

let section9col1img=document.createElement("img");
section9col1img.setAttribute("src","img/Logo1.png");
section9col1.appendChild(section9col1img);


let section9col2=document.createElement("div");
section9col2.setAttribute("class","col-md-8 mb-4");
section9row.appendChild(section9col2);

let section9col2ul=document.createElement("ul");
section9col2ul.setAttribute("class","d-flex justify-content-evenly text-light list-unstyled mt-3")

let arr=["Home","Packages","Serivces","About Us","Contact"];

for(let i=0;i<arr.length;i++){
 
let il=document.createElement("li");
il.innerText=arr[i];
section9col2ul.appendChild(il);

}
section9col2.appendChild(section9col2ul);

let section9col2btn=document.createElement("button");
section9col2btn.setAttribute("class","btn btn-outline-warning m-auto d-block mt-5");
section9col2.appendChild(section9col2btn);
let section9col2btnt=document.createTextNode("BOOK TICKET");
section9col2btn.appendChild(section9col2btnt);

let section9col2inputdiv=document.createElement("div");
section9col2inputdiv.setAttribute("class","w-50 m-auto d-block")
section9col2.appendChild(section9col2inputdiv);

let section9col2input=document.createElement("input");
section9col2input.setAttribute("type","email");
section9col2input.setAttribute("placeholder","Enter Your Email");
section9col2input.setAttribute("class","form-control mt-3 bg-transparent input");
section9col2inputdiv.appendChild(section9col2input);

let section9col2btn2=document.createElement("button");
section9col2btn2.setAttribute("class","form-control mt-3 color");
section9col2inputdiv.appendChild(section9col2btn2);
let section9col2btn2t=document.createTextNode("SUBSCRIBE");
section9col2btn2.appendChild(section9col2btn2t);


section9col2btn.addEventListener("click",generateTicket)
function generateTicket(){
    window.location="ticket.html"
}

navcollapsebtn.addEventListener("click",generateTicket1)
function generateTicket1(){
    window.location="ticket.html"
}



































