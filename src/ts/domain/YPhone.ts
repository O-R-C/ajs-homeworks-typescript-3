import Expandable from '../Classes/Expandable';
import Buyable from '../Interfaces/Buyable';

export default class YPhone extends Expandable implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly description: string
  ) {
    super();
  }
}
