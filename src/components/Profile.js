import React, { useEffect } from "react";
// import InfiniteScroll from 'react-infinite-scroll-component';
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ProData from "../Constants/ProPostData";

const Profile = () => {
  // const pageLimit = 6;
  // ProData.length = 6;
  const dataToBeShown = () => {
    // const pageNo = (posts/pageLimit)+1
    // const finalData = [...ProData,...posts];
    // setPosts(ProData);
  };
  useEffect(() => {
    return dataToBeShown();
  });
  //  const fetchMoreData = () =>{
  //     dataToBeShown()
  //  }

  return (
    <>
      <div className="relative ss:left-[0%] sm:left-[8%] md:left-[20%] lg:left-[18%] left-0 ss:w-[100%] sm:w-[92%] md:w-[80%] lg:w-[80%] w-[100%]">
        <div className="text-white relative xs:ml-[-10px] md:ml-[5%] lg:ml-[10%]  xs:mt-[12%] ss:mt-[8%] sm:mt-[0%] overflow-hidden box-border">
          <div className="ss:h-[150px] h-[100px] ss:w-[150px] w-[100px] sp:m-20 m-10 rounded-[50%] overflow-auto">
            <img src="./img/me.png" alt="post" />
          </div>
        </div>
        <div className="flex flex-col sp:absolute relative xs:top-0 sp:top-[8%] sm:top-[0%] sp:left-[35%] sm:left-[32%] lg:left-[36.5%] box-border">
          <div className="sp:relative absolute xs:top-[-140px] ss:top-[-180px] sp:top-0 xs:left-[135px] ss:left-[185px] sp:left-0 flex sp:flex-row flex-wrap items-center md:text-[20px] text-[22px] text-white mt-8 ml-5">
            <h1>_raj.__.put_</h1>
            <div className="ml-2 mb-2 sp:hidden block">
              <SettingsIcon sx={{ fontSize: "30px" }} />
            </div>
            <div className="md:h-8 h-10 md:w-28 w-32 bg-white ml-5 rounded-md">
              <span className="md:text-[15px] text-[17px] text-black font-semibold ml-[15px] md:mb-1 mb-2 cursor-pointer">
                Edit Profile
              </span>
            </div>
            <div className="md:h-8 h-10 md:w-24 w-28 bg-white ml-3 rounded-md">
              <span className="md:text-[15px] text-[17px] text-black font-semibold ml-[16px] md:mb-1 mb-2 cursor-pointer">
                Ad Tools
              </span>
            </div>
            <div className="ml-2 mb-2 sp:block hidden">
              <SettingsIcon sx={{ fontSize: "30px" }} />
            </div>
          </div>

          <div className="sp:relative absolute sp:top-0 top-[32vh] sp:border-0 border-y-[1.5px] sp:p-0 py-4 flex flex-row text-white sp:w-full w-[100%] mt-6 justify-around">
            <span className="text-[16px] text-center">36 <br className="sp:hidden block"/>posts</span>
            <span className="text-[16px] text-center">212.2M <br className="sp:hidden block"/>followers</span>
            <span className="text-[16px] text-center">120 <br className="sp:hidden block"/>following</span>
          </div>
          <div className="text-white md:ml-5 ml-6 mt-5">
            <span className="text-[15px] font-semibold">Manish Chandra</span>
            <br/>            
            <span className="text-[14px]">.<br />.<br />_CsE🧑‍🎓'24<br />_programmer<br />_designer<br />“¥öu oNly līvê oNc€....$o rUn it wïth úr ÒwÑ çHoîçé$"</span>
          </div>
        </div>

        {/* highlights */}
        <div className=" relative ss:mb-4 sp:top-[3%] top-[2%] sp:mb-0 mb-4 bg-white box-border">
          <div className="flex flex-col items-center absolute lg:left-[15%] md:left-[12%] sm:left-[4%] sp:left-[2%] ss:left-[1%] text-white">
            <div className="sp:h-[80px] ss:h-[50px] h-[60px] sp:w-[80px] ss:w-[50px] w-[60px] border-[1.5px] border-[#363635] rounded-[50%]">
              <span className="opacity-[0.4] sp:block hidden">
                <AddIcon sx={{ fontSize: 80 }} />
              </span>
              <span className="opacity-[0.4] sp:hidden block">
                <AddIcon sx={{ fontSize: 60 }} />
              </span>
            </div>
            <span className="ml-x] mt-2 text-[13px] font-semibold">New</span>
          </div>
        </div>

        {/* profile post */}
        <div className="flex flex-col w-[100%] relative xs:top-[190px] sm:top-[15%] md:top-[17%] lg:top-[17%] xs:px-0 sm:px-[2%] md:px-[10%]  box-border">
          <div className="flex flex-row text-white bg-[121212] border-t-[1px] px-[15%] w-[100%] border-[#363635] box-border">
            <div className="w-full md:mt-3 mt-4 inline-block ml-14">
              <AutoAwesomeMosaicOutlinedIcon sx={{ fontSize: 15 }} />
              <span className="ml-2 text-[13px] sp:inline-block hidden">POSTS</span>
            </div>
            <div className="w-full md:mt-3 mt-4 inline-block ml-10">
              <AutoAwesomeMotionIcon sx={{ fontSize: 15 }} />
              <span className="ml-2 text-[13px] sp:inline-block hidden">REELS</span>
            </div>
            <div className="w-full md:mt-3 mt-4  inline-block ml-10">
              <BookmarksOutlinedIcon sx={{ fontSize: 15 }} />
              <span className="ml-2 text-[13px] sp:inline-block hidden">SAVED</span>
            </div>
            <div className="w-full md:mt-3 mt-4 inline-block ml-10 mr-8">
              <SellOutlinedIcon sx={{ fontSize: 15 }} />
              <span className="ml-2 text-[13px] sp:inline-block hidden">TAGGED</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 grid-rows-2 mt-4 md:gap-6 sp:gap-6 gap-1 justify-between box-border sp:mb-[5%] mb-[15%]">
            {/* <InfiniteScroll
        dataLength={posts}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
        </InfiniteScroll> */}
            {ProData.map((items, index) => (items.PostData))[0].map((items)=>(
              <div className="bg-white w-[100%] h-[100%]  ">
                <img src={items.ImgData} alt="something" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;