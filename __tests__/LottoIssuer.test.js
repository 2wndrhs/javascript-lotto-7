import LottoIssuer from '../src/Model/LottoIssuer.js';

describe('LottoIssuer 클래스 테스트', () => {
  test('구입 금액이 0보다 크고 1000원 단위일 경우 예외가 발생하지 않는다.', () => {
    expect(() => new LottoIssuer('3000')).not.toThrow();
  });

  test('구입 금액이 0보다 크지만 1000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => new LottoIssuer('3500')).toThrow('[ERROR]');
  });

  test('구입 금액이 0보다 작고 1000원 단위일 경우 예외가 발생한다.', () => {
    expect(() => new LottoIssuer('-3000')).toThrow('[ERROR]');
  });

  test('구입 금액이 0일 경우 예외가 발생한다.', () => {
    expect(() => new LottoIssuer('0')).toThrow('[ERROR]');
  });

  test('구입 금액이 소수일 경우 예외가 발생한다.', () => {
    expect(() => new LottoIssuer('1000.5')).toThrow(
      '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
    );
  });

  test('구입 금액이 숫자가 아닌 문자열일 경우 예외가 발생한다.', () => {
    expect(() => new LottoIssuer('abc')).toThrow('[ERROR]');
  });
});
