const data = [

    {
        quarter: "Quarter 1: The Basics",

        lessons: [

            {
                title: "What are Invertebrates?",
                desc: "The 2nd Main Division category of animals without a backbone",
                image: "Invertebrates.jpg",
                link: "https://australian.museum/learn/teachers/learning/what-are-invertebrates/"
            },
            {
                title: "What are Arthropods?",
                desc: "A category of Invertebrate with segmented bodies, exoskeletons, and jointed limbs.",
                image: "Arthropods.jpg",
                link: "https://evolution.berkeley.edu/what-is-an-arthropod/"
            },
            {
                title: "What are Crustaceans?",
                desc: "Aquatic arthropods such as shrimp, crabs, and lobsters.",
                image: "Crustaceans.jpg",
                link: "https://www.crustaceancompassion.org/what-are-crustaceans"
            },
            {
                title: "Shrimp Of Today",
                desc: "Modern shrimp species and in aquamarine ecosystems.",
                image: "ShrimpToday.jpg",
                link: "https://americanshrimp.com/how-many-species-of-shrimp-are-there/"
            }
        ]
    },
    {
        quarter: "Quarter 2: Variants and Lookalikes",

        lessons: [

            {
                title: "Shrimps Vs. Prawns",
                desc: "Anatomy and behavior differences between shrimps and prawns.",
                image: "Prawn.jpg",
                link: "https://scienceinsights.org/are-shrimps-prawns-the-key-biological-differences/"
            },
            {
                title: "Mantis Shrimp",
                desc: "The mantis shrimp and its powerful punch and eyesight.",
                image: "MantisShrimp.jpg",
                link: "https://www.nationalgeographic.com/animals/invertebrates/facts/mantis-shrimp"
            },
            {
                title: "Pistol Shrimp",
                desc: "The pistol shrimp and it's pressure, high-precision, blaster claw.",
                image: "PistolShrimp.jpg",
                link: "https://oceanconservancy.org/blog/2020/09/10/pistol-shrimp/"
            },
            {
                title: "Krill",
                desc: "Study tiny crustaceans that play a massive role in ocean food chains.",
                image: "Krill.jpg",
                link: "https://www.nationalgeographic.com/animals/invertebrates/facts/krill"
            }

        ]
    },
    {
        quarter: "Quarter 3: Cycle Of Life",

        lessons: [

            {
                title: "Shrimp Spawn",
                desc: "How shrimps begin their life cycle through spawning.",
                image: "ShrimpSpawn.jpg",
                link: "https://www.dnr.sc.gov/marine/pub/seascience/shrimpcycle.html"
            },
            {
                title: "Shrimp Stages",
                desc: "The stages of shrimp development from larvae to adulthood.",
                image: "ShrimpStages.jpg",
                link: "https://iere.org/what-are-the-stages-of-shrimp/"
            },
            {
                title: "Shrimp Reproduction",
                desc: "How shrimp reproduce and protect their offspring.",
                image: "ShrimpReproduction.webp",
                link: "https://scienceinsights.org/how-do-shrimp-reproduce-from-mating-to-hatching/"
            },
            {
                title: "Shrimp Death",
                desc: "The natural causes of shrimp death and environmental dangers.",
                image: "ShrimpDeath.jpg",
                link: "https://www.garnelio.de/en/more/blog/shrimp/shrimp-death-reasons-and-remedies"
            }

        ]
    },
    {
        quarter: "Quarter 4: Influence",

        lessons: [

            {
                title: "Role in Food Chain",
                desc: "How shrimp help support marine ecosystems and predators.",
                image: "FoodChain.webp",
                link: "https://whateats.com/what-eats-shrimp/"
            },

            {
                title: "Predators & Prey",
                desc: "The predators and prey of shrimps and its types.",
                image: "PredatorsPrey.webp",
                link: "https://www.bioexplorer.net/what-do-shrimp-eat.html/"
            },

            {
                title: "Benefits to Environment",
                desc: "The environmental importance of shrimp in aquatic habitats.",
                image: "EnvironmentBenefits.jpg",
                link: "https://thehumaneleague.org/article/shrimp-welfare-101"
            },

            {
                title: "Shrimp in Day-To-Day Life",
                desc: "How shrimp affect food, culture, science, and daily living.",
                image: "DailyLife.jpg",
                link: "https://www.timotis.com/news-1/shrimp-facts"
            }

        ]
    }

];

let currentQuarter = 0;
let currentLesson = 0;

window.onload = () => {
    loadQuarter(0);
};

function loadQuarter(index) {

    currentQuarter = index;
    currentLesson = 0;

    const lessonList =
        document.getElementById("lesson-list");

    lessonList.innerHTML = "";

    const quarters =
        document.querySelectorAll(".quarter");

    quarters.forEach(q => {
        q.classList.remove("active-quarter");
    });

    quarters[index].classList.add("active-quarter");

    data[index].lessons.forEach((lesson, i) => {

        const lessonDiv =
            document.createElement("div");

        lessonDiv.className = "lesson-item";
        lessonDiv.textContent = lesson.title;

        if (i === 0) {
            lessonDiv.classList.add("active-lesson");
        }

        lessonDiv.onclick = () => {
            loadLesson(i);
        };

        lessonList.appendChild(lessonDiv);
    });

    loadLesson(0);
}
function loadLesson(index) {

    currentLesson = index;

    const lesson =
        data[currentQuarter].lessons[index];

    document.getElementById("lesson-title")
        .textContent = lesson.title;
    document.getElementById("lesson-description")
        .textContent = lesson.desc;
    document.getElementById("lesson-image")
        .src = lesson.image;
    const lessons =
        document.querySelectorAll(".lesson-item");

    lessons.forEach(item => {
        item.classList.remove("active-lesson");
    });

    lessons[index].classList.add("active-lesson");
}
function openLesson() {

    const lesson =
        data[currentQuarter].lessons[currentLesson];

    if (lesson.link) {window.open(lesson.link, "_blank");} 
    else {alert("No lesson page assigned yet.");}
}