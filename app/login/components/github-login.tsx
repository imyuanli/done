'use client'

import {Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

const GithubLogin = () => {

    const searchParams = useSearchParams()
    const callbackUrl: any = searchParams.get('callbackUrl')

    return (
        <Button
            onClick={() => signIn('github', {callbackUrl})}
            size={'lg'}
            variant={'outline'}
            className={'w-full'}
        >
            <Github className={'mr-2'}/>
            Continue with Github
        </Button>
    );
}


export default GithubLogin