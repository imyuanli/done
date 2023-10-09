'use client'

import {signOut} from "next-auth/react";
import {Button} from "@/components/ui/button";

const LogoutButton = () => {
    return (
        <Button onClick={()=>signOut()}>
            Logout
        </Button>
    );
}


export default LogoutButton