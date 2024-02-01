import Buyable from '../Interfaces/Buyable';

export default class MusicAlbum implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number
  ) {}
}
