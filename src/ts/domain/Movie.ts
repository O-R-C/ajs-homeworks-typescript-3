import Buyable from '../Interfaces/Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly country: string,
    readonly title: string,
    readonly genre: string[],
    readonly time: number
  ) {}
}
