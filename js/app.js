// ================================
// Emergency Toolkit
// ================================

// Dark mode
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}


// ================================
// GCS Calculator
// ================================

function openGCSCalculator() {

    const modal = document.createElement("div");

    modal.innerHTML = `
        <div id="gcsOverlay" style="
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
        ">

            <div style="
                background: white;
                color: #222;
                width: 100%;
                max-width: 600px;
                max-height: 90vh;
                overflow-y: auto;
                border-radius: 16px;
                padding: 25px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            ">

                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                ">

                    <div>
                        <h2 style="margin:0;">
                            🧠 GCS Calculator
                        </h2>

                        <p style="
                            margin:5px 0 0;
                            color:#667085;
                        ">
                            Glasgow Coma Scale
                        </p>
                    </div>

                    <button id="closeGCS" style="
                        border:none;
                        background:#eee;
                        border-radius:50%;
                        width:36px;
                        height:36px;
                        font-size:24px;
                        cursor:pointer;
                    ">
                        ×
                    </button>

                </div>


                <!-- EYE -->

                <div style="
                    border:1px solid #ddd;
                    border-radius:12px;
                    padding:15px;
                    margin-bottom:15px;
                ">

                    <h3>👁 Eye Opening (E)</h3>

                    <label>
                        <input type="radio" name="gcsEye" value="4">
                        4 — Spontaneous
                    </label><br>

                    <label>
                        <input type="radio" name="gcsEye" value="3">
                        3 — To speech
                    </label><br>

                    <label>
                        <input type="radio" name="gcsEye" value="2">
                        2 — To pain
                    </label><br>

                    <label>
                        <input type="radio" name="gcsEye" value="1">
                        1 — None
                    </label>

                </div>


                <!-- VERBAL -->

                <div style="
                    border:1px solid #ddd;
                    border-radius:12px;
                    padding:15px;
                    margin-bottom:15px;
                ">

                    <h3>🗣 Verbal Response (V)</h3>

                    <label>
                        <input type="radio" name="gcsVerbal" value="5">
                        5 — Oriented
                    </label><br>
                    <label>
    <input type="radio" name="gcsVerbal" value="NT">
    NT — Not testable
</label>

                    <label>
                        <input type="radio" name="gcsVerbal" value="4">
                        4 — Confused
                    </label><br>

                    <label>
                        <input type="radio" name="gcsVerbal" value="3">
                        3 — Inappropriate words
                    </label><br>

                    <label>
                        <input type="radio" name="gcsVerbal" value="2">
                        2 — Incomprehensible sounds
                    </label><br>

                    <label>
                        <input type="radio" name="gcsVerbal" value="1">
                        1 — None
                    </label>
                    <label>
    <input type="radio" name="gcsVerbal" value="NT">
    NT — Not testable
</label>

                </div>


                <!-- MOTOR -->

                <div style="
                    border:1px solid #ddd;
                    border-radius:12px;
                    padding:15px;
                    margin-bottom:15px;
                ">

                    <h3>💪 Motor Response (M)</h3>

                    <label>
                        <input type="radio" name="gcsMotor" value="6">
                        6 — Obeys commands
                    </label><br>

                    <label>
                        <input type="radio" name="gcsMotor" value="5">
                        5 — Localizes pain
                    </label><br>

                    <label>
                        <input type="radio" name="gcsMotor" value="4">
                        4 — Withdraws from pain
                    </label><br>

                    <label>
                        <input type="radio" name="gcsMotor" value="3">
                        3 — Abnormal flexion
                    </label><br>

                    <label>
                        <input type="radio" name="gcsMotor" value="2">
                        2 — Extension
                    </label><br>

                    <label>
                        <input type="radio" name="gcsMotor" value="1">
                        1 — None
                    </label>

                </div>


                <!-- RESULT -->

                <div style="
                    text-align:center;
                    background:#f3f6fa;
                    border-radius:12px;
                    padding:20px;
                ">

                    <div style="
                        font-size:18px;
                        color:#667085;
                    ">
                        Total GCS
                    </div>

                    <div id="gcsTotal" style="
                        font-size:48px;
                        font-weight:bold;
                        margin:5px;
                    ">
                        —
                    </div>

                    <div id="gcsBreakdown">
                        E — &nbsp; V — &nbsp; M —
                    </div>

                    <div id="gcsInterpretation" style="
                        margin-top:10px;
                        font-weight:bold;
                    ">
                        Select all three components
                    </div>
                    <button id="resetGCS" style="
    margin-top:15px;
    padding:10px 20px;
    border:none;
    border-radius:8px;
    background:#e2e8f0;
    cursor:pointer;
">
    Reset
</button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);
    document.getElementById("resetGCS").addEventListener("click", () => {

    modal.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
    });

    document.getElementById("gcsTotal").textContent = "—";

document.getElementById("gcsBreakdown")
    .textContent =
    `E${E} V${V} M${M}`;

    document.getElementById("gcsInterpretation").textContent =
        "Select all three components";
});


    // Close button
    document
        .getElementById("closeGCS")
        .addEventListener("click", () => {
            modal.remove();
        });


    // Click outside
    document
        .getElementById("gcsOverlay")
        .addEventListener("click", (event) => {

            if (event.target.id === "gcsOverlay") {
                modal.remove();
            }

        });


    // Calculate
    const inputs = modal.querySelectorAll(
        'input[type="radio"]'
    );

    inputs.forEach(input => {

        input.addEventListener("change", calculateGCS);

    });


    function calculateGCS() {

        const eye = modal.querySelector(
            'input[name="gcsEye"]:checked'
        );

        const verbal = modal.querySelector(
            'input[name="gcsVerbal"]:checked'
        );

        const motor = modal.querySelector(
            'input[name="gcsMotor"]:checked'
        );


        if (!eye || !verbal || !motor) {
            return;
        }


       const E = Number(eye.value);
const M = Number(motor.value);

const verbalValue = verbal.value;

if (verbalValue === "NT") {

    document.getElementById("gcsTotal").textContent = "NT";

document.getElementById("gcsBreakdown").textContent =
    `E${E} VNT M${M}`;

    document.getElementById("gcsInterpretation").textContent =
        "Verbal response not testable — total GCS cannot be calculated.";

    return;
}

const V = Number(verbalValue);

const total = E + V + M;

        document.getElementById("gcsTotal")
            .textContent = total;


        document.getElementById("gcsBreakdown")
            .textContent =
            `E ${E} + V ${V} + M ${M}`;


       let interpretation;
let clinicalNote;

if (total >= 13) {
    interpretation = "Mild impairment";
    clinicalNote = "GCS 13–15";
}
else if (total >= 9) {
    interpretation = "Moderate impairment";
    clinicalNote = "GCS 9–12";
}
else {
    interpretation = "Severe impairment";
    clinicalNote = "GCS ≤8";
}

document.getElementById("gcsInterpretation").textContent =
    `${interpretation} • ${clinicalNote}`;


        document.getElementById("gcsInterpretation")
            .textContent = interpretation;
    }

}


// ================================
// CALCULATOR CARDS
// ================================

document.addEventListener("click", (event) => {

    const card = event.target.closest(".tool-card");

    if (!card) return;

    const title = card.querySelector("strong");

    if (!title) return;

    const name = title.textContent.trim();

    if (name === "GCS") {
        openGCSCalculator();
        return;
    }

    if (name === "NEWS2") {
        openNEWS2Calculator();
        return;
    }

    if (name === "Shock Index") {
        openShockIndexCalculator();
        return;
    }

    if (name === "ABG") {
        openABGCalculator();
        return;
    }

}
// ================================
// TOOL CARD ROUTING
// ================================

document.addEventListener("click", (event) => {

    const card = event.target.closest(".tool-card");

    if (!card) return;

    const title = card.querySelector("strong");

    if (!title) return;

    const name = title.textContent.trim();

    if (name === "GCS") {
        openGCSCalculator();
        return;
    }

    if (name === "NEWS2") {
        openNEWS2Calculator();
        return;
    }

    if (name === "Shock Index") {
        openShockIndexCalculator();
        return;
    }

    if (name === "ABG") {
        openABGCalculator();
        return;
    }

    if (name === "Cardiac Arrest") {
        openCardiacArrest();
        return;
    }
});
document.addEventListener("DOMContentLoaded", () => {

    const cardiacCard = [...document.querySelectorAll(".tool-card")]
        .find(card =>
            card.querySelector("strong")?.textContent.trim() === "Cardiac Arrest"
        );

    if (cardiacCard) {
        cardiacCard.addEventListener("click", openCardiacArrest);
    }

});