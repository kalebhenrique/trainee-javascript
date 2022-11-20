// QUESTÂO 1:
// a
const calculateIMC = (kg, m) => kg / (m ** 2)

// b
function generateUser(nome, idade, email) {
  let informações = {
    nome: nome,
    idade: idade,
    email: email
  }
  return informações
}

// c
const soPar = lista => lista.filter((num) => num % 2 == 0)

// QUESTÂO 2:
// a
import turma from './Q2JS.js'

const classStatistic = turma => {
  let variance = 0
  let average = 0
  let approved = 0

  for (let i = 0; i < turma.length; i++) {
    average += turma[i].mediaFinal
    if (turma[i].mediaFinal >= 5)
      approved++
  }
  average /= turma.length

  for (let i = 0; i < turma.length; i++) {
    variance += (i - average) ** 2
  }
  variance /= turma.length

  return "Média: " + average + "\nDesvio Padrão: " + Math.sqrt(variance)
    + "\nAprovados: " + approved + "/" + turma.length
}

// b
const addMencao = turma => {
  for (let i = 0; i < turma.length; i++) {
    let average = turma[i].mediaFinal
    if (0 <= average && average < 5)
      turma[i].mencao = "RR"
    else if (5 <= average && average < 7)
      turma[i].mencao = "MM"
    else if (7 <= average && average < 8)
      turma[i].mencao = "MS"
    else
      turma[i].mencao = "SS"
  }
  return turma
}
