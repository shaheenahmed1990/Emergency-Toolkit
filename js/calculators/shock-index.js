// ========================================
// Shock Index Calculator
// Shock Index = Heart Rate / Systolic BP
// ========================================

function openShockIndexCalculator() {

    const existing = document.getElementById("shockIndexModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "shockIndexModal";

    modal.innerHTML = `
        <div class="shock-overlay">

            <div class="shock-modal">

                <div class="shock-header">
                    <div>
                        <h2>❤️ Shock Index</h2>
                        <p>Heart Rate ÷ Systolic Blood Pressure</p>
                    </div>

                    <button id="closeShock" class="shock-close">
                        ×
                    </button>
                </div>


                <div class="shock-body">

                    <div class="shock-field">

                        <label for="shockHR">
                            Heart rate
                            <span>bpm</span>
                        </label>

                        <input
                            id="shockHR"
                            type="number"
                            min="20"
                            max="250"
                            step="1"
                            placeholder="e.g. 120"
                        >

                    </div>


                    <div class="shock-field">

                        <label for="shockSBP">
                            Systolic blood pressure
                            <span>mmHg</span>
                        </label>

                        <input
                            id="shockSBP"
                            type="number"
                            min="30"
                            max="300"
                            step="1"
                            placeholder="e.g. 100"
                        >

                    </div>


                    <div class="shock-result">

                        <div class="shock-total-label">
                            Shock Index
                        </div>

                        <div
                            id="shockTotal"
                            class="shock-total"
                        >
                            —
                        </div>

                        <div
                            id="shockInterpretation"
                            class="shock-interpretation"
                        >
                            Enter HR and SBP
                        </div>

                    </div>


                    <div class="shock-actions">

                        <button
                            id="resetShock"
                            class="shock-reset"
                        >
                            Reset
                        </button>

                        <button
                            id="calculateShock"
                            class="shock-calculate"
                        >
                            Calculate
                        </button>

                    </div>


                    <div class="shock-note">

                        <strong>Clinical note:</strong>

                        <p>
                            Shock Index is an adjunct to clinical
                            assessment and should not be used in
                            isolation.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);


    // ================================
    // Close
    // ================================

    document
        .getElementById("closeShock")
        .addEventListener("click", () => {
            modal.remove();
        });


    // ================================
    // Calculate
    // ================================

    document
        .getElementById("calculateShock")
        .addEventListener("click", calculateShockIndex);


    // ================================
    // Reset
    // ================================

    document
        .getElementById("resetShock")
        .addEventListener("click", () => {

            document.getElementById("shockHR").value = "";

            document.getElementById("shockSBP").value = "";

            document.getElementById("shockTotal").textContent = "—";

            document.getElementById("shockInterpretation").textContent =
                "Enter HR and SBP";
        });
}


// ========================================
// Calculate Shock Index
// ========================================

function calculateShockIndex() {

    const hr = Number(
        document.getElementById("shockHR").value
    );

    const sbp = Number(
        document.getElementById("shockSBP").value
    );


    if (!hr || !sbp) {

        alert(
            "Please enter both heart rate and systolic blood pressure."
        );

        return;
    }


    if (sbp <= 0) {

        alert(
            "Systolic blood pressure must be greater than zero."
        );

        return;
    }


    const si = hr / sbp;

    const roundedSI = si.toFixed(2);


    document.getElementById("shockTotal")
        .textContent = roundedSI;


    let interpretation;


    if (si < 0.5) {

        interpretation =
            "Below typical adult reference range";

    } else if (si < 0.7) {

        interpretation =
            "Typical adult reference range";

    } else if (si < 0.9) {

        interpretation =
            "Elevated — assess in clinical context";

    } else if (si < 1.0) {

        interpretation =
            "Markedly elevated — assess for haemodynamic compromise";

    } else {

        interpretation =
            "≥1.0 — concerning; urgent clinical assessment may be required";
    }


    document.getElementById("shockInterpretation")
        .textContent = interpretation;
}