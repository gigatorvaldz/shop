import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cartItemI, PostI } from "../../Types/defaultTypes";
import { posts } from "./db";
import { filterKeys } from "../../Hooks/hooks";
import { CheckBoxI } from "../../Components/UI/CheckboxGroup/CheckboxGroup";

export type selectedTagsT = {
  hands: boolean;
  body: boolean;
}
interface CatalogueState {
  posts: Array<PostI>;
  makerSortCheckBoxes: Array<CheckBoxI>;
  makerSearchInput: string;
  sortedMakers: Array<string>;
  sortBy: filterKeys;
  makerShowMore: boolean;
  priceFilter: { min: number, max: number };
  sortTags: Array<string>;
  selectedTags: selectedTagsT;
  currentPage: number;
  currentCart: Array<cartItemI>;
  cartPosts: Array<PostI>
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
  sortTags: [],
  selectedTags: {
    hands: false,
    body: false,
  },
  currentPage: 0,
  currentCart: [],
  cartPosts: []
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
    },
    toggleSortTags(state, action: PayloadAction<string>) {
      if (state.sortTags.includes(action.payload)) {
        state.sortTags.splice(state.sortTags.findIndex(el => el === action.payload), 1)
      }
      else {
        state.sortTags.push(action.payload);
      }
    },
    setSelectedTags(state, action: PayloadAction<selectedTagsT>) {
      state.selectedTags = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    addToCart(state, action: PayloadAction<cartItemI>) {
      if (state.cartPosts.find(el => el.code === action.payload.code)) {
        state.currentCart[state.currentCart.findIndex(el => el.code === action.payload.code)].quantity = action.payload.quantity;
        return;
      }

      let post = state.posts.find(el => el.code == action.payload.code);
      if (post !== undefined) {
        state.cartPosts.push(post);
        state.currentCart.push({ code: post.code, quantity: action.payload.quantity });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartPosts = state.cartPosts.filter(el => el.code !== action.payload)
      state.currentCart = state.currentCart.filter(el => el.code !== action.payload)
    },
    setCartItemQuantity(state, action: PayloadAction<cartItemI>) {
      let post = state.currentCart.find(el => el.code == action.payload.code);
      if (post !== undefined) {
        post.quantity = action.payload.quantity;
      }
    },
    incrementCartItemQuantity(state, action: PayloadAction<number>) {
      let post = state.currentCart.find(el => el.code == action.payload);
      if (post !== undefined) {
        post.quantity++;
      }
    },
    decrementCartItemQuantity(state, action: PayloadAction<number>) {
      let post = state.currentCart.find(el => el.code == action.payload);
      if (post !== undefined) {
        if (post.quantity > 1) post.quantity--;
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
  toggleSortedMakers,
  toggleSortTags,
  setSelectedTags,
  setCurrentPage,
  addToCart,
  removeFromCart,
  setCartItemQuantity,
  incrementCartItemQuantity,
  decrementCartItemQuantity
} = catlogueSlice.actions;
export default catlogueSlice.reducer;
