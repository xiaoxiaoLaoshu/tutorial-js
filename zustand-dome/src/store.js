import create from "zustand";
import { devtools } from "zustand/middleware";

const useUserStore = create(
    devtools(
        (set) => ({
            userInfo: {},
            setGlobalUserInfo: (payload) => set((state) => ({ userInfo: { ...payload } })),
            removeGlobalUserInfo: () => set({ userInfo: {} }),
        }),
        { name: "UserStore" }
    )
);

export default useUserStore;
