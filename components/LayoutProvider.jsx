'use client'

import { usePathname } from "next/navigation";
import { log } from "@/utils/log";
import Sidebar from "./Sidebar";

const LayoutProvider = ({ children }) => {
    const pathname = usePathname();

    if (pathname.startsWith("/auth")) {
        return <>{children}</>;
    }

    return (
        <>
            <Sidebar>{children}</Sidebar>
        </>
    )
}

export default LayoutProvider