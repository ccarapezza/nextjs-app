'use client'
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Paginator({ page, pageSize, total }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [currentPage, setCurrentPage] = useState(page);
    const maxPages = Math.ceil(total / pageSize);

    const goToNextPage = () => {
        if (parseInt(currentPage) < maxPages) {
            setCurrentPage(parseInt(currentPage) + 1);
        }
    }
    const goToPreviousPage = () => {
        if (parseInt(currentPage) > 1) {
            setCurrentPage(parseInt(currentPage) - 1);
        }
    }

    const hasNextPage = currentPage < maxPages;
    const hasPreviousPage = currentPage > 1;

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.set('page', currentPage);
        router.push(`${pathname}?${urlSearchParams.toString()}`);
    }, [currentPage,pathname, router, searchParams]);
     
    return (
        <div className="flex gap-4 items-center justify-center py-4">
            <button className="bg-blue-500 text-white p-2 rounded-lg disabled:bg-gray-300" onClick={goToPreviousPage} disabled={!hasPreviousPage}>←</button>
            <span className="text-black">Page {currentPage} of {maxPages}</span>
            <button className="bg-blue-500 text-white p-2 rounded-lg disabled:bg-gray-300" onClick={goToNextPage} disabled={!hasNextPage}>→</button>
        </div>
    )
}
