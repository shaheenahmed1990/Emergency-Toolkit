function openGCSCalculator() {
    const modal = document.createElement("div");
    modal.className = "calculator-modal";

    modal.innerHTML = `
        <div class="calculator-panel">
            <div class="calculator-header">
                <div>
                    <h2>🧠 Glasgow Coma Scale</h2>
                    <p>GCS Calculator</p>
                </div>
                <button class="close-calculator" onclick="closeGCSCalculator()">×</button>
            </div>

            <div class="gcs-section">
                <h3>Eye Opening (E)</h3>

                <label>
                    <input type="radio" name="gcs-eye" value="4">
                    <span>4 — Spontaneous</span>
                </label>

                <label>
                    <input type="radio" name="gcs-eye" value="3">
                    <span>3 — To voice</span>
                </label>

                <label>
                    <input type="radio" name="gcs-eye" value="2">
                    <span>2 — To pressure</span>
                </label>

                <label>
                    <input type="radio" name="gcs-eye" value="1">
                    <span>1 — None</span>
                </label>
            </div>

            <div class="gcs-section">
                <h3>Verbal Response (V)</h3>

                <label>
                    <input type="radio" name="gcs-verbal" value="5">
                    <span>5 — Oriented</span>
                </label>

                <label>
                    <input type="radio" name="gcs-verbal" value="4">
                    <span>4 — Confused</span>
                </label>

                <label>
                    <input type="radio" name="gcs-verbal" value="3">
                    <span>3 — Inappropriate words</span>
                </label>

                <label>
                    <input type="radio" name="gcs-verbal" value="2">
                    <span>2 — Incomprehensible sounds</span>
                </label>

                <label>
                    <input type="radio" name="gcs-verbal" value="1">
                    <span>1 — None</span>
                </label>
            </div>

            <div class="gcs-section">
                <h3>Motor Response (M)</h3>

                <label>
                    <input type="radio" name="gcs-motor" value="6">
                    <span>6 — Obeys commands</span>
                </label>

                <label>
                    <input type="radio" name="gcs-motor" value="5">
                    <span>5 — Localising</span>
                </label>

                <label>
                    <input type="radio" name="gcs-motor" value="4">
                    <span>4 — Normal flexion</span>
                </label>

                <label>
                    <input type="radio" name="gcs-motor" value="3">
                    <span>3 — Abnormal flexion</span>
                </label>

                <label>
                    <input type="radio" name="gcs-motor" value="2">
                    <span>2 — Extension</span>
                </label>

                <label>
                    <input type="radio" name="gcs-motor" value="1">
                    <span>1 — None</span>
                </label>
            </div>

            <div id="gcs-result" class="gcs-result">
                <div class="gcs-score">— / 15</div>
                <div class="gcs-interpretation">
                    Select E, V and M to calculate GCS
                </div>
            </div>

            <div class="calculator-actions">
                <button class="reset-button" onclick="resetGCS()">Reset</button>
                <button class="calculate-button" onclick="calculateGCS()">Calculate GCS</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function calculateGCS() {
    const eye = document.querySelector('input[name="gcs-eye"]:checked');
    const verbal = document.querySelector('input[name="gcs-verbal"]:checked');
    const motor = document.querySelector('input[name="gcs-motor"]:checked');

    if (!eye || !verbal || !motor) {
        alert("Please select Eye, Verbal and Motor responses.");
        return;
    }

    const e = Number(eye.value);
    const v = Number(verbal.value);
    const m = Number(motor.value);

    const total = e + v + m;

    let interpretation;

    if (total >= 13) {
        interpretation = "Mild impairment";
    } else if (total >= 9) {
        interpretation = "Moderate impairment";
    } else {
        interpretation = "Severe impairment";
    }

    document.querySelector(".gcs-score").textContent = `${total} / 15`;
    document.querySelector(".gcs-interpretation").textContent =
        `GCS E${e} V${v} M${m} — ${interpretation}`;
}

function resetGCS() {
    document.querySelectorAll('input[name="gcs-eye"], input[name="gcs-verbal"], input[name="gcs-motor"]')
        .forEach(input => input.checked = false);

    document.querySelector(".gcs-score").textContent = "— / 15";
    document.querySelector(".gcs-interpretation").textContent =
        "Select E, V and M to calculate GCS";
}

function closeGCSCalculator() {
    const modal = document.querySelector(".calculator-modal");

    if (modal) {
        modal.remove();
    }
}