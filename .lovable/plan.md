# Final Incentives Legibility Micro-Repair

## Changes
- Raise only the four Incentives SVG explanatory label styles into the 11.5–13.5px effective range while preserving current geometry and baseline clearance.
- Prevent the two Incentives captions from ending with single-word widows using nonbreaking joins.
- Apply a modest ultra-wide width increase only if ten-width measurements confirm labels remain below 15px and the composition stays balanced.

## Verification
- Check 2560, 2048, 1920, 1800, 1700, 1440, 1280, 1024, 768, and 390px for effective label sizes, caption widows, SVG clipping, and page overflow.
- Run the project’s TypeScript/build checks and report the resulting revision identifier.
