'use client'
import Image from 'next/image'
import { Headline } from './Headline'
import { useEffect } from 'react'

export function Main(props: any) {
    const content: string = 'test text';
    const textCss: string = 'text-red-500';
    const ITEMS: any = [
        {
            href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            class: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
            target: "_blank",
            rel: "noopener noreferrer",
            h2_class: "mb-3 text-2xl font-semibold",
            h2_text: "Docs",
            span_class: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
            p_class: "m-0 max-w-[30ch] text-sm opacity-50",
            p_text: "Find in-depth information about Next.js features and API.",
        },
        {
            href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
            class: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
            target: "_blank",
            rel: "noopener noreferrer",
            h2_class: "mb-3 text-2xl font-semibold",
            h2_text: "Learn",
            span_class: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
            p_class: "m-0 max-w-[30ch] text-sm opacity-50",
            p_text: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
        },
        {
            href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            class: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
            target: "_blank",
            rel: "noopener noreferrer",
            h2_class: "mb-3 text-2xl font-semibold",
            h2_text: "Templates",
            span_class: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
            p_class: "m-0 max-w-[30ch] text-sm opacity-50",
            p_text: "Explore the Next.js 13 playground.",
        },
        {
            href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            class: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
            target: "_blank",
            rel: "noopener noreferrer",
            h2_class: "mb-3 text-2xl font-semibold",
            h2_text: "Deploy",
            span_class: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
            p_class: "m-0 max-w-[30ch] text-sm opacity-50",
            p_text: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
        },

    ]

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-0">
            <p className={textCss}>{content}</p>
            <Headline onClick={() => alert('clicked!!')} > foo</Headline>
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                {props.children}
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                {ITEMS.map((item: any, index: number) => {
                    return (
                        <a key={index}
                            href={item.href}
                            className={item.class}
                            target={item.target}
                            rel={item.rel}
                        >
                            <h2 className={item.h2_class}>
                                {item.h2_text}{' '}
                                <span className={item.span_class}>
                                    -&gt;
                                </span>
                            </h2>
                            <p className={item.p_class}>
                                {item.p_text}
                            </p>
                        </a>
                    )
                })}


            </div>
        </main>
    )
}
