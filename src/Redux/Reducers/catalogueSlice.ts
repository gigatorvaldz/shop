import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostI } from "../../Types/defaultTypes";
import { posts } from "./db";
import { filterKeys } from "../../Hooks/hooks";
import { CheckBoxI } from "../../Components/UI/CheckboxGroup/CheckboxGroup";

interface CatalogueState {
  posts: Array<PostI>;
  makerSortCheckBoxes: Array<CheckBoxI>;
  makerSearchInput: string;
  sortBy: filterKeys;
  makerShowMore: boolean;
  priceFilter: { min: number, max: number }
}

const makerSortCheckBoxes: Array<CheckBoxI> = [
  {
    id: "Grifon",
    label: "Grifon",
    isChecked: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
    },
  },
  {
    id: "Boyscout",
    label: "Boyscout",
    isChecked: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
    },
  },
  {
    id: "Paclan",
    label: "Paclan",
    isChecked: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
    },
  },
  {
    id: "Булгари Грин",
    label: "Булгари Грин",
    isChecked: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
    },
  },
  {
    id: "Нэфис",
    label: "Нэфис",
    isChecked: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
    },
  },
];


const initialState = {
  posts,
  makerSortCheckBoxes,
  makerSearchInput: "",
  makerShowMore: false,
  sortBy: "name",
  priceFilter: { min: 10, max: 10000 },
} as CatalogueState;

const catlogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    createPost(state, action: PayloadAction<PostI>) {
      let currentPosts = state.posts;
      state.posts = [...currentPosts, action.payload];
    },
    deletePost(state, action: PayloadAction<number>) {
      let currentPosts = state.posts;
      currentPosts.filter((post) => post.code !== action.payload);
    },
    setSortBy(state, action: PayloadAction<filterKeys>) {
      state.sortBy = action.payload;
    },
    setMinPriceFilter(state, action: PayloadAction<number>) {
      state.priceFilter.min = action.payload;
    },
    setMaxPriceFilter(state, action: PayloadAction<number>) {
      state.priceFilter.max = action.payload;
    },
    setMakerSearchInput(state, action: PayloadAction<string>) {
      state.makerSearchInput = action.payload;
    },
    toggleMakerShowMore(state) {
      state.makerShowMore = !state.makerShowMore;
    }
  },
});

export const {
  createPost,
  deletePost, setSortBy,
  setMaxPriceFilter,
  setMinPriceFilter,
  setMakerSearchInput,
  toggleMakerShowMore
} = catlogueSlice.actions;
export default catlogueSlice.reducer;
