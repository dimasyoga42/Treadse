import { Bookmark, Command, Share } from "react-feather";

const Profile = () => {
    return (
        <>
        <div className="w-full h-full">
            <div className="flex justify-center">
                <div className="m-auto">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                        </div>
                    </div>
                    <h1 className="text-center font-bold text-2xl">dimas yoga</h1>
                    <small className="text-gray-500 flex justify-center">dimasyoga42</small>
            </div>

        </div>

        <div className="w-full mt-10 flex m-auto justify-center">
            <div className="card card-dash bg-base-100 w-96 lg:w-lg border shadow-base-200 shadow-lg">
                <div className="card-body">
                    <h1 className="card-title font-bold">dimas yoga</h1>
                    <p>ini adalah postingan pertama di akun ini</p>
                    <div className="card-actions justify-end gap-2">
                        <button><Bookmark /></button> <p>0</p>
                        <button><Share /></button>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Profile;