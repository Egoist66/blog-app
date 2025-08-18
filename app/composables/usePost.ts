import type { Post } from "~/entities/posts.types"


/**
 * Fetches a single post from the API by its ID.
 *
 * @param {string | number} id - The ID of the post to fetch.
 * @return {Promise<{
 *     error: Error | undefined;
 *     data: Post | undefined;
 *     status: FetchStatus;
 *     refresh: () => Promise<void>;
 * }>} An object containing the fetch status, the fetched post data, and an error if any occurred. The 'refresh' function allows the fetch to be re-run.
 */
export const usePost = async (id: string | number) => {

    const {public: {apiUrl}} = useRuntimeConfig()



    const getCurrentPost = async (id: string | number) => {
        
        return useFetch<Post>(apiUrl + id, {
            method: 'get',
            onRequestError: (err) => console.log(err),
            key: `post-${id}`,
        })
    }


    const {error, data, status, refresh} = await getCurrentPost(id)

    return {
        error,
        data,
        status,
        refresh
    }

}