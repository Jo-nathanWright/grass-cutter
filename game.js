let cheese = 0;

const modifiers = {
    click: {
        pickaxes: {
            price: 100,
            quantity: 0,
            multiplier: 1,
            upcharge: 25
        },
        cutter: {
            price: 250,
            quantity: 0,
            multiplier: 5,
            upcharge: 50
        }
    },
    auto: {
        rovers: {
            price: 500,
            quantity: 0,
            multiplier: 10,
            upcharge: 250
        },
        rockets: {
            price: 1000,
            quantity: 0,
            multiplier: 25,
            upcharge: 500
        }
    }
}
//#region SECTION VERSION 1.0 of the dictionary
// let clickUpgrades = {
//     pickaxes: {
//         price: 100,
//         quantity: 0,
//         multiplier: 2,
//         upcharge: 25
//     },
//     cutter: {
//         price: 250,
//         quantity: 0,
//         multiplier: 5,
//         upcharge: 50
//     }
// };

// let automaticUpgrades = {
//     rovers: {
//         price: 500,
//         quantity: 0,
//         multiplier: 20,
//         upcharge: 250
//     },
//     rockets: {
//         price: 1000,
//         quantity: 0,
//         multiplier: 50,
//         upcharge: 500
//     }
// };
//#endregion
//#region SECTION VERSION 1.0 of the buy functions
// function buyPickaxe() {
//     if (cheese >= modifiers.click.pickaxes.price) {
//         cheese = cheese - modifiers.click.pickaxes.price
//         modifiers.click.pickaxes.quantity = modifiers.click.pickaxes.quantity + 1
//         modifiers.click.pickaxes.price += modifiers.click.pickaxes.upcharge
//     }
//     console.log('Pick Multiplier :', modifiers.click.pickaxes.multiplier)
//     console.log('Pick Quantity :', modifiers.click.pickaxes.quantity)
//     update()
// }
// function buyCutter() {
//     if (cheese >= modifiers.click.cutter.price) {
//         cheese = cheese - modifiers.click.cutter.price
//         modifiers.click.cutter.quantity = modifiers.click.cutter.quantity + 1
//         modifiers.click.cutter.price += modifiers.click.cutter.upcharge
//     }
//     console.log('Cutter Multiplier :', modifiers.click.cutter.multiplier)
//     console.log('Cutter Quantity :', modifiers.click.cutter.quantity)
//     update()
// }
// function buyRover() {
//     if (cheese >= modifiers.auto.rovers.price) {
//         cheese = cheese - modifiers.auto.rovers.price
//         modifiers.auto.rovers.quantity = modifiers.auto.rovers.quantity + 1
//         modifiers.auto.rovers.price += modifiers.auto.rovers.upcharge
//     }
//     console.log('Rover Multiplier :', modifiers.auto.rovers.multiplier)
//     console.log('Rover Quantity :', modifiers.auto.rovers.quantity)
//     update()
// }
// function buyRocket() {
//     if (cheese >= modifiers.auto.rockets.price) {
//         cheese = cheese - modifiers.auto.rockets.price
//         modifiers.auto.rockets.quantity = modifiers.auto.rockets.quantity + 1
//         modifiers.auto.rockets.price += modifiers.auto.rockets.upcharge
//     }
//     console.log('Rockets Multiplier :', modifiers.auto.rockets.multiplier)
//     console.log('Rockets Quantity :', modifiers.auto.rockets.quantity)
//     update()
// }
//#endregion
//#region SECTION VERSION 1.0 of the mining function
// cheese += 1 + calcModifiers('click')
// cheese++

// let modifyer = 0
// for (let key in clickUpgrades) {
//     let item = clickUpgrades[key]
//     console.log(key)
//     if (item.quantity >= 1) {
//         modifyer += (item.quantity * item.multiplier)
//     }
//     console.log('Cheese :', cheese)
//     console.log('Modifyer :', modifyer)
// }
// console.log('Modifyer Outside :', modifyer)
// console.log('Cheese Outside :', cheese)
// if (modifyer == 0) {
//     cheese = cheese + 1
// } else if (modifyer == 1) {
//     cheese = cheese + modifyer + 1
// } else {
//     cheese = cheese + modifyer
// }
//#endregion
//#region SECTION VERSION 1.0 of the autoCollecter function
// let autoModifyer = 0
// for (let key in automaticUpgrades) {
//     let item = automaticUpgrades[key]
//     if (item.quantity >= 1) {
//         autoModifyer += (item.quantity * item.multiplier)
//     }
//     console.log('Auto Cheese :', cheese)
//     console.log('More Modifyer :', autoModifyer)
// }
// console.log('Auto Modifyer Outside :', autoModifyer)
// console.log('More Cheese Outside :', cheese)
// if (autoModifyer >= 0) {
//     cheese = cheese + autoModifyer
// }
//#endregion
//#region SECTION VERSION 1.0 of the calcModifyer code, OUTDATED
// if (item.quantity >= 1 && type == `click`) {
//     modifyer += (item.quantity * item.multiplier)
// } else if (item.quantity >= 1 && type == `auto`) {
//     autoModifyer += (item.quantity * item.multiplier)
// }
// console.log('An Array - ', item)
// console.log('Modifier : ', modifyer)
// console.log('Auto Modifier : ', autoModifyer)
//#endregion

function mine() {
    cheese += (1 + calcModifiers('click'))
    update()
}
function collectAuto() {
    cheese += calcModifiers('auto')
    update()
}
function buy(type, name) {
    let item = modifiers[type][name]
    if (cheese >= item.price) {
        cheese = cheese - item.price
        item.quantity++
        item.price += item.upcharge
        update()
    }
    console.log(item)
    console.log('Name - ', name)
    console.log('Item Amount - ', item.quantity)
    console.log('Items Price - ', item.price)
    update()
}
function startInterval() {
    setInterval(collectAuto, 3000);
}
function calcModifiers(type) {
    let total = 0
    // iterate over modifiers and return total modified
    for (let key in modifiers[type]) {
        let item = modifiers[type][key]
        total += item.multiplier * item.quantity
    }
    return total
}

function update() {
    //Put the id in the dictionary
    document.getElementById("cheeseTotal").innerText = `${cheese}`

    //SECTION This in theory should be all I need to modify the screen amount
    //document.getElementById("${item}".innerText = `${item.quantity}`)

    document.getElementById("pickaxe").innerText = `${modifiers.click.pickaxes.quantity}`
    document.getElementById("cutter").innerText = `${modifiers.click.cutter.quantity}`
    document.getElementById("rover").innerText = `${modifiers.auto.rovers.quantity}`
    document.getElementById("rocket").innerText = `${modifiers.auto.rockets.quantity}`
    document.getElementById("pickaxePrice").innerText = `${modifiers.click.pickaxes.price}`
    document.getElementById("cutterPrice").innerText = `${modifiers.click.cutter.price}`
    document.getElementById("roverPrice").innerText = `${modifiers.auto.rovers.price}`
    document.getElementById("rocketPrice").innerText = `${modifiers.auto.rockets.price}`
    document.getElementById("clickMod").innerText = `${calcModifiers('click')}`
    document.getElementById("autoMod").innerText = `${calcModifiers('auto')}`

    calcModifiers('click')
    calcModifiers('auto')
}
startInterval()