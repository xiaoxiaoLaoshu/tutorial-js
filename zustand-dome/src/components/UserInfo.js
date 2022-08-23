import React from "react";
import useUserStore from "../store";

export default function UserInfo() {
    const userInfo = useUserStore((state) => state.userInfo);
    const setGlobalUserInfo = useUserStore((state) => state.setGlobalUserInfo);
    const removeGlobalUserInfo = useUserStore((state) => state.removeGlobalUserInfo);
    return (
        <>
            <h2>{Object.values(userInfo)}</h2>
            <button onClick={() => setGlobalUserInfo({ name: "tom", number: "1893231313" })}>set</button>
            <button onClick={() => removeGlobalUserInfo()}>remove</button>
        </>
    );
}
