import Movie from '../domain/Movie';

describe('correct create class', () => {
  const movie = new Movie(
    1111,
    'The Avengers',
    999,
    2012,
    'USA',
    'Avengers assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137
  );

  let fields = [
    ['id', 'number'],
    ['name', 'string'],
    ['price', 'number'],
    ['year', 'number'],
    ['country', 'string'],
    ['title', 'string'],
    ['genre', 'object'],
    ['time', 'number'],
  ];

  const checkClass = (object: object) => {
    return fields.every((item) => {
      const [field, value] = item;
      // @ts-expect-error: 7053
      return typeof object?.[field] === value;
    });
  };

  describe('check fields class', () => {
    it('true', () => {
      expect(checkClass(movie)).toBeTruthy();
    });

    it('false', () => {
      fields = [...fields, ['1', 'number']];
      expect(checkClass(movie)).toBeFalsy();
    });
  });
});
