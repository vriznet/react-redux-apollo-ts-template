import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from './components/GlobalStyles';
import { decrement, increment, selectCount } from './redux/module/counterSlice';
import { useQuery } from '@apollo/client';
import { BOOKS_QUERY } from './graphqls/book.queries';
import { useEffect } from 'react';
import { selectBooks, setBooks } from './redux/module/bookSlice';

const App = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCount);
  const reduxBooks = useSelector(selectBooks);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const { loading: bookQueryLoading, data: bookQueryData } =
    useQuery(BOOKS_QUERY);

  useEffect(() => {
    if (
      !bookQueryLoading &&
      bookQueryData &&
      bookQueryData.books &&
      bookQueryData.books.length > 0
    ) {
      dispatch(setBooks([...bookQueryData.books]));
    }
  }, [bookQueryLoading, bookQueryData]);

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Basic Counter with Redux</h1>
        <div>{counterValue}</div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      <div>
        <h1>Books</h1>
        {reduxBooks.length <= 0 ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {reduxBooks?.map((book, index) => (
              <li key={index}>
                {book?.title} - {book?.author}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
