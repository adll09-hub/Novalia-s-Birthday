const correctPin = "1311";
let enteredPin = "";

function pressNum(num) {
    if (enteredPin.length < 4) {
        enteredPin += num;
        updateDots();
    }
}

function clearPin() {
    enteredPin = "";
    updateDots();
}

function updateDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById(`dot${i}`);
        if (i <= enteredPin.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
    }
}

function submitPin() {
    if (enteredPin === correctPin) {
        document.getElementById("passcodeSection").classList.remove("active");
        document.getElementById("giftSection").classList.add("active");
    } else {
        document.getElementById("errorMsg").innerText = "PIN salah! Coba 1311";
        enteredPin = "";
        updateDots();
    }
}

function openGift() {
    document.getElementById("giftSection").classList.remove("active");
    document.getElementById("contentSection").classList.add("active");
}

// --- FUNGSI KLIK BUNGA DI DIGITAL BOUQUET (BARU) ---
function showFlowerMsg(flowerNumber) {
    const msgBox = document.getElementById("flowerMsgBox");
    
    // Pesan berbeda untuk tiap bunga
    const messages = {
        1: "🌺 Seperti bunga, setiap orang punya waktunya sendiri untuk tumbuh dan mekar.",
        2: "🌸 Tidak semua hari harus berbunga. Ada kalanya kita hanya perlu bertahan seperti bunga melewati musim.",
        3: "🌷 Bunga tidak tumbuh dalam sehari, begitu juga hal-hal  baik dalam kehidupan.",
        4: "🌻 Semoga hari-harimu selalu dipenuhi kebahagiaan dan tawa!",
        5: "🌹 Jangan terburu-buru untuk mekar. Nikmati prosesnya, karena bunga punya waktunya."
    };

    msgBox.style.opacity = 0;
    setTimeout(() => {
        msgBox.innerText = messages[flowerNumber];
        msgBox.style.opacity = 1;
    }, 150);
}

// Efek kelopak sakura jatuh di background
function createSakura() {
    const sakuraContainer = document.getElementById("sakuraContainer");
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
    
    sakura.style.left = Math.random() * 100 + "vw";
    sakura.style.top = "-10vh";
    
    const size = Math.random() * 8 + 6 + "px";
    sakura.style.width = size;
    sakura.style.height = size;
    
    const duration = Math.random() * 4 + 3 + "s";
    sakura.style.animationDuration = duration;
    
    sakuraContainer.appendChild(sakura);
    
    setTimeout(() => { sakura.remove(); }, 7000);
}

setInterval(createSakura, 300);