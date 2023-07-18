import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3005/books")
        const data = await res.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const insertBook = createAsyncThunk(
    'book/insertBook',
    async (bookData, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
    
    
        try {
            bookData.userName = getState().auth.author
            const res = await fetch('http://localhost:3005/books/', {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        }
    );

export const deleteBook = createAsyncThunk(
    'book/deleteBook',
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
    
    
        try {
            console.log(data)
            await fetch(`http://localhost:3005/books/${data.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            });
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const bookSlice = createSlice({
    name: 'book',
    initialState: {books: [], isLoading: false},
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state, action) => {
            state.isLoading = true
            
            console.log(action)
        })
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = action.payload
            console.log(action)
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false
            console.log(action)
        })
        builder.addCase(insertBook.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(insertBook.fulfilled, (state, action) => {
            state.books.push(action.payload)
            state.isLoading = false
        })
        builder.addCase(insertBook.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })
        builder.addCase(deleteBook.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteBook.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = state.books.filter((el) => el.id !== action.payload.id)
        })
        builder.addCase(deleteBook.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export default bookSlice.reducer