import { collection, doc, setDoc } from "firebase/firestore";
// import { useSelector } from "react-redux";
import { db } from "../../Firebase/firebase";

export const UpdateFireStore = async (user) => {
  const uid = localStorage.getItem("uid");

  const userRef = collection(db, "users");
  await setDoc(doc(userRef, uid), {
    email: user?.email,
    name: user?.name,
    profilePhoto: user?.profilePhoto,
    watchList: user?.watchList,
  });
  console.log(user);
  return;
};
