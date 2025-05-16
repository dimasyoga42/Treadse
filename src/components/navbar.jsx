import { Info } from "react-feather";

const Navbar = () => {
    return (
        <>
        <div className="w-full h-16 flex justify-between justify-items-center items-center">
            <h1 className="pl-2 text-2xl font-extrabold">Treadse</h1>
            <button className="btn bg-transparent border-none shadow-none" onClick={() => document.getElementById("my_modal_4").showModal()}><Info /></button>
        </div>
        <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box shadow-none">
                <h3 className="font-bold text-lg">Treadse</h3>
                <p className="py-3 text-xs">Treadse is a modern social media platform that allows users to share posts and engage with content freely—no friend requests or connections needed. Anyone can upload posts and like others' content, creating an open and interactive space for self-expression and discovery.
                With a clean, user-friendly interface, Treadse makes it easy to explore, post, and connect through content rather than personal.</p>
                <div className="modal-action">
                    <button className="btn bg-transparent shadow-md">Close</button>
                </div>
            </form>
        </dialog>
        </>
    )
}
export default Navbar;