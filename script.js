
let screen1 = document.getElementById("screen1")
let screen2 = document.getElementById("screen2")
let screen3 = document.getElementById("screen3")
let screen4 = document.getElementById("screen4")
let screen5 = document.getElementById("screen5")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let cheekVldbtn = document.getElementById("cheekValidity")

let userName = document.getElementById("inpName")
let userContect = document.getElementById("inpContect")
let Gender = document.getElementById("gender-box")
let VichelNo = document.getElementById("inpVicleNo")
let vicheltype = document.getElementById("vicheltype-box")
let type = document.getElementById("type-box")
let deatils = document.querySelector(".deatils")

let pera1 = document.getElementById("owner-name")
let pera2 = document.getElementById("vichel-id")
let pera3 = document.getElementById("Registeration-id")
let pera4 = document.getElementById("expiry-date")
let pera5 = document.getElementById("Vehicle-no")
let qrImg = document.getElementById("qrimg")
let num1 = document.getElementById("num1")
// console.log(userContect,userName,Gender,vicheltype,type);


let info = {}

btn1.onclick = () => {



    info.Name = userName.value,
        info.Contect = userContect.value,
        info.Gender = Gender.value

    screen1.style.display = "none"
    screen2.style.display = "flex"


}
btn2.onclick = () => {

    info.VichelNumber = VichelNo.value,
        info.vicheltype = vicheltype.value

    screen2.style.display = "none"
    screen3.style.display = "flex"



}
btn3.onclick = () => {
    let rdNumber = Math.floor(Math.random() * 10000000)
    screen3.style.display = "none"
    screen4.style.display = "block";
    info.VichelId = rdNumber,
        // console.log(info);
        skm()

    pera1.innerHTML = `Pass Id: ${rdNumber}`
    pera2.innerHTML = `Vichel Id: ${rdNumber}`
    pera3.innerHTML = `Owner Name: ${userName.value}`
    pera5.innerHTML=`Vehicle-No: ${VichelNo.value}`
    pera4.innerHTML = `Expeiry: ${new Date()}`

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pera1.innerHTML} ${pera2.innerHTML}  ${pera3.innerHTML} ${pera5.innerHTML} ${pera4.innerHTML}`




}



function skm() {

    let userDetails = localStorage.getItem("UserInfo");
    let setData = userDetails ? JSON.parse(userDetails) : [];
    setData.push(info);
    let ans = JSON.stringify(setData);
    // console.log(setData);
    window.localStorage.setItem("UserInfo", ans);
}

cheekVldbtn.onclick = () => {
    screen1.style.display = "none"
    screen5.style.display = "flex"

}

let userDetails = JSON.parse(localStorage.getItem("UserInfo"));
let showresult = document.querySelector(".showResult")
btn4.onclick = () => {

    userDetails.filter((e) => {
        if (e.VichelId == num1.value) {
            console.log(e)
            for (let key in e) {
                let p = document.createElement("p")
                showresult.appendChild(p)
                p.innerHTML = `${key}: ${e[key]} </br>`
                showresult.style.display = "block"
                num1.value = ""
            }
        }



    })



}






