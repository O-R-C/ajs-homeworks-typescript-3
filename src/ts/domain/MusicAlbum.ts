import Unique from '../Classes/Unique';
import Buyable from '../Interfaces/Buyable';

export default class MusicAlbum extends Unique implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number
  ) {
    super();
  }
}

