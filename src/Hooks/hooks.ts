import { useMemo } from "react"
import { CheckBoxI } from "../Components/UI/CheckboxGroup/CheckboxGroup";
import { PostI } from "../Types/defaultTypes";


function createEnum<T extends { [P in keyof T]: P }>(o: T) {
    return o
}

const filterKeysEnum = createEnum({
    name: 'name',
    code: 'code',
    price: 'price'
});

export type filterKeys = keyof (typeof filterKeysEnum);

type sortProps = {
    filter: filterKeys;
    posts: Array<PostI>;
}

type sortByPriceProps = {
    filter: { min: number, max: number };
    posts: Array<PostI>;
}

export const useSortPosts = ({ filter, posts }: sortProps): Array<PostI> => {
    const sortedPosts = useMemo(() => {
        if (filter === "name") {

            return [...posts].sort((a, b) => b[filter].toString().localeCompare(a[filter].toString()))
        }
        else if (filter === "code" || filter === "price") {
            return [...posts].sort((a, b) => Number(a[filter]) - Number(b[filter]))
        }
        else {

            return posts
        }
    }, [filter, posts])
    return sortedPosts;
}

export const useSortPostsByPrice = ({ filter, posts }: sortByPriceProps): Array<PostI> => {
    const sortedPosts = useMemo(() => {
        return [...posts].filter(el => {
            if (filter.min <= el["price"] && filter.max >= el["price"]) return true;
            else return false;
        })
    }, [filter, posts])
    return sortedPosts;
}

export const useAllSortPosts = (posts: Array<PostI>, sortFilter: filterKeys, priceFilter: { min: number, max: number }) => {
    let sortingPosts = useSortPosts({ filter: sortFilter, posts })
    sortingPosts = useSortPostsByPrice({ filter: priceFilter, posts: sortingPosts })
    return sortingPosts;
}

export const useSortCheckBoxes = (checkBoxes: Array<CheckBoxI>, makerSearchInput: string, isShowMore: boolean) => {
    const sortedCheckBoxes = useMemo(() => {
        let slicedCheckBoxes = checkBoxes;
        if (!isShowMore) {
            slicedCheckBoxes = slicedCheckBoxes.slice(0, 4);
        }

        if (makerSearchInput === "" || makerSearchInput === undefined) {
            return slicedCheckBoxes;
        }

        return slicedCheckBoxes.filter(cb => cb.id.includes(makerSearchInput))
    }, [checkBoxes, makerSearchInput, isShowMore])
    return sortedCheckBoxes;
}
