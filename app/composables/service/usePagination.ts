import type { PostsResponse } from "~/entities/posts.types"

export const usePagination = (data: globalThis.Ref<PostsResponse | undefined, PostsResponse | undefined>) => {
    const pages = computed(() => Math.ceil(data.value ? data.value.length / 8 : 0))

    const activePage = shallowRef<number>(1)


    const setActivePage = (page: number) => {

        if(page <= 1) page = 1
        if(page > pages.value) page = pages.value
       
        activePage.value = page
    }


    const paginateWithKeyboard = (event: KeyboardEvent) => {

        console.log(event);
        
        if (event.key === 'ArrowLeft') {
            setActivePage(activePage.value - 1)
        } else if (event.key === 'ArrowRight') {
            setActivePage(activePage.value + 1)
        }
    }


    

    const dataPagination = computed(() => data.value ? data.value.slice((activePage.value - 1) * 8, activePage.value * 8) : [])

    return {
        pages,
        dataPagination,
        activePage,
        setActivePage,
        paginateWithKeyboard
    }
}