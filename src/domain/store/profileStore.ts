import {TStudent} from '@/data/types';
import {create} from 'zustand';

type TUser = TStudent.Params;

type State = {
  user?: TUser;
};

type Action = {
  setUser: ({user}: {user: TUser}) => void;
};

const initialStates: State = {
  user: undefined,
};

export const useProfileStore = create<State & Action>(set => ({
  ...initialStates,
    setUser: user => set(state => ({...state, ...user}))
}));

