import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Book } from '../../gql-codegen/graphql';
import { RootState } from '.';

export interface BookState {
  books: Array<Book | null>;
}

const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Array<Book | null>>) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.actions;

export const selectBooks = (state: RootState) => state.book.books;

export default bookSlice.reducer;
