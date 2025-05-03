/**
 * The function takes an object with the student's answers and compares them with the correct answers.
 * @param {Object} studentAnswers - Student answers in the format { question1: answer1, question2: answer2, ... }.
 * @param {Object} correctAnswers - Correct answers in the same format.
 * @returns {boolean} Returns true if all answers are correct, and false if at least one answer is incorrect.
 */
export function checkStudentKnowledge(studentAnswers, correctAnswers) {
  const studentKeys = Object.keys(studentAnswers);
  const correctKeys = Object.keys(correctAnswers);

  if (studentKeys.length !== correctKeys.length) {
    return false;
  }

  for (let i = 0; i < studentKeys.length; i++) {
    if (studentKeys[i] !== correctKeys[i]) {
      return false;
    }
  }

  for (const key of studentKeys) {
    if (studentAnswers[key] !== correctAnswers[key]) {
      return false;
    }
  }

  return true;
}
