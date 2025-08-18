import type { PostsResponse } from "~/entities/posts.types"

export const usePosts = async () => {


    const {public: {apiUrl}} = useRuntimeConfig()

    const getPosts = async () => {
        await delay(1000)
        return useFetch<PostsResponse>(apiUrl, {
            method: 'get',
            key: 'posts',
            transform: (data) => data
        })
    }


    const {data, error, status} = await getPosts()


    return {
        data,
        error,
        status
    }
}