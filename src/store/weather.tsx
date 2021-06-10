import { configureStore, createSlice } from "@reduxjs/toolkit";

type WeatherType = {
  cod: number;
  name: String;
  dt: number;
  id: number;
  main: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  sys: { country: String; temp_max: number; temp_min: number };
  timezone: number;
  visibility: number;
  weather: [{ description: String; icon: String; main: String }];
  wind: { deg: number; speed: number };
  message: String;
};
type State = {
  weather: WeatherType | null;
  city: string;
};
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
    city: "",
  },
  reducers: {
    setWeather(state: State, action) {
      state.weather = action.payload;
    },
    setCity(state: State, action) {
      state.city = action.payload;
    },
  },
});

export const weatherAction = weatherSlice.actions;

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
