const contracts = [
    {
        title: "Crustaceans",
        unlock: "Available",
        requirements: ["Collect 5 different crustaceans"],
        rewards: "⭐ 3",
        loaner: "Crab Cage"
    },
    {
        title: "Shrimps",
        unlock: "Unlocked after Contract 1",
        requirements: ["Collect 5 different colored shrimps"],
        rewards: "⭐ 6",
        loaner: "Color Scanner"
    },
    {
        title: "Prawns",
        unlock: "Unlocked after Contract 1",
        requirements: ["Collect 5 different colored prawns"],
        rewards: "⭐ 6",
        loaner: "Smart Harpoon"
    },
    {
        title: "Mantis Shrimp",
        unlock: "Unlocked after Contract 2",
        requirements: ["Damage 10 enemies"],
        rewards: "⭐ 10",
        loaner: "Shock Gloves"
    },
    {
        title: "Pistol Shrimp",
        unlock: "Unlocked after Contract 3",
        requirements: ["Shoot 15 targets"],
        rewards: "⭐ 15",
        loaner: "Pressure Pistol"
    },
    {
        title: "Gas Passer",
        unlock: "Unlocked after all contracts",
        requirements: ["Electrecute 15 targets doused in Gas"],
        rewards: "⭐ 15", 
        loaner: "The Neon Annihilator"
    }
];

const infoBox = document.getElementById("info-box"); 
const panel = document.getElementById("contract-panel");
let activeNode = null; function toggleInfo(index, event) { const node = event.currentTarget; }

function toggleInfo(index, event) {
    const node = event.currentTarget;

    if (activeNode === node) {
        hideInfo();
        return;
    }

    activeNode = node;
    const data = contracts[index];

    infoBox.innerHTML = `
        <div class="info-title">${data.title}</div>
        <div class="info-sub">${data.unlock}</div>

        <div class="info-section">
            <span class="label">Requirements:</span>
            <ul>
                ${data.requirements.map(r => `<li>${r}</li>`).join("")}
            </ul>
        </div>

        <div class="info-section loaner">
            <span class="label">Rewards:</span>
            <div class="loaner-item">${data.loaner}</div>
        </div>

        <div class="info-reward">${data.rewards}</div>

        <button class="open-btn" onclick="openContract(${index})">
           Activate Contract
        </button>
    `;

    infoBox.style.display = "block";
    positionInfoBox(node);
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".node") && !e.target.closest(".info-box")) {
        hideInfo();
    }
});

function hideInfo() {
    infoBox.style.display = "none";
    activeNode = null;
}
function positionInfoBox(node) {
    const rect = node.getBoundingClientRect();
    const gap = 8;
    const boxWidth = 220;
    const boxHeight = infoBox.offsetHeight || 150;

    let left = rect.right + gap;
    let top = rect.top + rect.height / 2 - boxHeight / 2;
    let side = "right";

    if (left + boxWidth > window.innerWidth) {
        left = rect.left - boxWidth - gap;
        side = "left";
    }
    if (top + boxHeight > window.innerHeight) {
        top = window.innerHeight - boxHeight - 10;
    }
    if (top < 10) top = 10;

    infoBox.style.left = left + "px";
    infoBox.style.top = top + "px";

    infoBox.setAttribute("data-side", side);
}

function openContract(index) {
    const data = contracts[index];

    document.getElementById("contract-title").innerText = data.title;

    const objList = document.getElementById("objectives");
    objList.innerHTML = "";

    data.requirements.forEach(req => {
        const li = document.createElement("li");
        li.textContent = req;
        objList.appendChild(li);
    });

    document.getElementById("rewards").innerText = data.rewards;
    document.getElementById("unlock-text").innerText = data.unlock;

    panel.classList.remove("hidden");

    hideInfo(); 
}
function closeContract() {
    panel.classList.add("hidden");
}