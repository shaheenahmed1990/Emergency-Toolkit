// ========================================
// Emergency Infusion Calculator
// Dose / Concentration / Rate Calculation
// ========================================

function openInfusionsCalculator() {

    const existing = document.getElementById("infusionsModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "infusionsModal";

    modal.innerHTML = `
        <div class="infusions-overlay">

            <div class="infusions-modal">

                <div class="infusions-header">
                    <div>
                        <h2>💉 Infusion Calculator</h2>
                        <p>Emergency infusion rate calculation</p>
                    </div>

                    <button
                        id="closeInfusions"
                        class="infusions-close">
                        ×
                    </button>
                </div>

                <div class="infusions-body">

                    <div class="infusions-alert">
                        <strong>Medication safety</strong>
                        <p>
                            Verify the drug, concentration, prescribed dose,
                            units, patient weight and local protocol before
                            administration.
                        </p>
                    </div>


                    <section class="infusions-section">

                        <h3>1. Patient & dose</h3>

                        <div class="infusions-grid">

                            <div class="infusions-field">
                                <label for="infusionWeight">
                                    Weight
                                    <span>kg</span>
                                </label>

                                <input
                                    id="infusionWeight"
                                    type="number"
                                    min="0.1"
                                    step="0.1"
                                    placeholder="e.g. 70">
                            </div>


                            <div class="infusions-field">
                                <label for="infusionDose">
                                    Prescribed dose
                                    <span id="infusionDoseUnitLabel">
                                        mcg/kg/min
                                    </span>
                                </label>

                                <input
                                    id="infusionDose"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="e.g. 5">
                            </div>

                        </div>

                    </section>


                    <section class="infusions-section">

                        <h3>2. Dose type</h3>

                        <select id="infusionDoseType">

                            <option value="mcgkgmin">
                                mcg/kg/min
                            </option>

                            <option value="mcgmin">
                                mcg/min
                            </option>

                            <option value="mgkgmin">
                                mg/kg/min
                            </option>

                            <option value="mgmin">
                                mg/min
                            </option>

                        </select>

                    </section>


                    <section class="infusions-section">

                        <h3>3. Prepared concentration</h3>

                        <div class="infusions-grid">

                            <div class="infusions-field">
                                <label for="infusionDrugAmount">
                                    Drug amount
                                    <span>mg</span>
                                </label>

                                <input
                                    id="infusionDrugAmount"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="e.g. 50">
                            </div>


                            <div class="infusions-field">
                                <label for="infusionFinalVolume">
                                    Final volume
                                    <span>mL</span>
                                </label>

                                <input
                                    id="infusionFinalVolume"
                                    type="number"
                                    min="0.1"
                                    step="0.1"
                                    placeholder="e.g. 50">
                            </div>

                        </div>

                    </section>


                    <section class="infusions-section">

                        <h3>4. Result</h3>

                        <div class="infusions-result">

                            <div class="infusions-result-row">
                                <span>Prepared concentration</span>
                                <strong id="infusionConcentration">
                                    —
                                </strong>
                            </div>

                            <div class="infusions-result-row">
                                <span>Required rate</span>
                                <strong id="infusionRate">
                                    —
                                </strong>
                            </div>

                        </div>

                    </section>


                    <div class="infusions-actions">

                        <button
                            id="resetInfusions"
                            class="infusions-reset">
                            Reset
                        </button>

                        <button
                            id="calculateInfusion"
                            class="infusions-calculate">
                            Calculate
                        </button>

                    </div>


                    <div class="infusions-note">

                        <strong>Safety note</strong>

                        <p>
                            This calculator performs mathematical conversion
                            only. It does not determine the appropriate drug,
                            dose, concentration or clinical indication.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);


    document
        .getElementById("closeInfusions")
        .addEventListener("click", () => {
            modal.remove();
        });


    document
        .querySelector(".infusions-overlay")
        .addEventListener("click", (event) => {

            if (event.target.classList.contains("infusions-overlay")) {
                modal.remove();
            }

        });


    document
        .getElementById("calculateInfusion")
        .addEventListener("click", () => {
            calculateInfusion(modal);
        });


    document
        .getElementById("resetInfusions")
        .addEventListener("click", () => {
            resetInfusions(modal);
        });


    document
        .getElementById("infusionDoseType")
        .addEventListener("change", updateInfusionLabels);

}


function updateInfusionLabels() {

    const type =
        document.getElementById("infusionDoseType").value;

    const label =
        document.getElementById("infusionDoseUnitLabel");

    if (type === "mcgkgmin") {
        label.textContent = "mcg/kg/min";
    }

    if (type === "mcgmin") {
        label.textContent = "mcg/min";
    }

    if (type === "mgkgmin") {
        label.textContent = "mg/kg/min";
    }

    if (type === "mgmin") {
        label.textContent = "mg/min";
    }
}


function calculateInfusion(modal) {

    const weight =
        Number(modal.querySelector("#infusionWeight").value);

    const dose =
        Number(modal.querySelector("#infusionDose").value);

    const doseType =
        modal.querySelector("#infusionDoseType").value;

    const drugAmountMg =
        Number(modal.querySelector("#infusionDrugAmount").value);

    const finalVolumeMl =
        Number(modal.querySelector("#infusionFinalVolume").value);


    const validRanges = [
        ["Dose", dose, 0.000001, Infinity],
        ["Drug amount", drugAmountMg, 0.000001, Infinity],
        ["Final volume", finalVolumeMl, 0.000001, Infinity]
    ];

    if (
        doseType === "mcgkgmin" ||
        doseType === "mgkgmin"
    ) {
        validRanges.push(
            ["Weight", weight, 0.1, 500]
        );
    }

    const invalidField = validRanges.find(
        ([, value, min, max]) =>
            !Number.isFinite(value) ||
            value < min ||
            value > max
    );

    if (invalidField) {

        const [label, value, min, max] = invalidField;

        if (!Number.isFinite(value)) {
            alert(`Please enter a valid ${label}.`);
        } else if (label === "Weight") {
            alert("Weight must be between 0.1 and 500 kg.");
        } else {
            alert(`${label} must be greater than zero.`);
        }

        return;
    }


    // Concentration in mg/mL
    const concentrationMgMl =
        drugAmountMg / finalVolumeMl;


    let requiredMgPerMin;


    if (doseType === "mcgkgmin") {

        requiredMgPerMin =
            (dose * weight) / 1000;

    }


    if (doseType === "mcgmin") {

        requiredMgPerMin =
            dose / 1000;

    }


    if (doseType === "mgkgmin") {

        requiredMgPerMin =
            dose * weight;

    }


    if (doseType === "mgmin") {

        requiredMgPerMin =
            dose;

    }


    // mL/min
    const mlPerMin =
        requiredMgPerMin / concentrationMgMl;


    // mL/hr
    const mlPerHour =
        mlPerMin * 60;


    modal.querySelector("#infusionConcentration")
        .textContent =
        `${concentrationMgMl.toFixed(3)} mg/mL`;


    modal.querySelector("#infusionRate")
        .textContent =
        `${mlPerHour.toFixed(2)} mL/hr`;
}


function resetInfusions(modal) {

    modal
        .querySelectorAll("input")
        .forEach(input => {
            input.value = "";
        });


    modal.querySelector("#infusionDoseType").value =
        "mcgkgmin";


    modal.querySelector("#infusionDoseUnitLabel")
        .textContent =
        "mcg/kg/min";


    modal.querySelector("#infusionConcentration")
        .textContent =
        "—";


    modal.querySelector("#infusionRate")
        .textContent =
        "—";
}
