import React from "react";
import PostData from "../Constants/PostCardData";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const StorySection = () => {

  const SlideRight = () =>{
    const Slide = document.getElementById("slideL");
    Slide.scrollLeft = Slide.scrollLeft - 300;
    console.log("hello")
  }
  const SlideLeft = () =>{
    const Slide = document.getElementById("slideL");
    Slide.scrollLeft = Slide.scrollLeft + 300;
  }

  return (
    <>
      <ExpandCircleDownIcon  onClick={SlideRight} sx={{transform:"rotate(90deg)", position:"absolute", top:"9%", left:"31.8%", color:"white",zIndex:"10"}}/>
      <div id="slideL" className="bg-black flex flex-row text-white border-[1.5px] border-[#363635] rounded-[8px] p-[18px] absolute xs:left-0 ss:left-[18%] sm:left-[212px] md:left-[35%] lg:left-[31%] sm:top-[30px] top-[85px] md:w-[465px] w-[480px] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
        {PostData.map((user) => (
          <div className="flex flex-col items-center box-content mr-[13px] text-[12px]">
            <div className="box-content h-[58px] w-[58px] border-[3px] border-[#b70053] rounded-[50%]">
              <img
                src={user.profileImg}
                className="h-[58px] w-[58px] rounded-full"
                alt="profile"
              />
            </div>
            {user.profileName}
          </div>
        ))}
      </div>
        <ExpandCircleDownIcon onClick={SlideLeft} sx={{transform:"rotate(-90deg)", position:"absolute", top:"9%", left:"59%", color:"white",zIndex:"10"}}/>
    </>
  );
};
export default StorySection;