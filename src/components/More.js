import React from "react";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';


const More = () => {
  return (
    <>
      
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Settings</span><TuneOutlinedIcon sx={{ fontSize: "25px" }} /></div>
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Saved</span><TurnedInOutlinedIcon sx={{ fontSize: "25px" }} /></div>
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Switch Appearance</span><BedtimeOutlinedIcon sx={{ fontSize: "25px" }} /></div>
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Your Activity</span><AvTimerOutlinedIcon sx={{ fontSize: "25px" }} /></div>
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Report a Problem</span><FlagCircleRoundedIcon sx={{ fontSize: "25px" }} /></div>
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Switch Accounts</span></div>
        <div className="flex flex-row justify-between px-4 py-[4%] hover:bg-[#121212]"><span>Log Out</span></div>
      
    </>
  );
};

export default More;
