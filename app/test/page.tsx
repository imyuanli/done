import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Logout from "@/components/logout";

const Test = async () => {
    const session = await getServerSession(authOptions)

    console.log(session)

    if (!session) {
        redirect('/login?callbackUrl=/test')
    }

    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>
                    This is a <span className='text-emerald-500'>server-side</span>{' '}
                    protected page
                </h1>
                <h2 className='mt-4 font-medium'>You are logged in as:</h2>
                <p className='mt-4'>{session?.user?.name}</p>
            </div>
            <Logout/>
        </section>
    )
}

export default Test