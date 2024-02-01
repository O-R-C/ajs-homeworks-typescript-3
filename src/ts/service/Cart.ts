import Buyable from '../Interfaces/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  /**
   * добавляет элемент в корзину,
   * или увеличивает кол-во у неуникальных элементов
   * @param item добавляемый элемент
   */
  add(item: Buyable): void {
    const foundItem = [...this._items].find((elem) => elem.id === item.id);

    if (foundItem && foundItem.canBeAdded) {
      foundItem.count += 1;
    }

    if (!foundItem) {
      this._items.push(item);
    }
  }

  /**
   * @returns список элементов в корзине
   */
  get items(): Buyable[] {
    return [...this._items];
  }

  /**
   * считает стоимость всех элементов в корзине
   * @returns {Number} стоимость всех элементов в корзине
   */
  totalCost(): number {
    return [...this._items].reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
  }

  /**
   * считает стоимость всех элементов в корзине с учётом скидки
   * @returns {Number} стоимость всех элементов в корзине с учётом скидки
   */
  totalCostWithSale(sale: number): number {
    const cost = this.totalCost();
    return cost - (cost * sale) / 100;
  }

  /**
   * удаляет элемент из корзины
   * @param id айдишник элемента
   */
  removeItem(id: number): void {
    this._items = [...this._items].filter((item) => item.id !== id);
  }
}

