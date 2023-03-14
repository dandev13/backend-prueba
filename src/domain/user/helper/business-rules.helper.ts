export abstract class BusinessRulesHelper {
  public static nameMinSize: 5;
  public static nameMaxSize: 10;

  /**
   * Method to validate the size of the username
   * @param v string
   * @returns boolean
   */
  public static vNameSize(v: string): boolean {
    return v.length < this.nameMinSize || v.length > this.nameMaxSize
      ? false
      : true;
  }
}
