import { test } from "@jest/globals";
import { PostI } from "../Types/defaultTypes";
import { useSortPosts } from "./hooks";
import { render, renderHook } from "@testing-library/react";

let mockPosts: Array<PostI>;

beforeEach(() => {
  mockPosts = [
    {
      imageUrl: "post-1.png",
      name: "b",
      type: "volume",
      code: 4604049097548,
      maker: "Нэфис",
      brand: "AOS",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 1,
      tags: ["hands"],
    },
    {
      imageUrl: "post-2.png",
      name: "a",
      type: "weight",
      code: 4604049097549,
      maker: "Нэфис",
      brand: "ARIEL",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 3,
      tags: [],
    },
    {
      imageUrl: "post-3.png",
      name: "c",
      type: "weight",
      code: 4604049097550,
      maker: "Нэфис",
      brand: "BiMAX",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 2,
      tags: ["hands"],
    },
  ];
});

test("sort by name test", () => {
  let expectedResult = [
    {
      imageUrl: "post-2.png",
      name: "a",
      type: "weight",
      code: 4604049097549,
      maker: "Нэфис",
      brand: "ARIEL",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 3,
      tags: [],
    },
    {
      imageUrl: "post-1.png",
      name: "b",
      type: "volume",
      code: 4604049097548,
      maker: "Нэфис",
      brand: "AOS",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 1,
      tags: ["hands"],
    },
    {
      imageUrl: "post-3.png",
      name: "c",
      type: "weight",
      code: 4604049097550,
      maker: "Нэфис",
      brand: "BiMAX",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 2,
      tags: ["hands"],
    },
  ];

  const view = renderHook(() =>
    useSortPosts({ filter: "name", posts: mockPosts })
  );

  expect(view.result.current).toStrictEqual(expectedResult);
});

test("sort by price test", () => {
  let expectedResult = [
    {
      imageUrl: "post-1.png",
      name: "b",
      type: "volume",
      code: 4604049097548,
      maker: "Нэфис",
      brand: "AOS",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 1,
      tags: ["hands"],
    },
    {
      imageUrl: "post-3.png",
      name: "c",
      type: "weight",
      code: 4604049097550,
      maker: "Нэфис",
      brand: "BiMAX",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 2,
      tags: ["hands"],
    },
    {
      imageUrl: "post-2.png",
      name: "a",
      type: "weight",
      code: 4604049097549,
      maker: "Нэфис",
      brand: "ARIEL",
      description:
        "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
      price: 3,
      tags: [],
    },
  ];

  const view = renderHook(() =>
    useSortPosts({ filter: "price", posts: mockPosts })
  );

  expect(view.result.current).toStrictEqual(expectedResult);
});
