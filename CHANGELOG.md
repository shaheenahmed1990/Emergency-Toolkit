# Changelog

All notable changes to Emergency Toolkit are documented here.

## [1.0.0] — Clinical Reference & QA Release

### Clinical updates

- Updated Cardiac Arrest reference for RCUK 2025 ALS guidance
- Updated Airway reference for current difficult-airway guidance
- Updated major Trauma reference with haemorrhage, TXA, pelvic binder and imaging guidance
- Updated Sepsis reference for SSC 2026 guidance
- Updated DKA reference for current consensus-based management
- Updated ACS reference for ESC guidance
- Updated Anaphylaxis reference for RCUK 2025 guidance
- Updated electrolyte emergency reference for RCUK 2025 guidance
- Updated Paediatric emergency reference for RCUK 2025 guidance
- Updated Adult Emergency Drugs reference for current RCUK guidance

### Quality assurance

- Completed clinical reference audit of priority emergency modules
- Completed responsive/mobile UI testing
- Completed Light Mode and Dark Mode testing
- Completed modal open/close/outside-click testing
- Completed scrollable modal testing
- Verified all `onclick` handlers resolve to existing functions
- Verified all script paths referenced by `index.html`
- Removed temporary audit/backup files
- Verified clean Git working tree

## [0.1.0] — Initial Clinical Core

### Added

#### Clinical Calculators

- GCS
- NEWS2
- Shock Index
- ABG
- Emergency Infusion Calculator

#### Emergency Algorithms

- Cardiac Arrest
- Sepsis
- Toxicology
- Anaphylaxis
- Acute Asthma
- COPD Exacerbation
- Acute Pulmonary Oedema
- GI Bleeding
- Acute Pancreatitis
- Acute Abdomen
- Bowel Obstruction
- Trauma
- Airway
- Breathing
- Circulation
- Disability
- Exposure
- Stroke
- Electrolyte Emergencies
- Seizures / Status Epilepticus
- DKA
- ACS

#### Emergency Resources

- Adult Emergency Drugs
- Paediatric Emergency Assessment

### UI / UX

- Responsive desktop layout
- Responsive mobile layout
- Scrollable clinical modals
- Light Mode
- Dark Mode
- Mobile modal support

### Architecture

- Independent calculator modules
- Independent emergency algorithm modules
- GCS calculator refactored into standalone module
- Shared application layer for global UI behaviour
