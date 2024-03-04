import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
// import AddBoxIcon from '@mui/icons-material/AddBox';
import InstagramIcon from "@mui/icons-material/Instagram";
import Search from "./Search.js";
import Notification from "./Notification.js";
import More from "./More.js";
import Create from "./Create.js";
import { useTransition, animated } from "react-spring";

//searchbar
const Sidebar = () => {
  const [clickedBut, setClickedBtn] = useState(false);
  const [commonClick, setCommonClick] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [notiToggle, setNotiToggle] = useState(false);
  const [createToggle, setCreateToggle] = useState(false);
  const [moreToggle, setMoreToggle] = useState(false);

  //for transition
  const transition = useTransition(moreToggle, {
    from: { x: -10, y: 35, opacity: 0 },
    enter: { x: 10, y: 0, opacity: 1 },
    leave: { x: -10, y: 35, opacity: 0 },
  });
  // const transition1 = useTransition(createToggle, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });
  const transitions = useTransition(searchToggle, {
    from: { x: -10, y: 0, opacity: 0 },
    enter: { x: 10, y: 0, opacity: 1 },
    leave: { x: -10, y: 0, opacity: 0 },
  });
  const notitransition = useTransition(notiToggle, {
    from: { x: -10, y: 0, opacity: 0 },
    enter: { x: 10, y: 0, opacity: 1 },
    leave: { x: -10, y: 0, opacity: 0 },
  });
  return (
    <>
      <div className={`sm:fixed absolute ${createToggle ? "opacity-[0.5]" : "opacity-1"} sm:block hidden md:w-[245px] w-[72px] z-50 bg-black text-white border-r-[1.5px] border-[#363635] px-5 h-[100%] py-10`}>
        <NavLink to="/" >
        <span className={`text-[25px]`}>
          <h1 className="ml-2 md:inline-block hidden">
            {clickedBut ? (
              <InstagramIcon sx={{ fontSize: "35px" }} />
            ) : (
              "InstaMin"
            )}
          </h1>
          <h1 className="ml-2 md:hidden inline-block">
            <InstagramIcon sx={{ fontSize: "35px" }} />
          </h1>
        </span>
        </NavLink>
        <div className="my-[40px]">
          <ul>
          <NavLink to="/">
            <li className={ commonClick ? `openAnimation mb-5 p-2 cursor-pointer flex flex-row items-center hover:bg-[#121212] rounded-full` : `closeAnimation mb-5 p-2 cursor-pointer flex flex-row items-center hover:bg-[#121212] rounded-full`}>
              <HomeIcon sx={{ fontSize: "30px" }} />
              <span className={`ml-4 font-bold  ${clickedBut ? "hidden" : "md:inline-block hidden"}`}>
                Home
              </span>
            </li>
          </NavLink>

            <li className={commonClick? `openAnimation mb-5 p-2  rounded-full cursor-pointer ${searchToggle? 'bg-[#121212] border-[1px] border-white':""}`: "closeAnimation mb-5 p-2 hover:bg-[#121212] rounded-full cursor-pointer"}
              onClick={() => {
                setSearchToggle(!searchToggle);
                setClickedBtn(!clickedBut);
                setCommonClick(!commonClick);
                }}>
              <SearchIcon sx={{ fontSize: "30px" }} />
              {searchToggle ? 
              ("") : 
              (<span className={`ml-4 absolute ${clickedBut ? "hidden" : "md:inline-block hidden"}`}>Search</span>)}
            </li>

          <NavLink to="/explore">
            <li className={commonClick ? "openAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full":"closeAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full"}>
              <ExploreIcon sx={{ fontSize: "30px" }} />
              <span className={`ml-4 absolute ${clickedBut ? "hidden" : "md:inline-block hidden"}`}>
                Explore
              </span>
            </li>
          </NavLink>

            <li className={commonClick ? "openAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full":"closeAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full"}>
              <ChatOutlinedIcon sx={{ fontSize: "30px" }} />
              <span className={`ml-4 absolute ${clickedBut ? "hidden" : "md:inline-block hidden"}`}>
                Messages
              </span>
            </li>

            <li className={commonClick ? `openAnimation1 mb-5 p-2 rounded-full cursor-pointer ${notiToggle? 'bg-[#121212] border-[1px] border-white':""}`: "closeAnimation1 mb-5 p-2 hover:bg-[#121212] rounded-full cursor-pointer"}
             onClick={() => {
              setNotiToggle(!notiToggle);
              setClickedBtn(!clickedBut);
              setCommonClick(!commonClick);
              }}>
              <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
              {notiToggle ? 
              ("") : 
              (<span className={`ml-4 absolute ${clickedBut ? "hidden" : "md:inline-block hidden"}`}>Notifications</span>)}
            </li>

            <li className={commonClick ? "openAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full":"closeAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full"}
              onClick={() => {setCreateToggle(!createToggle)}}
              >
              <AddBoxOutlinedIcon sx={{ fontSize: "30px" }} />
              <span className={`ml-4 absolute ${clickedBut ? "hidden" : "md:inline-block hidden"}`}>
              {/* <AddBoxIcon/> */}
                Create
              </span>
            </li>
            
            <NavLink to="/profile" >
            <li className={commonClick ? "openAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full":"closeAnimation mb-5 p-2 cursor-pointer hover:bg-[#121212] rounded-full"}>              
              <SupervisedUserCircleOutlinedIcon sx={{ fontSize: "30px" }} />
              <span className={`ml-4 absolute ${clickedBut ? "hidden" : "md:inline-block hidden"} `}>
                Profile
              </span>
            </li>
            </NavLink>
          </ul>
        </div>

        <div
          className="absolute bottom-0 mb-[40px] cursor-pointer flex flex-row items-center hover:bg-[#121212] w-[85%] p-2 rounded-full duration-500"
          onClick={()=>{
            setMoreToggle(!moreToggle);
          }}
        >
        {/* for transition */}
        <MenuIcon sx={{ fontSize: "35px" }} /><span className={`ml-4 font-semibold ${clickedBut ? "hidden" : "md:inline-block hidden"} `}>More</span>
        </div>
          {transition((style, item )=>
            item ? <animated.div style={style} className="w-[240px] flex flex-col absolute bottom-24 mt-[375px] h-[310px] left-[10px] bg-[#262626] text-white border[1.5px] border-[#363635] rounded-[2.2%] z-10 "><More/></animated.div> : ""
          )}
          

        {transitions((style, item) =>
          item ? (<animated.div
                    style={style}
                    className=" absolute top-0 w-[388px] h-[100%] md:left-[74.5px] left-[60px] bg-black text-white border-x-[1.5px] border-r-[#363635] border-l-[#1b1b1a] rounded-tr-[2%] py-[4px] z-[20]"
                    ><Search /></animated.div>) : (""))}
        {notitransition((style, item) =>
          item ? (<animated.div
                    style={style}
                    className=" absolute top-0 w-[388px] h-[100%] md:left-[74.5px] left-[60px] bg-black text-white border-x-[1.5px] border-r-[#363635] border-l-[#1b1b1a] rounded-tr-[2%] py-[4px] z-[20]"
                    ><Notification /></animated.div>) : (""))}
      </div>
     {/* {transition1((style, item )=>
            item ? <animated.div style={style} ><Create/></animated.div> : ""
          )} */}
          {createToggle? <Create/> : ""}
    </>
  );
};

export default Sidebar;
