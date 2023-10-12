import {Separator} from "@/components/ui/separator";
import GoogleLogin from "@/app/login/components/google-login";
import GithubLogin from "@/app/login/components/github-login";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import EmailLogin from "@/app/login/components/email-login";

const Login = async () => {
    return (
        // <div className={'h-screen w-full grid grid-cols-2'}>
        //     <div className={'bg-black relative text-white'}>
        //         <div className={'absolute left-8 top-8 text-4xl font-bold font-mono'}>Done</div>
        //         <div className={'flex flex-col items-start justify-center absolute left-8 bottom-8 pr-16'}>
        //             <p>“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”</p>
        //             <p>Sofia Davis</p>
        //         </div>
        //     </div>
        //     <div className={''}>
        //
        //     </div>
        // </div>
        <div className={'h-screen w-full flex justify-center items-center flex-col'}>
            <div className={'w-full max-w-xs flex justify-center items-center flex-col flex-1'}>
                <h1 className={'text-3xl font-bold mb-8'}>Login to Done</h1>
                <EmailLogin/>
                <div className={'w-full relative my-8'}>
                    <span className={'text-sm absolute -top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 bg-white'}>OR CONTINUE WITH</span>
                    <Separator/>
                </div>
                <div className={'space-y-4 w-full'}>
                    <GoogleLogin/>
                    <GithubLogin/>
                </div>
            </div>
        </div>
    );
}


export default Login