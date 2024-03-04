import React, { useState } from "react";
import Search from "./Search.js";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import { useTransition, animated } from "react-spring";

const Navbar = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  //for transition
  const transitions = useTransition(searchToggle,{
    from: {x:-10,y:35,opacity:0},
    enter: {x:10,y:0,opacity:1},
    leave: {x:-10,y:35,opacity:0},
  });
  return (
    <>
        <div className="sm:hidden block">
        <div className="fixed flex flex-row bg-black z-10 h-[75px] items-center text-white justify-around w-full  border-b-[1.8px] border-[#363635] rounded-b-[8px]">
            <span className="text-[18px] font-serif"><h1>Instagram</h1></span>
            <input className="h-[2.5rem] w-[22rem] p-4 bg-[#262626] outline-none rounded-md" type="text" placeholder="Search" ></input>
            <FavoriteBorderOutlinedIcon sx={{ fontSize: "28px" }} />
        </div>
        <div className="fixed bottom-0 z-10 bg-black text-white w-full h-[50px] border-t-[1.5px] border-[#363635] rounded-t-[8px] opac">
        <ul className="flex flex-row">

            <li className="mb-5 p-2 cursor-pointer ml-[8%]">
            <HomeIcon sx={{ fontSize: "30px" }} />
            </li>

            <li className="mb-5 p-2 cursor-pointer ml-[9%]">
            <ExploreIcon sx={{ fontSize: "30px" }} />
            </li>

            <li className="mb-5 p-2 cursor-pointer ml-[9%]">
            <AddBoxOutlinedIcon sx={{ fontSize: "30px" }} />
            </li>

            <li className="mb-5 p-2 cursor-pointer ml-[9%]">
            <ChatOutlinedIcon sx={{ fontSize: "30px" }} />
            </li>

            <li className="mb-5 p-2 cursor-pointer ml-[9%]">
            <SupervisedUserCircleOutlinedIcon sx={{ fontSize: "30px" }} />
            </li>

        </ul>
        </div>
        {transitions((style, item )=>
            item ? <animated.div style={style} className=" absolute top-0 w-[400px] h-[100%] left-[74.5px] bg-black text-white border-x-[1.5px] border-r-[#363635] border-l-[#1b1b1a] rounded-tr-[2%] py-[4px] " onClick={()=>{
                setSearchToggle(!searchToggle);
                console.log("clicked")
              }}><Search /></animated.div> : ""
          )}
        </div>
    </>
  )
}

export default Navbar;