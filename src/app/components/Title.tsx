'use client'
import { useEffect } from "react";

export function Title(props: any) {
    return (
        <>
            <h3 className='title_h3 text-3xl w-full text-center my-1 text-blue-900 z-50'>{props.title} page</h3>
        </>)
}
