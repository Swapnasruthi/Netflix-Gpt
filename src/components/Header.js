import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header  = ()=>{
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
               
              // ...
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
              // ...
            }
          });
    },[]);
    const handleSignOut = ()=>{
       
        signOut(auth).then(() => {
           // navigate("/"); --> this is not needed as we have onAuthChanged. it will automatically change its state when we changed our auth.
          // Sign-out successful.

        }).catch((error) => {
          // An error happened.
        });
    }
    return (
        <div className="flex justify-between absolute bg-gradient-to-b from-black w-full z-10">
             <div>
            <img className="w-48 mx-24 "
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            </div>
           {user && <div className="m-6 mx-24">
                <img className="mr-10 rounded-lg" src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="user"/>
                <button onClick={handleSignOut} className="absolute right-0 top-0 m-6 mx-14 bg-red-700 rounded-md p-1 font-bold text-white ">Sign out</button>
            </div>}

        </div>
    )
}

export default Header;