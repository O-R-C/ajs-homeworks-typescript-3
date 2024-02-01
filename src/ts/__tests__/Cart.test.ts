import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import YPhone from '../domain/YPhone';
import MusicAlbum from '../domain/MusicAlbum';

const cart = new Cart();

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('add() should add item to cart', () => {
  cart.add(
    new Movie(
      1111,
      'The Avengers',
      999,
      2012,
      'USA',
      'Avengers assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      137
    )
  );

  expect(cart.items.length).toBe(1);
});

test('multi add to cart', () => {
  for (let i = 0; i < 3; i++) {
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new YPhone(10, 'YPhone', 1000, 'bla bla bla'));
  }

  expect(cart.items.length).toBe(4);
});

test('totalCost()', () => {
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.totalCost()).toBe(6899);
});

test('totalCostWithSale()', () => {
  expect(cart.totalCostWithSale(50)).toBe(6899 / 2);
});

test('removeItem()', () => {
  cart.removeItem(1111);

  expect(cart.items.length).toBe(3);
});

