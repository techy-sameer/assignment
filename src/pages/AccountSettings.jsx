import { useState } from "react";
import { FaCamera } from "react-icons/fa";

function AccountSettings() {
    const [user] = useState({
        name: "Marry Doe",
        email: "Marry@Gmail.com",
        bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxtCLQshZvtXOJTwdLZfilEwnunmEz23Op9p_Nf7xr9Rv2WPHQzWbQpA&usqp=CAU",
    });

    return (
        <div className="flex h-screen justify-center bg-gray-100 p-4">
            <div className="w-96 bg-white shadow-lg rounded-md p-6">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
                {/* Divider */}
                <div className="mt-4 border-t"></div>
                {/* Profile Section */}
                <div className="flex items-center mt-4">
                    {/* Profile Image with Camera Icon */}
                    <div className="relative">
                        <img
                            src={user.profilePic}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover border"
                        />
                        <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full cursor-pointer">
                            <FaCamera size={14} />
                        </div>
                    </div>

                    {/* User Info - Placed Beside Image */}
                    <div className="ml-4">
                        <h3 className="font-bold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>


                {/* Bio Section */}
                <p className="text-sm text-gray-600 font-bold mt-4 ">{user.bio}</p>


            </div>
        </div>
    );
}

export default AccountSettings;
