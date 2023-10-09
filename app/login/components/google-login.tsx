'use client'

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";
import {Chrome} from "lucide-react";

const GoogleLogin = () => {
    const searchParams = useSearchParams()
    const callbackUrl: any = searchParams.get('callbackUrl')

    return (
        <Button
            onClick={() => signIn('google', {callbackUrl})}
            size={'lg'}
            variant={'outline'}
            className={'w-full'}
        >
            <Chrome className={'mr-2'}/>
            Continue with Google
        </Button>
    );
}


export default GoogleLogin