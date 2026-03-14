const targetInput = document.getElementById("target")
const smeltersEl = document.getElementById("smelters")
const oreEL = document.getElementById("ore")
const btn = document.getElementById("calculate")

const SMELTER_RATE = 30

// btn.addEventListener("click", () => {
btn.onclick = () => {

    const target = Number(targetInput.value)

    const smelters = Math.ceil(target / SMELTER_RATE)

    const ore = target

    smeltersEl.textContent = smelters
    oreEL.textContent = ore

    saveData(target, smelters, ore)
}

function saveData(target, smelters, ore) {


    const data = {
        target,
        smelters,
        ore
    }

    localStorage.setItem("productionCalc", JSON.stringify(data))
}

function loadData() {

    const saved = localStorage.getItem("productionCalc")

    if (!saved) return

    const data = JSON.parse(saved)

    targetInput.value = data.target
    smeltersEl.textContent = data.smelters
    oreEL.textContent = data.ore
}

loadData()