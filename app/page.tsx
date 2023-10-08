import Header from "@/components/header";
import Main from "@/components/main";

export default function Home() {

    return (
        <div className={'flex justify-center items-center flex-col w-full'}>
            <Header/>
            <main className={'container'}>
               <Main/>
            </main>
        </div>
    )
}
