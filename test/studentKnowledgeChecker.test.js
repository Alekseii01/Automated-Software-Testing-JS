import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';

describe('Student Knowledge Checker', () => {
  it('should return true when all answers are correct', () => {
    const studentAnswers = { question1: 'A', question2: 'B' };
    const correctAnswers = { question1: 'A', question2: 'B' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('should return false when one answer is incorrect', () => {
    const studentAnswers = { question1: 'A', question2: 'B' };
    const correctAnswers = { question1: 'A', question2: 'C' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false when keys are different', () => {
    const studentAnswers = { question1: 'A', question3: 'B' };
    const correctAnswers = { question1: 'A', question2: 'B' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('should return false when number of answers is different', () => {
    const studentAnswers = { question1: 'A' };
    const correctAnswers = { question1: 'A', question2: 'B' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });
});