import { create } from "zustand";

type State = {
    likes: number;
    comments: number;
}

type Action = {
    setLike: ({ likes }: { likes: number }) => void;
    setComments: ({ comments }: { comments: number} ) => void;
}


const initialStates: State = {
    likes: 0,
    comments: 0,
}


export const useFeedStore = create<State & Action>(set => ({
    ...initialStates,
    setLike: like => set(state => ({ ...state, ...like })),
    setComments: comment => set(state => ({...state, ...comment}))
}))