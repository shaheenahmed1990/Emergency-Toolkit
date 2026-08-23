// ========================================
// Adult Major Trauma Quick Reference
// ========================================

function openTrauma() {

    const existing = document.getElementById("traumaModal");

    if (existing) {
        existing.remove();
    }

    const modal = document.createElement("div");

    modal.id = "traumaModal";

    modal.innerHTML = `
        <div class="trauma-overlay">

            <div class="trauma-modal">

                <div class="trauma-header">

                    <div>
                        <h2>🩸 Adult Major Trauma</h2>
                        <p>ABCDE Quick Reference</p>
                    </div>

                    <button
                        id="closeTrauma"
                        class="trauma-close"
                    >
                        ×
                    </button>

                </div>


                <div class="trauma-body">

                    <div class="trauma-alert">
                        <strong>Major trauma is time-critical.</strong>

                        <p>
                            Identify and treat immediately life-threatening
                            problems while continuously reassessing the patient.
                        </p>
                    </div>


                    <section class="trauma-section">

                        <h3>0. Catastrophic haemorrhage</h3>

                        <div class="trauma-card critical">

                            <strong>Control major external bleeding immediately.</strong>

                            <ul>
                                <li>Direct pressure.</li>
                                <li>Haemostatic dressing when appropriate.</li>
                                <li>Tourniquet for life-threatening limb haemorrhage when indicated.</li>
                                <li>Activate the local major haemorrhage pathway when appropriate.</li>
                            </ul>

                        </div>

                    </section>


                    <section class="trauma-section">

                        <h3>A — Airway + cervical spine</h3>

                        <ul>
                            <li>Assess airway patency and ability to protect the airway.</li>
                            <li>Look for obstruction, facial trauma, blood or vomitus.</li>
                            <li>Use appropriate airway manoeuvres and suction.</li>
                            <li>Maintain spinal precautions when clinically indicated.</li>
                            <li>Escalate early if the airway cannot be maintained.</li>
                        </ul>

                    </section>


                    <section class="trauma-section">

                        <h3>B — Breathing</h3>

                        <div class="trauma-grid">

                            <div class="trauma-card">
                                <strong>Assess</strong>
                                <ul>
                                    <li>Respiratory effort.</li>
                                    <li>Chest movement and symmetry.</li>
                                    <li>SpO₂.</li>
                                    <li>Auscultation and percussion.</li>
                                </ul>
                            </div>

                            <div class="trauma-card emergency">
                                <strong>Immediate threats</strong>
                                <ul>
                                    <li>Tension pneumothorax</li>
                                    <li>Open pneumothorax</li>
                                    <li>Massive haemothorax</li>
                                    <li>Airway-threatening chest injury</li>
                                </ul>
                            </div>

                        </div>

                    </section>


                    <section class="trauma-section">

                        <h3>C — Circulation / haemorrhage</h3>

                        <ul>
                            <li>Assess pulse, blood pressure and peripheral perfusion.</li>
                            <li>Search systematically for sources of bleeding.</li>
                            <li>Establish appropriate IV/IO access.</li>
                            <li>Send blood samples according to local major trauma protocol.</li>
                            <li>Consider blood products and haemorrhage control pathways when indicated.</li>
                            <li>Reassess response continuously.</li>
                        </ul>

                    </section>


                    <section class="trauma-section">

                        <h3>D — Disability</h3>

                        <ul>
                            <li>GCS / neurological assessment.</li>
                            <li>Pupils.</li>
                            <li>Check blood glucose.</li>
                            <li>Assess for focal neurological deficit.</li>
                            <li>Consider traumatic brain injury in the appropriate context.</li>
                        </ul>

                    </section>


                    <section class="trauma-section">

                        <h3>E — Exposure / environment</h3>

                        <ul>
                            <li>Expose the patient sufficiently to identify injuries.</li>
                            <li>Perform a systematic head-to-toe assessment.</li>
                            <li>Prevent hypothermia.</li>
                            <li>Maintain dignity and cover the patient when possible.</li>
                        </ul>

                    </section>


                    <section class="trauma-section">

                        <h3>Reassessment</h3>

                        <div class="trauma-card reassess">

                            <strong>ABCDE is continuous.</strong>

                            <p>
                                Reassess after every intervention and whenever
                                the patient's condition changes.
                            </p>

                        </div>

                    </section>


                    <section class="trauma-section">

                        <h3>Imaging / further evaluation</h3>

                        <ul>
                            <li>Use imaging according to mechanism, examination and physiological status.</li>
                            <li>Do not allow imaging to delay immediate treatment of life-threatening problems.</li>
                            <li>Use local major trauma imaging pathways.</li>
                        </ul>

                    </section>


                    <div class="trauma-note">

                        <strong>Clinical safety note</strong>

                        <p>
                            This is a point-of-care reference aid.
                            Follow local major trauma, haemorrhage,
                            airway and spinal injury protocols.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(modal);


    document
        .getElementById("closeTrauma")
        .addEventListener("click", () => {
            modal.remove();
        });


    document
        .querySelector(".trauma-overlay")
        .addEventListener("click", (event) => {

            if (
                event.target.classList.contains("trauma-overlay")
            ) {
                modal.remove();
            }

        });

}