import { useEffect, useRef, useState } from "react";
import defaultUser from "../assets/defaultUser.svg";
import { useDispatch, useSelector } from "react-redux";
import { Zoom, toast } from "react-toastify";
import { addProfilePhoto } from "../Redux/features/userSlice";
import VideoCard from "../Components/VideoCard/VideoCard";
import { UpdateFireStore } from "../utils/helperFunction/updateFireStore";

const ChannelPage = () => {
  const userState = useSelector((state) => state.user);
  const [user, setUser] = useState(userState);
  const [profileImage, setProfileImage] = useState(null);
  const profileImageRef = useRef(null);
  const dispatch = useDispatch();

  // useEffect updated the user information after every change
  useEffect(() => {
    setUser(userState);
  }, [userState, dispatch]);

  // created a input ref on image tag on click
  const handleImageInput = () => {
    profileImageRef.current.click();
  };

  // getting the image file from user and uploading it to the cloudinary
  const handleChangeUserImage = (event) => {
    const inputImage = event.target.files[0];
    setProfileImage(URL.createObjectURL(inputImage));
    // function to upload image to clodinary and then save the url to firestore
    const saveImage = async () => {
      const data = new FormData();
      data.append("file", inputImage);
      data.append("upload_preset", "Asish_cloud_photo");
      data.append("cloud_name", "dlr8llulh");
      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dlr8llulh/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const cloudData = await res.json();
        if (cloudData) toast.success("done");
        dispatch(addProfilePhoto(cloudData.url)); // update the redux state
        await UpdateFireStore(user); // update the firestore
      } catch (error) {
        toast.error(error.message, { transition: Zoom });
      }
    };
    saveImage();
  };

  useEffect(() => {});
  return (
    <div className="flex flex-col w-full mb-16 px-10 items-center pt-7 max-md:p-1 overflow-y-auto">
      <div className=" flex gap-2 max-md:flex-col max-md:items-center ">
        <div className="channel-logo w-44 h-44 bg-white rounded-full overflow-hidden max-md:w-20 max-md:h-20">
          <img
            src={profileImage || user?.profilePhoto || defaultUser}
            className="object-cover w-full h-full"
            onClick={handleImageInput}
          />
          <input
            type="file"
            ref={profileImageRef}
            onChange={handleChangeUserImage}
            className="hidden"
          />
        </div>
        <div className="flex flex-col flex-wrap gap-2 w-[600px] max-md:w-[530px] justify-center max-md:items-center max-sm:w-[330px]">
          <p className="text-4xl font-semibold ">{user?.name}</p>
          <p className="text-gray-400 flex flex-wrap max-md:text-center">
            Small Description about the youtuber, this is just a sample text
            their is no meaning of this text so you can ignore it for now and i
            dont know what to write so i am writing what coming on my mind
          </p>
          <p>223k subscribers</p>
        </div>
      </div>
      <p className="text-5xl font-bold mt-6 md:text-4xl md:mt-5 sm:text-2xl sm:mt-3 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-gradient-x drop-shadow-lg uppercase text-center">
        All Watchlist
      </p>
      <div className="watchList  h-full w-[100%]">
        <div className="">
          {user?.watchList?.length === 0 ? (
            <h1 className="text-3xl font-bold flex justify-center mt-4">
              No Video is added to Watch List.
            </h1>
          ) : (
            user?.watchList?.map((video, k) => (
              <VideoCard
                key={k}
                cardType={"watchList"}
                video={video}
                views={video?.stats?.views}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
