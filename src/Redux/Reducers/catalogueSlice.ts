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
  sortedMakers: Array<string>;
  sortBy: filterKeys;
  makerShowMore: boolean;
  priceFilter: { min: number, max: number }
}

const makerSortCheckBoxes: Array<CheckBoxI> = [
  {
    id: "Grifon",
    label: "Grifon",
    isChecked: false,
  },
  {
    id: "Boyscout",
    label: "Boyscout",
    isChecked: false,
  },
  {
    id: "Paclan",
    label: "Paclan",
    isChecked: false,
  },
  {
    id: "Булгари Грин",
    label: "Булгари Грин",
    isChecked: false,
  },
  {
    id: "Нэфис",
    label: "Нэфис",
    isChecked: false,
  },
];


const initialState = {
  posts,
  makerSortCheckBoxes,
  makerSearchInput: "",
  makerShowMore: false,
  sortedMakers: [],
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
    },
    toggleCheckedMaker(state, action: PayloadAction<string>) {
      let currentCheckBox = state.makerSortCheckBoxes.find(el => el.id === action.payload);
      if (currentCheckBox) {
        currentCheckBox.isChecked = !currentCheckBox?.isChecked;
      }
    },
    toggleSortedMakers(state, action: PayloadAction<string>) {
      if (state.sortedMakers.includes(action.payload)) {
        state.sortedMakers.splice(state.sortedMakers.findIndex(el => el === action.payload), 1)
      }
      else {
        state.sortedMakers.push(action.payload);
      }

    }
  },
});

export const {
  createPost,
  deletePost, setSortBy,
  setMaxPriceFilter,
  setMinPriceFilter,
  setMakerSearchInput,
  toggleMakerShowMore,
  toggleCheckedMaker,
  toggleSortedMakers
} = catlogueSlice.actions;
export default catlogueSlice.reducer;
