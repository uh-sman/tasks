// import { create } from "domain"

interface FormModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}
const useFetchForm = (set:any , {
    isOpen,onClose,onOpen
}: FormModalStore) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
})

export default useFetchForm;