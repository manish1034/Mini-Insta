import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import TextField from "@mui/material/TextField";

const PostCard = ({ name, post, img, like, description, date }) => {
  console.log(img);
  return (
    <>
      
        <div className="text-white flex flex-col border-[0.1px] border-[#363635] rounded-[8px] md:mb-3 ss:mb-3 xs:mb-2">
          <div className="flex flex-row p-2 w-full relative items-center">
            <div className=" h-[30px] w-[30px] box-content mr-3  border-[3px] p-[1px] border-[#b70053] rounded-[50%]">
              <img
                src={img}
                alt="profileImg"
                className="h-[30px] w-[30px] rounded-full"
              />
            </div>
            <div className="">{name}</div>
            <div className="absolute right-0 mr-2 cursor-pointer">. . .</div>
          </div>
          <div className="h-[100%] w-[100%] bg-white">
            <img src={post} alt="post" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <div className="ml-2 cursor-pointer mr-4 md:mt-4 mt-3">
                <FavoriteBorderOutlinedIcon sx={{ fontSize: "28px" }} />
              </div>
              <div className="mr-4 cursor-pointer md:mt-4 mt-3">
                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "27px" }} />
              </div>
              <div className="mr-4 cursor-pointer md:mt-4 mt-3">
                <SendOutlinedIcon sx={{ fontSize: "28px" }} />
              </div>
            </div>
            <div className="mr-4 cursor-pointer md:mt-4 mt-3">
              <TurnedInOutlinedIcon sx={{ fontSize: "28px" }} />
            </div>
          </div>
          <div className="mt-2 ml-3 font-bold">{like} 12,231 likes</div>
          <div className="mt-2 ml-3 text-sm">
            <span className="font-bold">{name}</span> <span>{description}</span>
          </div>
          <div className="mt-2 ml-3 text-sm opacity-[0.5]">
            view all 199 comments
          </div>
          <div className="m-3 text-[11px] opacity-[0.5]">{date}16 HOUR AGO</div>
          <div className="flex-row mt-2 mb-1 relative items-center border-t-[1.5px] border-[#363635] sm:flex hidden">
            <div className="mx-4 mt-2">
              <AddReactionOutlinedIcon sx={{ fontSize: "28px" }} />
            </div>
            <div className="ml-1 mt-2">
            <TextField
              id="standard-multiline"
              label=""
              sx={{
                "& .MuiInputBase-root": {
                  color: "white",
                  width: 340
                },
              }}
              disableUnderline
              multiline
              maxRows={4}
              placeholder="Add a Comment..."
              variant="standard"
            /></div>
            <div className="absolute cursor-pointer right-0 mr-2 text-blue-400">Post</div>
          </div>
        </div>
    </>
  );
};

export default PostCard;
