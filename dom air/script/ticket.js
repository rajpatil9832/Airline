let ticket= document.getElementById("ticket");

let ticketmain=document.createElement("div");
ticketmain.setAttribute("class","container-fluid px-5 ticket-img");
ticket.appendChild(ticketmain);

let ticketcon=document.createElement("div");
ticketcon.setAttribute("class","container");
ticketmain.appendChild(ticketcon);

let ticketrow=document.createElement("div");
ticketrow.setAttribute("class","row justify-content-center container border-bottom border-4");
ticketcon.appendChild(ticketrow);

let ticketcol1=document.createElement("div");
ticketcol1.setAttribute("class"," d-none d-md-block col-md-6");
ticketrow.appendChild(ticketcol1);

let ticketcol1logo=document.createElement("img");
ticketcol1logo.setAttribute("src","img/Logo1.png");
ticketcol1logo.setAttribute("class","w-25 ")

ticketcol1.appendChild(ticketcol1logo);

let ticketcol2=document.createElement("div");
ticketcol2.setAttribute("class","col-md-6");
ticketrow.appendChild(ticketcol2);

let ticketcol2p=document.createElement("h2");
ticketcol2p.setAttribute("class","text-center mt-5");
ticketcol2.appendChild(ticketcol2p);
let ticketcol2text=document.createTextNode("FILL THE DETAILS");
ticketcol2p.appendChild(ticketcol2text);


// input section 

let form=document.createElement("form");
form.setAttribute("class","form-img")
ticketcon.appendChild(form);

let formrow=document.createElement("div");
formrow.setAttribute("class","row");
form.appendChild(formrow);

let formcol1=document.createElement("div");
formcol1.setAttribute("class","col-md-6 p-0 mt-2");
formrow.appendChild(formcol1);

let firstnamelabel=document.createElement("label");
firstnamelabel.setAttribute("class","fw-bold");
let firstnamelabeltext=document.createTextNode("FIRST NAME");
formcol1.appendChild(firstnamelabel)
firstnamelabel.appendChild(firstnamelabeltext);

let firstnameinput=document.createElement("input");
firstnameinput.setAttribute("type","text");
firstnameinput.setAttribute("placeholder","ENTER YOUR FRIST NAME");
firstnameinput.setAttribute("class","form-control");
firstnameinput.setAttribute("id","userfname");
firstnameinput.setAttribute("required","");
formcol1.appendChild(firstnameinput);



let formcol2=document.createElement("div");
formcol2.setAttribute("class","col-md-6 mt-2");
formrow.appendChild(formcol2);

let lastnamelabel=document.createElement("label");
lastnamelabel.setAttribute("class","fw-bold");
let lastnamelabeltext=document.createTextNode("LAST NAME");
formcol2.appendChild(lastnamelabel)
lastnamelabel.appendChild(lastnamelabeltext);

let lastnameinput=document.createElement("input");
lastnameinput.setAttribute("type","text");
lastnameinput.setAttribute("placeholder","ENTER YOUR LAST NAME");
lastnameinput.setAttribute("class","form-control");
lastnameinput.setAttribute("id","userlname");
lastnameinput.setAttribute("required","");
formcol2.appendChild(lastnameinput);


let formcol3=document.createElement("div");
formcol3.setAttribute("class","col-md-6 p-0 mt-2");
formrow.appendChild(formcol3);

let selectlabel=document.createElement("label");
selectlabel.setAttribute("class","fw-bold");
let selectlabeltext=document.createTextNode("SELECT FLIGHT");
formcol3.appendChild(selectlabel)
selectlabel.appendChild(selectlabeltext);

let selectinput=document.createElement("select");
selectinput.setAttribute("class","form-control");
selectinput.setAttribute("id","users1name");
selectinput.setAttribute("required","");
formcol3.appendChild(selectinput);

let arr3=["SELECT YOUR FLIGHT","FA01","FA02","FA03","FA04"];
for(let i=0;i<arr3.length;i++){
    let option=document.createElement("option");
    option.innerHTML=arr3[i];

    selectinput.appendChild(option);
}



let formcol4=document.createElement("div");
formcol4.setAttribute("class","col-md-6 mt-2");
formrow.appendChild(formcol4);

let agelabel=document.createElement("label");
agelabel.setAttribute("class","fw-bold");
let agelabeltext=document.createTextNode("AGE NAME");
formcol4.appendChild(agelabel)
agelabel.appendChild(agelabeltext);

let ageinput=document.createElement("input");
ageinput.setAttribute("type","number");
ageinput.setAttribute("placeholder","ENTER YOUR AGE");
ageinput.setAttribute("class","form-control");
ageinput.setAttribute("id","userAname");
ageinput.setAttribute("required","");
formcol4.appendChild(ageinput);


