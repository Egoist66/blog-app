import type { PostsResponse } from "~/entities/posts.types"

/**
 * Fetches posts from the API.
 *
 * @return {Promise<{
 *     data: PostsResponse | undefined;
 *     error: Error | undefined;
 *     status: FetchStatus;
 * }>} An object containing the fetch status, the fetched posts data, and an error if any occurred.
 */
export const usePosts = async () => {


    const {public: {apiUrl}} = useRuntimeConfig()

    const getPosts = async () => {
        return useFetch<PostsResponse>(apiUrl, {
            method: 'get',
            onRequestError: (err) => console.log(err),
            key: 'posts',
        })
    }


    const {data, error, status} = await getPosts()
    const {dataPagination, setActivePage, paginateWithKeyboard, activePage, pages} = usePagination(data)


    return {
        dataPagination,
        pages,
        setActivePage,
        paginateWithKeyboard,
        activePage,
        error,
        status
    }
}