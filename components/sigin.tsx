'use client'

import {signIn} from "next-auth/react";

const Sigin = () => {
    return (
        <button onClick={()=>{signIn()}}>
            sigin
        </button>
    );
}


export default Sigin