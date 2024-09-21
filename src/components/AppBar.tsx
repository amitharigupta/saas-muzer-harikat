"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {

    const session = useSession();

    return <>
        <div className="flex jsutify-between" style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Muzer</h1>
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>Logout</button>}
                <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>Sign In</button>
            </div>
        </div>
    </>
}