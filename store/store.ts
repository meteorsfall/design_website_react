import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
	name: 'dropdowns',
	initialState: [] as string[],
	reducers: {
		toggleDropdown(state, action: PayloadAction<string>) {
			const index = state.indexOf(action.payload);
			if (index > -1) {
				state.splice(index, 1);
			} else {
				state.push(action.payload);
			}
		},
		closeAllDropdowns: () => []
	}
});

export const { toggleDropdown, closeAllDropdowns } = dropdownSlice.actions;

export const store = configureStore({
	reducer: {
		dropdowns: dropdownSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
