/*

T.M.B - TAXA METABÓLICA BASAL - 75%
T.M.T - TAXA METABÓLICA TOTAL - 25%

VARIÁVEIS: PESO(KG), IDADE, SEXO, ALTURA(CM)

HARRIS-BENEDICT: CÁLCULO DA "TAXA METABÓLICA BASAL"

HOMENS: (13,75 * PESO) + (5 + ALTURA) - (6,75 * IDADE) + 66,5
MULHERES: (9,56 * PESO) + (1,85 * ALTURA) - (4,68 * IDADE) + 65,71

G.E.T(GASTO ENERGÉTIDO TOTAL) = T.M.T(TAXA METABÓLICA TOTAL)

F.A(FATOR ATIVIDADE):
LEVE: 1,3 * TMB
MODERADA: 1,5 * TMB 
ALTA: 1,7 * TMB (TREINA MAIS QUE 3X POR SEMANA)

G.E.T(F.A) -> CALORIAS TOTAL GASTAS
EXEMPLO: DEFICIT DE 400 KCAL

G.E.T - 400 = VALOR EM DEFICIT CALORICO = V.D.C KCAL

MACRONUTRIENTES:

PROTEÍNAS: 2G * PESO(KG) -> 4 KCAL/G 
GORDURAS: 1G * PESO(KG) -> 9 KCAL/G 
CARBOIDRATOS: XG * PESO(KG) - 4KCAL/G

PESO * 2 * 4 + PESO *2 * 9 = P.G KCAL

CARB = (V.D.C - P.G) / 4


*/

const carbohydrateCalculation = (totalCarb) => {
    // 1 g Carboidrato te 4 Kcal
    const dailyCaibohydrateCalories = totalCarb / 4

    return dailyCaibohydrateCalories
}

const activityFactor = (factor) => {
    if (factor === "leve") {
        return 1.3

    } else if (factor === "moderada") {
        return 1.5

    } else if (factor === "alta") {
        return 1.7

    }
}

const macroNutrients = (inputWeight) => {
    dailyProteinsCalories = Number(inputWeight) * 2 * 4 // Total de Calorias por peso das Proteínas
    dailyLipidsCalories = Number(inputWeight) * 1 * 9 // Total de Calorias por peso das Gorduras    
    const respost = document.querySelector('h1.text-display')

    const macro = {
        proteins: dailyProteinsCalories,
        lipids: dailyLipidsCalories
    }



    return macro

}

const basalMetabolicRate = (inputWeight, inputheight, inputAge) => {
    const sexPerson = document.querySelector('select#sex-person').value // Sexo do Paciente
    const man = ((13.75 * Number(inputWeight)) + (5 * Number(inputheight)) - (6.75 * Number(inputAge)) + 66.5) // Kcal
    const woman = ((9.56 * Number(inputWeight)) + (1.85 * Number(inputheight)) - (4.68 * Number(inputAge)) + 65.71) // Kcal


    if (sexPerson === "homem") {
        return man
    } else if (sexPerson === "mulher") {
        return woman
    }

}

const calculeCalories = () => {
    const inputName = document.querySelector('input.input-name').value // Nome Completo
    const sexPerson = document.querySelector('select#sex-person').value // Sexo do Paciente
    const factor = document.querySelector('select#factor').value // Fator de Atividade
    const inputWeight = document.querySelector('input.input-weight').value // Peso
    const inputheight = document.querySelector('input.input-height').value // Altura
    const inputAge = document.querySelector('input.input-age').value // Idade
    const respost = document.querySelector('h1.text-display') // Display de Resultados

    if (!(inputName && inputWeight && inputheight && inputAge)) {

        alert("Por Favor, Preencha todos os campos!!!")

    } else if (inputName && inputWeight && inputheight && inputAge) {

        const bmr = basalMetabolicRate(inputWeight, inputheight, inputAge) // Taxa Metabólica Basal
        const macroPL = macroNutrients(inputWeight) // Proteínas e Gorduras
        const aF = activityFactor(factor) // Fator de Atividade           
        const totalEnergyExpenditure = bmr * aF // Gasto Energético Total
        const deficitTotalEnergyExpenditure400 = totalEnergyExpenditure - 400 // Gasto Energético Total com 400Kcal de Deficit Calórico
        const totalCarb = deficitTotalEnergyExpenditure400 - (macroPL.proteins + macroPL.lipids)
        const calcCarb = carbohydrateCalculation(totalCarb) // Caiboidrato a ser consumido para perder peso
        console.log(macroPL)


        console.log(`Taxa Metabólica Basal: ${bmr + macroPL.proteins + macroPL.lipids}`)
        console.log(`Gasto Energético Total, ${Math.ceil(deficitTotalEnergyExpenditure400)}`)
        console.log(`Total de Carboidratos, ${totalCarb}`)
        console.log(`Caiboidrato a ser consumido para perder peso, ${calcCarb}`)


        respost.innerHTML = `Nome: ${inputName}<br><br>`
        respost.innerHTML += `Taxa Metabólica Basal: ${Math.ceil(bmr)} Kcal<br>`
        respost.innerHTML += `Gasto Energético Total: ${Math.ceil(totalEnergyExpenditure)} Kcal<br>`
        respost.innerHTML += `Gasto Total com 400 Kcal de Deficit: ${Math.ceil(deficitTotalEnergyExpenditure400)} Kcal<br><br> `
        respost.innerHTML += `Proteína Diária Recomendada: (2g por Quilo de Peso Corporal) ${macroPL.proteins / 4} g -> ${macroPL.proteins} Kcal <br>`
        respost.innerHTML += `Gordura Diária Recomendada: (1g por Quilo de Peso Corporal) ${macroPL.lipids / 9} g -> ${macroPL.lipids} Kcal<br><br> `
        respost.innerHTML += `Carboidrato Diário Recomendado: ${Math.ceil(calcCarb)} g<br>`


    }



}