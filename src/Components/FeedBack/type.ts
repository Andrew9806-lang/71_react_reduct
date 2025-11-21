export interface FeedabackTypes{
    like:number
    dislike:number
    addLike:()=>void
    addDislike:()=>void
    reset?:()=>void
}