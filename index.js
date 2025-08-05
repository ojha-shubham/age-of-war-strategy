
const ownInput = "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120";
const enemyInput = "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";

// Advantage Mapping
const advantages = {
    Militia: ["Spearmen", "LightCavalry"],
    Spearmen: ["LightCavalry", "HeavyCavalry"],
    LightCavalry: ["FootArcher", "CavalryArcher"],
    HeavyCavalry: ["Militia", "FootArcher", "LightCavalry"],
    CavalryArcher: ["Spearmen", "HeavyCavalry"],
    FootArcher: ["Militia", "CavalryArcher"]
};

// Parse input to array of objects
function parsePlatoons(input) {
    return input.split(";").map(pair => {
        const [type, count] = pair.split("#");
        return { type, count: parseInt(count) };
    });
}

// Fight logic between 2 platoons
function fight(own, enemy) {
    let ownPower = own.count;
    let enemyPower = enemy.count;

    if (advantages[own.type]?.includes(enemy.type)) {
        ownPower *= 2;
    } else if (advantages[enemy.type]?.includes(own.type)) {
        enemyPower *= 2;
    }

    if (ownPower > enemyPower) return "win";
    if (ownPower === enemyPower) return "draw";
    return "lose";
}

// Generate all permutations
function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const perms = getPermutations(remaining);
        for (const perm of perms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}

// Main logic to get winning arrangement
function getWinningArrangement(ownInput, enemyInput) {
    const ownPlatoons = parsePlatoons(ownInput);
    const enemyPlatoons = parsePlatoons(enemyInput);
    const permutations = getPermutations(ownPlatoons);

    for (const perm of permutations) {
        let wins = 0;
        for (let i = 0; i < 5; i++) {
            if (fight(perm[i], enemyPlatoons[i]) === "win") {
                wins++;
            }
        }
        if (wins >= 3) {
            return perm.map(p => `${p.type}#${p.count}`).join(";");
        }
    }

    return "There is no chance of winning";
}

// Run the program
const result = getWinningArrangement(ownInput, enemyInput);
console.log(result);
