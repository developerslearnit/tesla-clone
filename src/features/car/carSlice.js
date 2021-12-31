import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cars: ["Model S", "Modelx 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    initialState,
    name: 'car',
    reducers: {}
});

export const selectCars = state => state.car.cars;

export default carSlice.reducer;