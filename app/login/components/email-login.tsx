'use client'

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react";
import {useEffect, useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {signIn} from "next-auth/react";
import Login from "@/app/login/page";

const EmailLogin = () => {
    const [email, setEmail] = useState('')
    useEffect(() => {
        console.log(email)
    }, [email])
    const {toast} = useToast()
    const handleSendEmailVerification = () => {
        if (!email) {
            toast({
                variant: "destructive",
                description: "Email address is required",
                duration: 2000,
            })
            return
        }
        const reg = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        if (!reg.test(email)) {
            toast({
                variant: "destructive",
                description: "Email address is invalid",
            })
            return;
        }
        signIn('email', {
            email,
            callbackUrl: `${window.location.origin}/dashboard`,
        })
            .then((res)=>{
                if(res){
                    toast({
                        description: "Email sent successfully",
                    })
                }
        })
    }

    return (
        <div className={'space-y-4 w-full'}>
            <Input
                value={email}
                onInput={(e: any) => setEmail(e.target.value)}
                type={'text'}
                placeholder={'Email Address'}
            />
            <Button
                onClick={handleSendEmailVerification}
                size={'lg'}
                className={'w-full'}
            >
                <Mail className={'mr-2'}/>
                <span>Sign In Whit Email</span>
            </Button>
        </div>
    );
}


export default EmailLogin