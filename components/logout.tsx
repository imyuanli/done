'use client';

import {signOut} from "next-auth/react";

const Logout = () => {
    return (
        <div>
            <button onClick={() => signOut()}>
                推出
            </button>
        </div>
    );
}


export default Logout