let formcol5=document.createElement("div");
formcol5.setAttribute("class","col-md-6 p-0 mt-2");
formrow.appendChild(formcol5);

let datelabel=document.createElement("label");
datelabel.setAttribute("class","fw-bold");
let datelabeltext=document.createTextNode("TRAVEL DATE");
formcol5.appendChild(datelabel)
datelabel.appendChild(datelabeltext);

let dateinput=document.createElement("input");
dateinput.setAttribute("type","date");
dateinput.setAttribute("placeholder","ENTER YOUR AGE");
dateinput.setAttribute("class","form-control");
dateinput.setAttribute("id","userDname");
dateinput.setAttribute("required","");
formcol5.appendChild(dateinput);

let formcol6=document.createElement("div");
formcol6.setAttribute("class","col-md-6 mt-2 ");
formrow.appendChild(formcol6);



let formcol7=document.createElement("div");
formcol7.setAttribute("class","col-md-6 p-0 mt-2");
formrow.appendChild(formcol7);

let selectlabel1=document.createElement("label");
selectlabel1.setAttribute("class","fw-bold");
let selectlabel1text=document.createTextNode("SELECT FLIGHT CLASS");
formcol7.appendChild(selectlabel1)
selectlabel1.appendChild(selectlabel1text);

let selectinput1=document.createElement("select");
selectinput1.setAttribute("class","form-control");
selectinput1.setAttribute("id","users2name");
// selectinput1.setAttribute("placeholder","SELECT FLIGHT CLASS")
selectinput1.setAttribute("required","");
formcol7.appendChild(selectinput1);

let arr4=["SELECT FLIGHT CLASS","FIRST CLASS","BUSINESS CLASS","ECONOMY CLASS"];
for(let i=0;i<arr4.length;i++){
    let option1=document.createElement("option");
    option1.setAttribute("value",arr4[i])
    option1.innerHTML=arr4[i];

    selectinput1.appendChild(option1);
}


let formcol8=document.createElement("div");
formcol8.setAttribute("class","col-md-6 mt-2");
formrow.appendChild(formcol8);

let selectlabel2=document.createElement("label");
selectlabel2.setAttribute("class","fw-bold");
let selectlabel2text=document.createTextNode("SELECT SEAT");
formcol8.appendChild(selectlabel2)
selectlabel2.appendChild(selectlabel2text);

let selectinput2=document.createElement("select");
selectinput2.setAttribute("class","form-control");
selectinput2.setAttribute("id","users3name");
selectinput2.setAttribute("required","");
formcol8.appendChild(selectinput2);

let arr5=["SELECT SEAT","A/001","B/002","C/003"];
for(let i=0;i<arr5.length;i++){
    let option2=document.createElement("option");
    option2.innerHTML=arr5[i];

    selectinput2.appendChild(option2);
}


let formcol9=document.createElement("div");
formcol9.setAttribute("class","d-none d-md-block col-md-6 p-0 mt-2");
formrow.appendChild(formcol9);

let selectlabel3=document.createElement("label");
selectlabel3.setAttribute("class","fw-bold");
let selectlabel3text=document.createTextNode("SELECT FROM");
formcol9.appendChild(selectlabel3)
selectlabel3.appendChild(selectlabel3text);

let selectinput3=document.createElement("select");
selectinput3.setAttribute("class","form-control");
selectinput3.setAttribute("id","users4name");
selectinput3.setAttribute("required","");
formcol9.appendChild(selectinput3);

let arr6=["SELECT FROM CITY","KOLHAPUR","PUNE","MUMBAI"];
for(let i=0;i<arr6.length;i++){
    let option3=document.createElement("option");
    option3.innerHTML=arr6[i];

    selectinput3.appendChild(option3);
}



let formcol10=document.createElement("div");
formcol10.setAttribute("class","col-md-6 mt-2");
formrow.appendChild(formcol10);

let selectlabel4=document.createElement("label");
selectlabel4.setAttribute("class","fw-bold");
let selectlabel4text=document.createTextNode("SELECT FROM");
formcol10.appendChild(selectlabel4)
selectlabel4.appendChild(selectlabel4text);

let selectinput4=document.createElement("select");
selectinput4.setAttribute("class","form-control");
selectinput4.setAttribute("id","users5name");
selectinput4.setAttribute("required","");
formcol10.appendChild(selectinput4);

let arr7=["SELECT TO CITY","KOLKATA","CHENNAI","HAYDRABAD"];
for(let i=0;i<arr7.length;i++){
    let option4=document.createElement("option");
    option4.innerHTML=arr7[i];

    selectinput4.appendChild(option4);
}

let formbtndiv=document.createElement("div");
formbtndiv.setAttribute("class","mt-4 mb-5")
formrow.appendChild(formbtndiv)

