# age-of-war-strategy

# Age of War - Strategy Matching Game (Node.js)

This is a strategy-based logic game where you play as a medieval king fighting 5 simultaneous battles.  
Your goal: **Assign your platoons smartly to win at least 3 out of 5 battles**.

---

## Project Type
**Single file solution** – All logic is written in `index.js` (no external folders required).

---

## Problem Summary

- Each army has 5 platoons (with types and soldier count).
- Types include: `Militia`, `Spearmen`, `LightCavalry`, `HeavyCavalry`, `FootArcher`, `CavalryArcher`.
- Some types have **class advantage** over others (e.g., Spearmen > Cavalry).
- If you have an advantage, each of your soldiers count as 2.
- If your soldier count is greater, you win the duel.

---

## Sample Input (Hardcoded in `index.js`)

```js
const ownInput = "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120";
const enemyInput = "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";
