'use client'
import Linlin from 'next/link';
import { usePathname } from 'next/navigation';

export function Link() {
    const test = 2;
    const pathname = usePathname();
    const handlePage = (pathname === '/');
    console.log(handlePage);

    return (
        <>
            <div className=" m-5 flex justify-center">
                <div className='mx-3 group w-10 overflow-hidden'>
                    <Linlin className={`${handlePage ? 'cursor-default' : null}`} href="/">
                        <p className={`${handlePage ? 'opacity-20' : null} p-0 w-0 text-blue-600 hover:text-blue-800`}>Index</p>
                        <div className={` w-full duration-200 -translate-x-full bg-blue-500 h-0.5  ${handlePage ? null : 'group-hover:translate-x-0 cursor-none'}`}>
                        </div>
                    </Linlin>
                </div>
                <div className='mx-3 group w-10 overflow-hidden'>
                    <Linlin className={`${handlePage ? null : 'cursor-default'}`} href="./about">
                        <p className={`${handlePage ? null : 'opacity-20'} p-0 w-0 text-blue-600 hover:text-blue-800`}>About</p>
                        <div className={`w-full duration-200 -translate-x-full bg-blue-500 h-0.5 ${handlePage ? 'group-hover:translate-x-0' : null} `}>
                        </div>
                    </Linlin>
                    <p className={`text-blue-800 ${test ? 'text-xl' : null}`}>test</p>
                </div>
            </div>
        </>
    )
}
