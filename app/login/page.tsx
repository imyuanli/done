import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import GoogleLogin from "@/app/login/components/google-login";
import GithubLogin from "@/app/login/components/github-login";

const Login = async () => {

    return (
        <div className={'h-screen w-full flex justify-center items-center flex-col'}>
            <div className={'py-8 px-16 flex justify-start items-center w-full'}>
                Done
            </div>
            <Separator/>
            <div className={'w-full max-w-xs flex justify-center items-center flex-col flex-1'}>
                <h1 className={'text-2xl font-semibold mb-8'}>Login to Done</h1>
                <div className={'space-y-4 w-full'}>
                    <Input
                        type={'text'}
                        placeholder={'Email Address'}
                    />
                    <Button size={'lg'} className={'w-full'}>
                        <Mail className={'mr-2'}/>
                        <span>Continue with Email</span>
                    </Button>
                </div>
                <Separator className={'my-8'}/>
                <div className={'space-y-4 w-full'}>
                    <GoogleLogin/>
                    <GithubLogin/>
                </div>
            </div>
        </div>
    );
}


export default Login