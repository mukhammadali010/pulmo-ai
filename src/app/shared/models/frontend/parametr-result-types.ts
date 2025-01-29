export interface ParametrAnswers {
    [key: number]: string
  }
  
  const SOOKBronxitikTipAnswers = {
    1: "1",
    2: "1",
    3: "1",
    4: "2",
    5: "1",
    6: "2",
    7: "1",
    8: "2",
    9: "1",
    10: "2",
    11: "1",
    12: "1",
    13: "1",
    14: "2",
    15: "2",
  }
  
  const SOOKEmfizematozTipAnswers = {
    1: "2",
    2: "1",
    3: "1",
    4: "2",
    5: "1",
    6: "2",
    7: "1",
    8: "1",
    9: "1",
    10: "2",
    11: "3",
    12: "2",
    13: "2",
    14: "2",
    15: "2",
  }
  
  const SOOKAralashTipAnswers = {
    1: ["1", "2"],
    2: "1",
    3: "1",
    4: "2",
    5: "1",
    6: "2",
    7: "1",
    8: "2",
    9: "1",
    10: "2",
    11: "2",
    12: "3",
    13: "2",
    14: "2",
    15: "2",
  }
  
  function calculatePercentage(answers: ParametrAnswers, correctAnswers: { [key: number]: string | string[] }) {
    let correctCount = 0
    const totalQuestions = Object.keys(correctAnswers).length
  
    for (const [key, value] of Object.entries(correctAnswers)) {
      const answerKey = Number.parseInt(key) - 1 // Adjust for 0-based index
      if (Array.isArray(value)) {
        if (value.includes(answers[answerKey])) {
          correctCount++
        }
      } else if (answers[answerKey] === value) {
        correctCount++
      }
    }
  
    return (correctCount / totalQuestions) * 100
  }
  
  export function calculateResults(answers: ParametrAnswers): { [key: string]: number } {
    const bronxitikPercentage = calculatePercentage(answers, SOOKBronxitikTipAnswers)
    const emfizematozPercentage = calculatePercentage(answers, SOOKEmfizematozTipAnswers)
    const aralashPercentage = calculatePercentage(answers, SOOKAralashTipAnswers)
  
    console.log("Calculated percentages:", { bronxitikPercentage, emfizematozPercentage, aralashPercentage }) // Debug log
  
    return {
      "СЎОК бронхитик тип": Math.round(bronxitikPercentage * 100) / 100,
      "СЎОК эмфизематоз тип": Math.round(emfizematozPercentage * 100) / 100,
      "СЎОК аралаш тип": Math.round(aralashPercentage * 100) / 100,
    }
  }
  
  