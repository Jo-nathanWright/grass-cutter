let cheese = 0;

let clickUpgrades = {
    pickaxes: {
        price: 100,
        quantity: 0,
        multiplier: 2,
        upcharge: 25
    },
    cutter: {
        price: 250,
        quantity: 0,
        multiplier: 5,
        upcharge: 50
    }
};
let automaticUpgrades = {
    rovers: {
        price: 500,
        quantity: 0,
        multiplier: 20,
        upcharge: 250
    },
    rockets: {
        price: 1000,
        quantity: 0,
        multiplier: 50,
        upcharge: 500
    }
};


function mine() {
    let modifyer = 0
    for (let key in clickUpgrades) {
        let item = clickUpgrades[key]
        console.log('start')
        if (item.quantity >= 1) {
            modifyer += (item.quantity * item.multiplier)
        }
        console.log('Cheese :', cheese)
        console.log('Modifyer :', modifyer)
    }
    console.log('Modifyer Outside :', modifyer)
    console.log('Cheese Outside :', cheese)
    if (modifyer == 0) {
        cheese = cheese + 1
    } else if (modifyer == 1) {
        cheese = cheese + modifyer + 1
    } else {
        cheese = cheese + modifyer
    }
    update()
}
function collectAuto() {
    let autoModifyer = 0
    for (let key in automaticUpgrades) {
        let item = automaticUpgrades[key]
        if (item.quantity >= 1) {
            autoModifyer += (item.quantity * item.multiplier)
        }
        console.log('Auto Cheese :', cheese)
        console.log('More Modifyer :', autoModifyer)
    }
    console.log('Auto Modifyer Outside :', autoModifyer)
    console.log('More Cheese Outside :', cheese)
    if (autoModifyer >= 0) {
        cheese = cheese + autoModifyer
    }
    update()
}

function buyPickaxe() {
    if (cheese >= clickUpgrades.pickaxes.price) {
        cheese = cheese - clickUpgrades.pickaxes.price
        clickUpgrades.pickaxes.quantity = clickUpgrades.pickaxes.quantity + 1
        clickUpgrades.pickaxes.price += clickUpgrades.pickaxes.upcharge
    }
    console.log('Pick Multiplier :', clickUpgrades.pickaxes.multiplier)
    console.log('Pick Quantity :', clickUpgrades.pickaxes.quantity)
    update()
}
function buyCutter() {
    if (cheese >= clickUpgrades.cutter.price) {
        cheese = cheese - clickUpgrades.cutter.price
        clickUpgrades.cutter.quantity = clickUpgrades.cutter.quantity + 1
        clickUpgrades.pickaxes.price += clickUpgrades.cutter.upcharge
    }
    console.log('Cutter Multiplier :', clickUpgrades.cutter.multiplier)
    console.log('Cutter Quantity :', clickUpgrades.cutter.quantity)
    update()
}
function buyRover() {
    if (cheese >= automaticUpgrades.rovers.price) {
        cheese = cheese - automaticUpgrades.rovers.price
        automaticUpgrades.rovers.quantity = automaticUpgrades.rovers.quantity + 1
        automaticUpgrades.rovers.price += automaticUpgrades.rovers.upcharge
    }
    console.log('Rover Multiplier :', automaticUpgrades.rovers.multiplier)
    console.log('Rover Quantity :', automaticUpgrades.rovers.quantity)
    update()
}
function buyRocket() {
    if (cheese >= automaticUpgrades.rockets.price) {
        cheese = cheese - automaticUpgrades.rockets.price
        automaticUpgrades.rockets.quantity = automaticUpgrades.rockets.quantity + 1
        automaticUpgrades.rockets.price += automaticUpgrades.rockets.upcharge
    }
    console.log('Rockets Multiplier :', automaticUpgrades.rockets.multiplier)
    console.log('Rockets Quantity :', automaticUpgrades.rockets.quantity)
    update()
}

function startInterval() {
    setInterval(collectAuto, 5000);
}
function update() {
    document.getElementById("cheeseTotal").innerText = `${cheese}`
    document.getElementById("pickaxe").innerText = `${clickUpgrades.pickaxes.quantity}`
    document.getElementById("cutter").innerText = `${clickUpgrades.cutter.quantity}`
    document.getElementById("pickaxePrice").innerText = `${clickUpgrades.pickaxes.price}`
    document.getElementById("cutterPrice").innerText = `${clickUpgrades.cutter.price}`
    document.getElementById("roverPrice").innerText = `${automaticUpgrades.rovers.price}`
    document.getElementById("rocketPrice").innerText = `${automaticUpgrades.rockets.price}`
}
startInterval()