import { log } from "console";

export default class MyMath {

  public static add(x: number, y: number) {
    return x + y;
  }

  public static minus(x: number, y: number) {
    return x - y;
  }

  public static div(x: number, y: number) {
    console.log("test");
    return x / y;
  }
}
