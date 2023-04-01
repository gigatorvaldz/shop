import { useMemo } from "react"
import { CheckBoxI } from "../Components/UI/CheckboxGroup/CheckboxGroup";
import { PostI } from "../Types/defaultTypes";


function createEnum<T extends { [P in keyof T]: P }>(o: T) {
    return o
}

const filterKeysEnum = createEnum({
    name: 'name',
    code: 'code',
    price: 'price',
    reverseName: 'reverseName',
    reversePrice: 'reversePrice'
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
            return [...posts].sort((a, b) => a[filter].toString().localeCompare(b[filter].toString()))
        }
        else if (filter === "code" || filter === "price") {
            return [...posts].sort((a, b) => Number(a[filter]) - Number(b[filter]))
        }
        else if (filter === "reverseName") {
            return [...posts].sort((a, b) => b["name"].toString().localeCompare(a["name"].toString()))
        }
        else if (filter === "reversePrice") {
            return [...posts].sort((a, b) => Number(b["price"]) - Number(a["price"]))
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

export const useSortPostsByMaker = (posts: Array<PostI>, makers: Array<string>) => {
    const sortedPosts = useMemo(() => {
        if (makers.length > 0) {
            return posts.filter(el => makers.indexOf(el.maker) > -1);
        }
        return posts;
    }, [posts, makers])
    return sortedPosts;
}

export const useSortPostsByTags = (posts: Array<PostI>, tags: Array<string>) => {
    const sortedPosts = useMemo(() => {

        if (tags.length > 0) {

            let taggedPosts = posts.filter(post => {
                let isTagged = false;
                post.tags.forEach(tag => {
                    if (tags.indexOf(tag) > -1) {
                        isTagged = true;
                        return;
                    }
                })
                return isTagged;
            })

            return taggedPosts;
        }
        return posts;
    }, [posts, tags])
    return sortedPosts;
}

export const useAllSortPosts = (posts: Array<PostI>, sortFilter: filterKeys, priceFilter: { min: number, max: number }, makers: Array<string>, tags: Array<string>) => {
    let sortingPosts = useSortPosts({ filter: sortFilter, posts })
    sortingPosts = useSortPostsByPrice({ filter: priceFilter, posts: sortingPosts })
    sortingPosts = useSortPostsByMaker(sortingPosts, makers)
    sortingPosts = useSortPostsByTags(sortingPosts, tags)

    return sortingPosts;
}

export const useSortCheckBoxes = (checkBoxes: Array<CheckBoxI>, makerSearchInput: string) => {
    const sortedCheckBoxes = useMemo(() => {
        let slicedCheckBoxes = checkBoxes;
        if (makerSearchInput === "" || makerSearchInput === undefined) {
            return slicedCheckBoxes;
        }

        return slicedCheckBoxes.filter(cb => cb.id.includes(makerSearchInput))
    }, [checkBoxes, makerSearchInput])
    return sortedCheckBoxes;
}

export const useSliceCheckBoxes = (checkBoxes: Array<CheckBoxI>, isShowMore: boolean, sliceTo: number) => {
    const sortedCheckBoxes = useMemo(() => {
        if (!isShowMore) {
            return checkBoxes.slice(0, sliceTo)
        }
        return checkBoxes
    }, [checkBoxes, isShowMore])
    return sortedCheckBoxes;
}