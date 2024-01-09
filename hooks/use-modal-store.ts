import { create } from "zustand";

export type ModalType = "terms"

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    data: string | null;
    onOpen: (type: ModalType, data: string | null) => void; // Fix: Add 'data' parameter
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: null,
    isOpen: false,
    onOpen: (type, data) => set({ isOpen: true, type, data }), // Fix: Pass 'data' parameter
    onClose: () => set({ type: null, isOpen: false })
}));
