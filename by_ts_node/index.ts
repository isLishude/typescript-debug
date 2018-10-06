export default class MyMath {
  public static add(x: number, y: number): number {
    return x + y;
  }

  public static minus(x: number, y: number): number {
    return x - y;
  }

  /**
   * Division number
   * @param x number
   * @param y number
   * @throws Can't division zero
   * @returns division result
   */
  public static div(x: number, y: number): number {
    if (y === 0) {
      throw new Error("Can't division zero.");
    }
    return x / y;
  }
}
