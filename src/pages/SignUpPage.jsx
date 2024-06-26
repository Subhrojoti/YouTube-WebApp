import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app, db } from "../Firebase/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addDetails } from "../Redux/features/userSlice";
import { Zoom, toast } from "react-toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signUp, setSignUP] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth(app); // instance of firebase app

  // handles signup and login functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signUp === "signUp") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        if (user) {
          const userRef = collection(db, "users");
          // setting the firestore with the information of user
          await setDoc(doc(userRef, user.uid), {
            email: email,
            name: name,
            profilePhoto: "",
            watchList: [],
          });
          toast.success("sign up successful now login", { transition: Zoom });
          setSignUP("login");
        }
      }
      if (signUp === "login") {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        if (user) {
          fetchUserData(); // after successful login fetching user details from firestore
          toast.success("login Successful", { transition: Zoom });
          localStorage.setItem("token", user.accessToken); // setting the access token to local storage
          localStorage.setItem("uid", user.uid); // setting the user id to local storage
          navigate("/");
        }
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(errorMessage, { transition: Zoom });
    }
  };

  // function to fetch user data from firestore
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (docSnap.data()) {
          dispatch(addDetails(docSnap.data()));
        }
      }
    });
  };

  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center bg-black">
      <form>
        <div className="flex flex-col gap-4 bg-gray-100 p-4">
          <div className="w-full flex ">
            <span
              className={` rounded-md h-[40px] grow cursor-pointer flex justify-center items-center ${
                signUp === "signUp"
                  ? "bg-youtube-red text-white active:bg-youtube-red-onclick"
                  : "bg-white text-youtube-red"
              } `}
              onClick={() => setSignUP("signUp")}
            >
              Sign Up
            </span>
            <span
              className={` rounded-md h-[40px] grow cursor-pointer flex justify-center items-center ${
                signUp === "login"
                  ? "bg-youtube-red text-white active:bg-youtube-red-onclick"
                  : "bg-white text-youtube-red"
              } `}
              onClick={() => setSignUP("login")}
            >
              Log In
            </span>
          </div>
          {signUp === "signUp" && (
            <div className="flex bg-white items-center gap-2 px-2">
              <FaUserAlt size={19} />
              <input
                type="text"
                name="name"
                required
                minLength={3}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="h-[40px] w-full rounded-md focus:outline-none"
              />
            </div>
          )}
          <div className="flex bg-white items-center gap-2 px-2">
            <MdEmail size={21} />
            <input
              type="email"
              name="email"
              required
              pattern="^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="h-[40px] w-full rounded-md focus:outline-none"
            />
          </div>
          <div className="flex bg-white items-center gap-2 px-2">
            <RiLockPasswordFill size={21} />
            <input
              type="password"
              name="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="h-[40px] w-full rounded-md focus:outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-white h-[40px] hover:bg-youtube-red hover:text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
