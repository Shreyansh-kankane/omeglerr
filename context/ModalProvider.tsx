"use client"
import { useState,useEffect } from "react";
import TermsModal from "@/modals/Terms";
export const ModalProvider = () =>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null;

    return (
        <>
            <TermsModal />
        </>
    )
}