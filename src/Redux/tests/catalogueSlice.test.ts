import { PostI } from "../../Types/defaultTypes"
import catalogueReducer, {
    createPost,
    setSortBy
} from "../Reducers/catalogueSlice"

describe("Catalogue Slice tests", () => {
    it("Cart init test", () => {
        const result = catalogueReducer(undefined, { type: "" })

        expect(result.currentCart).toEqual([])
    })
    it("Create Post test", () => {
        const post: PostI = {
            imageUrl: "post-1.png",
            name: "средство для мытья посуды Crystal",
            type: "volume",
            code: 123,
            maker: "Булгари Грин",
            brand: "AOS",
            description:
                "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
            price: 2446,
            tags: ["hands"],
        }

        const action = { type: createPost.type, payload: post }
        const result = catalogueReducer(undefined, action)

        expect(result.posts.find(el => el.code === 123)).toEqual(post)
    })
    it("Set sort test", () => {
        const action = { type: setSortBy.type, payload: "name" }
        const result = catalogueReducer(undefined, action)

        expect(result.sortBy).toBe("name")
    })
})