import Link from "next/link";
import {Separator} from "@/components/ui/separator";

const ShadowLink = ({href, name, active}: any) => {
    return (
        <Link className={`group relative`} href={href}>
            <div className={'text-base'}>
                {name}
            </div>
            {active && <Separator className={'h-[2px] bg-black absolute top-10'}/>}
            <div
                className={'absolute -inset-y-2 -inset-x-2 md:-inset-x-4 -z-10 scale-95 bg-zinc-200 sm:rounded-md opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 rounded-md'}/>
        </Link>
    );
}


export default ShadowLink