let formbtn=document.createElement("button");
formbtn.setAttribute("class","btn btn-outline-dark m-auto d-block");
formbtn.setAttribute("type","button")

formbtntext=document.createTextNode("SUBMIT");
formbtn.appendChild(formbtntext);
formbtndiv.appendChild(formbtn);


formbtn.addEventListener("click",ticketbutton)

function ticketbutton(){
    firstname=document.getElementById("userfname").value
    lastname=document.getElementById("userlname").value
    selectflight=document.getElementById("users1name").value
    agename=document.getElementById("userAname").value
    datename=document.getElementById("userDname").value
    selectflightclass=document.getElementById("users2name").value
    selectseat=document.getElementById("users3name").value
    selectfrom1=document.getElementById("users4name").value
    selectfrom2=document.getElementById("users5name").value

 

    let pass=document.createElement("div");
    pass.setAttribute("class","container mt-5 img-1 border border-3 p-0");
    ticket.appendChild(pass);

    let passrow=document.createElement("div");
    passrow.setAttribute("class","row img-2 m-1");
    pass.appendChild(passrow);

    let passcol1=document.createElement("div");
    passcol1.setAttribute("class","col-6 mt-2 container ");
    passrow.appendChild(passcol1);


    // passanger name start 

    let passangerrow=document.createElement("div");
    passangerrow.setAttribute("class","row ");
    passcol1.appendChild(passangerrow);

    let passangercol1=document.createElement("div");
    passangercol1.setAttribute("class","col-12 mt-3");
    passangerrow.appendChild(passangercol1);
    
    let passangerdiv=document.createElement("div");
    passangerdiv.setAttribute("class","row");
    passangercol1.appendChild(passangerdiv);

    let passangerdivcol1=document.createElement("div");
    passangerdivcol1.setAttribute("class","col-4 mt-3");
    passangerdiv.appendChild(passangerdivcol1);


    let passanger=document.createElement("span");
    passanger.setAttribute("class","h5 fw-bold")
    passangerdivcol1.appendChild(passanger)
    let passangertext=document.createTextNode("PASSANGER NAME-")
    passanger.appendChild(passangertext);

    let passangerdivcol2=document.createElement("div");
    passangerdivcol2.setAttribute("class","col-4");
    passangerdiv.appendChild(passangerdivcol2);

    let passanger1=document.createElement("span");
    passanger1.setAttribute("class","h2 display-5 fw-bold");
    passangerdivcol2.appendChild(passanger1);

    let passanger1text=document.createTextNode( "  "+ " "+firstname+" "+ lastname)
    passanger1.appendChild(passanger1text)

    // passanger name end

    let passangerflight=document.createElement("div");
    passangerflight.setAttribute("class","row mt-4 ");
    passcol1.appendChild(passangerflight);

    let passangerflightcol1=document.createElement("div");
    passangerflightcol1.setAttribute("class","col-4");
    passangerflight.appendChild(passangerflightcol1);

    let passangerflightcol1p=document.createElement("h5");
    passangerflightcol1p.setAttribute("class","fw-bold")
    passangerflightcol1.appendChild(passangerflightcol1p);

    let passangerflightcol1pt=document.createTextNode("Flight");
    passangerflightcol1p.appendChild(passangerflightcol1pt);
    let passangerflightcol1p1=document.createElement("h4");
    passangerflightcol1p1.setAttribute("class","fw-bold")
    passangerflightcol1.appendChild(passangerflightcol1p1);
    let passangerflightcol1p1t=document.createTextNode(selectflight);
    passangerflightcol1p1.appendChild(passangerflightcol1p1t);

    



    let passangerflightcol2=document.createElement("div");
    passangerflightcol2.setAttribute("class","col-4");
    passangerflight.appendChild(passangerflightcol2);

    let passangerflightcol2p=document.createElement("h5");
    passangerflightcol2p.setAttribute("class","fw-bold");
    passangerflightcol2.appendChild(passangerflightcol2p);

    let passangerflightcol2pt=document.createTextNode("Date");
    passangerflightcol2p.appendChild(passangerflightcol2pt);
    let passangerflightcol2p1=document.createElement("h4");
    passangerflightcol2p1.setAttribute("class","fw-bold")
    passangerflightcol2.appendChild(passangerflightcol2p1);
    let passangerflightcol2p1t=document.createTextNode(datename);
    passangerflightcol2p1.appendChild(passangerflightcol2p1t);




    let passangerflightcol3=document.createElement("div");
    passangerflightcol3.setAttribute("class","col-4");
    passangerflight.appendChild(passangerflightcol3);

    let passangerflightcol3p=document.createElement("h5");
    passangerflightcol3p.setAttribute("class","fw-bold")
    passangerflightcol3.appendChild(passangerflightcol3p);

    let passangerflightcol3pt=document.createTextNode("Seat");
    passangerflightcol3p.appendChild(passangerflightcol3pt);
    let passangerflightcol3p1=document.createElement("h4");
    passangerflightcol3p1.setAttribute("class","fw-bold")
    passangerflightcol3.appendChild(passangerflightcol3p1);
    let passangerflightcol3p1t=document.createTextNode(selectseat);
    passangerflightcol3p1.appendChild(passangerflightcol3p1t);


    // section 3 start 

    let locationrow=document.createElement("div");
    locationrow.setAttribute("class","row mt-4 justify-content-center");
    passcol1.appendChild(locationrow);

    let locationcol=document.createElement("div");
    locationcol.setAttribute("class","col-8 border border-4 border-dark");
    locationrow.appendChild(locationcol);

    let locationdiv=document.createElement("div");
    locationdiv.setAttribute("class","d-flex justify-content-evenly mt-4");
    locationcol.appendChild(locationdiv)

    let locationp=document.createElement("h3");
    locationdiv.appendChild(locationp);
    let locationt=document.createTextNode(selectfrom1);
    locationp.appendChild(locationt)

    let locationi=document.createElement("i");
    locationi.setAttribute("class","icon fa-solid fa-jet-fighter fs-1 mb-2")
    locationdiv.appendChild(locationi);

    let locationp1=document.createElement("h3");
    locationdiv.appendChild(locationp1);
    let locationt1=document.createTextNode(selectfrom2);
    locationp1.appendChild(locationt1)



    // section 4 start 

    let passangerqr=document.createElement("div");
    passangerqr.setAttribute("class","row mt-4 container");
    passcol1.appendChild(passangerqr);

    let passangerqrcol1=document.createElement("div");
    passangerqrcol1.setAttribute("class","col-4");
    passangerqr.appendChild(passangerqrcol1);


    let passangerqrcol2=document.createElement("div");
    passangerqrcol2.setAttribute("class","col-4");
    passangerqr.appendChild(passangerqrcol2);
      

    let passangerqrcol2p=document.createElement("h5");
    passangerqrcol2p.setAttribute("class","text-danger fw-bold text-center");
    passangerqrcol2.appendChild(passangerqrcol2p)

    let passangerqrcol2pt=document.createTextNode("Gate No.");
    passangerqrcol2p.appendChild(passangerqrcol2pt);


    let passangerqrcol2p2=document.createElement("h4");
    passangerqrcol2p2.setAttribute("class"," fw-bold text-center");
    passangerqrcol2.appendChild(passangerqrcol2p2)

    let passangerqrcol2p2t=document.createTextNode("G-02");
    passangerqrcol2p2.appendChild(passangerqrcol2p2t);





    let passangerqrcol3=document.createElement("div");
    passangerqrcol3.setAttribute("class","col-4");
    passangerqr.appendChild(passangerqrcol3);
      

    let passangerqrcol3p=document.createElement("h5");
    passangerqrcol3p.setAttribute("class","text-danger fw-bold text-center");
    passangerqrcol3.appendChild(passangerqrcol3p)

    let passangerqrcol3pt=document.createTextNode("Boarding Time");
    passangerqrcol3p.appendChild(passangerqrcol3pt);

    let data=new Date ();
    let f=data.getHours()+3;
    let g=data.getMinutes ()


    let passangerqrcol3p2=document.createElement("h4");
    passangerqrcol3p2.setAttribute("class"," fw-bold text-center");
    passangerqrcol3.appendChild(passangerqrcol3p2)

    let passangerqrcol3p2t=document.createTextNode(f +":"+ g);
    passangerqrcol3p2.appendChild(passangerqrcol3p2t);



    // passcol2 start 
    let passcol2=document.createElement("div");
    passcol2.setAttribute("class","col-5  m-2 img-3  ");
    passrow.appendChild(passcol2);

    let passcol2name=document.createElement("div");
    passcol2name.setAttribute("class","row");
    passcol2.appendChild(passcol2name);

    let passcol2namecol1=document.createElement("div");
    passcol2namecol1.setAttribute("class","col-12 text-center");
    passcol2name.appendChild(passcol2namecol1);
     
    let passcol2namecol1h=document.createElement("h3")
    passcol2namecol1.appendChild(passcol2namecol1h);
     
    let passcol2namecol1ht=document.createTextNode("Passanger Name -")
    passcol2namecol1h.appendChild(passcol2namecol1ht);

    let passcol2namecol1h1=document.createElement("h3")
    passcol2namecol1.appendChild(passcol2namecol1h1);
     
    let passcol2namecol1h1t=document.createTextNode( "  "+ " "+firstname+" "+ lastname)
    passcol2namecol1h1.appendChild(passcol2namecol1h1t);






}








