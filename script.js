var i = 0;
let cards = [
    [
        {
            name: "Yonathan Abera",
            position: "Founder and Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Joshua Busia",
            position: "Founder and Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Menelik Yared",
            position: "Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Euncahn Hwang",
            position: " Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Rodi W/yesus",
            position: " Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
    ],
    [
        {
            name: "Serukyas Tewahedo",
            position: "Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Fikir Yohannes",
            position: "Designer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Nahom Ketsela",
            position: "Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Beka Fekadu",
            position: "Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Arsema Essayas",
            position: "Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        // {
        //     "name": "Euncahn Hwang",
        //     "position": " Developer",
        //     "background": "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
        // },
        // {
        //     "name": "Rodi W/yesus",
        //     "position": " Developer",
        //     "background": "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
        // }
    ],
    [
        {
            name: "Yonathan Abera",
            position: "Founder and Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Joshua Busia",
            position: "Founder and Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Menelik Yared",
            position: "Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Euncahn Hwang",
            position: " Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
        {
            name: "Rodi W/yesus",
            position: " Developer",
            background:
                "../assets/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg",
        },
    ],
];
let schools = ["ICS", "KMU-SSC","Test"];
change(i);
document.getElementById("card-sec").addEventListener("click", function (event) {
    var target = event.target;
    if (target.matches(".fa-solid.fa-less-than")) {
        leftclicked();
    } else if (target.matches(".fa-solid.fa-greater-than")) {
        rightclicked();
    }
});
function change(x) {
    for (let index = 0; index < cards[x].length; index++) {
        document.getElementById("card-sec").innerHTML =
            document.getElementById("card-sec").innerHTML +
            `<div class="card">
                <div class="img"><img src= ${cards[x][index].background} alt=""></div>
                <div class="card-description">
                    <h5 class="card-name">${cards[x][index].name}</h5>
                    <span>
                        <h3>${cards[x][index].position}</h3>
                    </span>
                </div>
        </div>`;
    }
}
function redirect(y) {
    document.getElementById("card-sec").innerHTML = `<div class="card-team">
                <div class="card-icon-1">
                    <a href=""><i class="fa-brands fa-telegram icon"></i></a>
                    <a href=""><i class="fa-brands fa-instagram icon"></i></a>
                    <a href=""><i class="fa-brands fa-github icon"></i></a>
                </div>
                <div>
                    <p class="card-team-description">Click on the arrow below to see the next school team</p>
                </div>
                <div>
                    <div>
                        <h5 class="card-team-name">${schools[y]}</h5>
                    </div>
                    <div class="arrows">
                        <i class="fa-solid fa-less-than" id="left"></i>
                        <i class="fa-solid fa-greater-than" id="right"></i>
                    </div>
                </div>
            </div>`;
    change(y)
}
function rightclicked() {
    // console.log("hey");
    if (i < cards.length - 1) {
        i = i + 1;
        redirect(i)
    }
    else {
        i = 0; 
        redirect(i)
    }
}
function leftclicked() {
    if (i > 0) {
        i = i - 1;
        redirect(i)
    }
    else {
        i= cards.length-1
        // alert()
        redirect(i)
    }
}

// responsive siebar
let sidebar = document.querySelector(".sideBar");
function showSideBar() {
    sidebar.style.display = "flex";
}
function hideSideBar() {
    sidebar.style.display = "none";
}
// let cards=
