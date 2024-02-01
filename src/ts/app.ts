import Book from './domain/Book';
import Cart from './service/Cart';
import Movie from './domain/Movie';
import YPhone from './domain/YPhone';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
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

cart.add(new YPhone(10, 'YPhone', 1000, 'bla bla bla'));
cart.add(new YPhone(10, 'YPhone', 1000, 'bla bla bla'));
cart.add(new YPhone(10, 'YPhone', 1000, 'bla bla bla'));

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.removeItem(1111);

console.log(cart.items);
console.log(cart.totalCost());
console.log(cart.totalCostWithSale(50));

