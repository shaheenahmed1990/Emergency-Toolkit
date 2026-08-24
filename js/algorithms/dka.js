// ========================================
// Adult Diabetic Ketoacidosis Quick Reference
// ADA/EASD/JBDS/AACE/DTS Consensus 2024
// ========================================

function openDKA() {

    const existing = document.getElementById("dkaModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "dkaModal";

    modal.innerHTML = `
        <div class="dka-overlay">

            <div class="dka-modal">

                <div class="dka-header">

                    <div>
                        <h2>🩸 Diabetic Ketoacidosis (DKA)</h2>
                        <p>Adult Recognition & Initial Management Quick Reference</p>
                    </div>

                    <button
                        id="closeDKA"
                        class="dka-close">
                        ×
                    </button>

                </div>


                <div class="dka-body">

                    <div class="dka-alert">

                        <strong>DKA is a time-critical metabolic emergency.</strong>

                        <p>
                            Identify DKA promptly, assess severity, begin
                            appropriate fluid and insulin therapy, monitor
                            electrolytes closely and identify the precipitating
                            cause.
                        </p>

                    </div>


                    <section class="dka-section">

                        <h3>1. Diagnostic criteria</h3>

                        <div class="dka-card critical">

                            <strong>All three components are required.</strong>

                            <ul>
                                <li>
                                    <strong>Diabetes / hyperglycaemia:</strong>
                                    glucose ≥ 11.1 mmol/L (200 mg/dL)
                                    or a known history of diabetes.
                                </li>

                                <li>
                                    <strong>Ketosis:</strong>
                                    blood β-hydroxybutyrate ≥ 3.0 mmol/L
                                    or significant urine ketones.
                                </li>

                                <li>
                                    <strong>Metabolic acidosis:</strong>
                                    pH < 7.30 and/or bicarbonate < 18 mmol/L.
                                </li>
                            </ul>

                            <p>
                                Blood β-hydroxybutyrate is preferred for
                                diagnosis and monitoring when available.
                            </p>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>2. Do not miss euglycaemic DKA</h3>

                        <div class="dka-card warning">

                            <p>
                                DKA may occur with glucose below the traditional
                                hyperglycaemic range, particularly with
                                SGLT2-inhibitor use, reduced carbohydrate intake,
                                pregnancy or other states of relative insulin
                                deficiency.
                            </p>

                            <p>
                                Do not exclude DKA solely because the glucose
                                concentration is not markedly elevated.
                            </p>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>3. Initial assessment</h3>

                        <ol>
                            <li>Assess airway, breathing and circulation.</li>
                            <li>Assess mental status and haemodynamic stability.</li>
                            <li>Measure capillary glucose and blood ketones.</li>
                            <li>Obtain venous blood gas where appropriate.</li>
                            <li>Check electrolytes, renal function and relevant laboratory tests.</li>
                            <li>Obtain ECG when potassium disturbance is suspected.</li>
                            <li>Identify the precipitating illness or treatment interruption.</li>
                        </ol>

                    </section>


                    <section class="dka-section">

                        <h3>4. Common precipitants</h3>

                        <div class="dka-grid">

                            <div class="dka-card warning">
                                <strong>Infection</strong>
                                <p>
                                    Look for infection as a precipitating
                                    cause and treat when clinically indicated.
                                </p>
                            </div>

                            <div class="dka-card warning">
                                <strong>Insulin omission</strong>
                                <p>
                                    Review missed doses, access to insulin
                                    and treatment adherence.
                                </p>
                            </div>

                            <div class="dka-card warning">
                                <strong>Acute illness</strong>
                                <p>
                                    Consider ACS, stroke, pancreatitis,
                                    surgery and other physiological stressors.
                                </p>
                            </div>

                            <div class="dka-card warning">
                                <strong>SGLT2 inhibitor</strong>
                                <p>
                                    Consider euglycaemic DKA in patients
                                    taking an SGLT2 inhibitor.
                                </p>
                            </div>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>5. Fluid resuscitation</h3>

                        <div class="dka-card emergency">

                            <strong>Restore circulating volume first.</strong>

                            <ul>
                                <li>Use isotonic crystalloid according to haemodynamic status.</li>
                                <li>Assess for shock and treat circulatory compromise promptly.</li>
                                <li>Reassess blood pressure, perfusion, urine output and fluid balance.</li>
                                <li>Use more cautious fluid replacement when significant cardiac or renal impairment is present.</li>
                            </ul>

                            <p>
                                Avoid unnecessary fluid overload.
                            </p>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>6. Insulin therapy</h3>

                        <div class="dka-card">

                            <strong>Insulin stops ketogenesis.</strong>

                            <ul>
                                <li>
                                    Fixed-rate IV insulin infusion is the standard
                                    approach for significant adult DKA under a
                                    validated local protocol.
                                </li>

                                <li>
                                    Continue insulin until the ketoacidosis has
                                    resolved, not simply until glucose normalises.
                                </li>

                                <li>
                                    Glucose-containing fluid may be required as
                                    plasma glucose falls so that insulin can
                                    continue safely to clear ketones.
                                </li>

                                <li>
                                    Continue appropriate basal insulin when
                                    clinically indicated and according to the
                                    patient's established regimen.
                                </li>
                            </ul>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>7. Potassium</h3>

                        <div class="dka-card critical">

                            <strong>Potassium management is essential.</strong>

                            <ul>
                                <li>
                                    Total body potassium is usually depleted
                                    even when the initial serum potassium
                                    appears normal or high.
                                </li>

                                <li>
                                    Monitor serum potassium frequently during
                                    treatment.
                                </li>

                                <li>
                                    Replace potassium according to the measured
                                    serum concentration and the local DKA protocol.
                                </li>

                                <li>
                                    Avoid starting insulin when potassium is
                                    dangerously low until potassium replacement
                                    has been addressed according to protocol.
                                </li>
                            </ul>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>8. Bicarbonate & phosphate</h3>

                        <div class="dka-grid">

                            <div class="dka-card warning">

                                <strong>Bicarbonate</strong>

                                <p>
                                    Bicarbonate is not routinely recommended
                                    for adult DKA and should only be considered
                                    in exceptional severe acidosis according
                                    to specialist/local protocol.
                                </p>

                            </div>

                            <div class="dka-card warning">

                                <strong>Phosphate</strong>

                                <p>
                                    Routine phosphate replacement is not
                                    generally indicated. Consider replacement
                                    only for selected severe deficiency or
                                    specific clinical indications.
                                </p>

                            </div>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>9. Monitoring</h3>

                        <div class="dka-card">

                            <ul>
                                <li>Monitor capillary glucose frequently.</li>
                                <li>Monitor blood ketones where available.</li>
                                <li>Repeat venous blood gas / bicarbonate according to protocol.</li>
                                <li>Monitor potassium and other electrolytes closely.</li>
                                <li>Monitor fluid balance and urine output.</li>
                                <li>Reassess neurological status regularly.</li>
                            </ul>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>10. Resolution of DKA</h3>

                        <div class="dka-card reassess">

                            <strong>Do not use glucose alone to determine resolution.</strong>

                            <p>
                                Contemporary consensus defines resolution by
                                clearance of ketonaemia together with recovery
                                of acid-base status. Blood β-hydroxybutyrate
                                is preferred over urine ketones for monitoring.
                            </p>

                            <p>
                                Do not use the anion gap alone as the primary
                                resolution criterion.
                            </p>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>11. Important complications</h3>

                        <div class="dka-grid">

                            <div class="dka-card critical">
                                <strong>Hypoglycaemia</strong>
                                <p>
                                    Can occur during continued insulin therapy
                                    and requires prompt recognition and treatment.
                                </p>
                            </div>

                            <div class="dka-card critical">
                                <strong>Hypokalaemia</strong>
                                <p>
                                    May develop rapidly during insulin and
                                    fluid treatment.
                                </p>
                            </div>

                            <div class="dka-card warning">
                                <strong>Fluid overload</strong>
                                <p>
                                    Higher risk in renal or cardiac impairment.
                                </p>
                            </div>

                            <div class="dka-card warning">
                                <strong>Cerebral complications</strong>
                                <p>
                                    Reassess patients with deteriorating
                                    neurological status urgently.
                                </p>
                            </div>

                        </div>

                    </section>


                    <section class="dka-section">

                        <h3>12. Escalation</h3>

                        <div class="dka-card critical">

                            <ul>
                                <li>Severe metabolic acidosis.</li>
                                <li>Altered consciousness.</li>
                                <li>Shock or persistent haemodynamic instability.</li>
                                <li>Severe electrolyte disturbance.</li>
                                <li>Significant renal or cardiac comorbidity.</li>
                                <li>Failure of expected biochemical improvement.</li>
                            </ul>

                            <p>
                                Escalate early to senior diabetes, emergency
                                and critical-care support when appropriate.
                            </p>

                        </div>

                    </section>


                    <div class="dka-note">

                        <strong>Clinical safety note</strong>

                        <p>
                            This is a point-of-care reference aid, not a
                            substitute for a validated DKA protocol.
                            Verify fluid type, insulin concentration, infusion
                            rate, potassium replacement and monitoring frequency
                            against the current institutional protocol before treatment.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    document
        .getElementById("closeDKA")
        .addEventListener("click", () => {
            modal.remove();
        });

    document
        .querySelector(".dka-overlay")
        .addEventListener("click", (event) => {

            if (event.target.classList.contains("dka-overlay")) {
                modal.remove();
            }

        });

}
