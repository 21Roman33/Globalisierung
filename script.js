// script.js
let money = 1000;
let goods = 100;
let rawMaterials = 200;

const regions = {
    1: { name: 'North America', demand: 50 },
    2: { name: 'Europe', demand: 30 },
    3: { name: 'Asia', demand: 70 },
    4: { name: 'Africa', demand: 40 },
    5: { name: 'South America', demand: 20 }
};

const events = [
    "A trade deal has been established in North America.",
    "Economic downturn in Europe affects demand.",
    "New production technologies developed in Asia.",
    "Resource scarcity in Africa.",
    "Increased demand in South America due to population growth."
];

function updateDashboard() {
    document.getElementById('money').textContent = money;
    document.getElementById('goods').textContent = goods;
    document.getElementById('rawMaterials').textContent = rawMaterials;

    for (const regionId in regions) {
        document.querySelector(`#region${regionId} .demand`).textContent = regions[regionId].demand;
    }
}

function trade(regionId) {
    const region = regions[regionId];
    if (goods >= region.demand) {
        goods -= region.demand;
        money += region.demand * 10;
        region.demand += 10;
        updateDashboard();
        logEvent(`Traded with ${region.name}`);
    } else {
        alert('Not enough goods to trade');
    }
}

function produce(regionId) {
    const region = regions[regionId];
    if (rawMaterials >= 20) {
        rawMaterials -= 20;
        goods += 50;
        region.demand -= 10;
        updateDashboard();
        logEvent(`Produced goods for ${region.name}`);
    } else {
        alert('Not enough raw materials to produce');
    }
}

function logEvent(message) {
    const eventLog = document.getElementById('event-log');
    eventLog.textContent = message;
}

function randomEvent() {
    const eventIndex = Math.floor(Math.random() * events.length);
    const eventMessage = events[eventIndex];
    logEvent(eventMessage);
}

updateDashboard();
setInterval(randomEvent, 15000); // Trigger a random event every 15 seconds
