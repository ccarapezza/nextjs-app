'use client'
import { useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchFilter({name}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const ref = useRef(null);

    const onSearch = async () => {
        if(!name){
            return;
        }

        const searchValue = ref.current.value;

        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.set(name, searchValue);

        console.log('Buscando:', searchValue);

        router.push(`${pathname}?${urlSearchParams.toString()}`);
    }

    const onClear = async () => {
        if(!name){
            return;
        }

        ref.current.value = '';
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete(name);
        router.push(`${pathname}?${urlSearchParams.toString()}`);
    }

    useEffect(() => {
        const search = searchParams.get(name);
        if (search&&name) {
            ref.current.value = search;
        }
    }, [ref, searchParams, name]);

    useEffect(() => {
        const search = searchParams.get(name);
        if(!search&&name){
            ref.current.value = '';
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.delete(name);
        }
    }, [ref, searchParams, name]);

    return (
        <div className="flex gap-4 items-ce justify-stretch py-4">
            <input ref={ref} type="text" placeholder="Search..." className="border border-gray-300 p-2 rounded-lg text-black" />
            <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={onSearch}>Search</button>
            <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={onClear}>Clear</button>
        </div>
    )
}
