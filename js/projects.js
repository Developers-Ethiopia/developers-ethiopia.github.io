let grid = document.getElementById("pgrid");
const projectdic = [{
    tag: "Project 01",
    title: "Mekdela Attendance",
    description: " Mekdala Attendance is a system developed for a school near ICS to make taking attendance of students easier.",
    class: "mekd",
    background: "../assets/photo_2023-09-12_09-23-49.jpg",
    backgroundforthebig: `assets/mekd2.jpg`,
    backgroundattribute: "one" //use this --backgroundatttribute to :hover display background picture
},
{
    tag: "Project 02",
    title: "CCC Website",
    description: " CCC website is a system developed for a school near ICS to make taking attendance of students easier.",
    class: "ccc",
    background: "https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    backgroundattribute: "two"
},
{
    tag: "Project 03",
    title: "Mary Joy Database",
    class: "mary",
    description: "We also developed a database for the well known NGO Mary Joy",
    background: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGRhdGFiYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    backgroundattribute: "three"
},
]
for (const x of projectdic) {
    grid.innerHTML = grid.innerHTML + `
        <div id='proj' class ="proj  ${x.class}">
            <div id="tag">
                ${x.tag}
            </div>
            <div id="projtit">
                ${x.title}
            </div>
            <div class="hr">
            </div>
            <div id="more">
                <div>
                    learn more
                </div>
                <span class="material-symbols-outlined">
                    arrow_right_alt
                </span>
            </div>
        </div>
    
    `
    try {
        document.documentElement.style.setProperty(`--${x.backgroundattribute}`, `url(${x.background})`);
    } catch (error) {
        console.log(error);
    }
}
let each = document.querySelectorAll("div.proj");
let projectsArray = Array.from(each);

projectsArray.forEach((element, i) => {
    element.addEventListener("click", () => {
        let i = projectsArray.indexOf(element);
        let txt = document.getElementById("variable-text");
        txt.innerHTML = `${projectdic[i].description}`;
        document.getElementById("imageproj").src = `${projectdic[i].hasOwnProperty('backgroundforthebig') ? projectdic[i].backgroundforthebig : projectdic[i].background}`
        document.getElementById("big-text").innerHTML = `${projectdic[i].title}`;
        element.style.backgroundImage = `url(${projectdic[i].background})`
        element.classList.add("clickedprojects");
        let xbtn = document.getElementById("xbtn");
        xbtn.style.display = "flex";
        projectsArray.forEach((element2, index) => {
            if (index !== i) {
                try {
                    element2.style.backgroundImage = ``;
                    element2.classList.remove("clickedprojects");
                } catch (error) {

                }
            }
        })
        xbtn.addEventListener("click", () => {
            element.style.backgroundImage = ``;
            element.classList.remove("clickedprojects")
            document.getElementById("imageproj").src = `assets/project-gallery.jpg`;
            document.getElementById("big-text").innerHTML = `Our Projects Gallery`;
            txt.innerHTML = `We've been working on various projects to change, support and uplift
          our communitites. Check all of them below!`;
            xbtn.style.display = `none`;
        })
    });
});
