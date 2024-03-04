import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';

const Create = () => {
  

   
  return (
    <>
        <div className='absolute w-[36%] h-[77%] bg-[#262626] text-white rounded-[14px] top-[11.5%] left-[32%] z-30'>
            <h2 className='text-white text-center p-2 pb-[10px] border-b-[1px] border-[#363635]'>Create new post</h2>
            <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 140 , mr:20 , ml: 25, mt: 15} } />
            <h2 className='mt-4 text-center text-[20px]'>Drag photos and videos here</h2>
            <div className='bg-[#1877f2] h-[34px] w-[175px] mt-4 ml-[185px] rounded-[8px] border-[2px] border-[#1877f2]'> 
              <span className='p-3 ml-[4px] text-[14px] font-semibold'>Select from Computer</span>
            </div>
        </div>
        <div  className='absolute z-10 text-white top-5 right-4 cursor-pointer'>
            <CloseIcon sx={{fontSize: 30}}/>
        </div>
    </>
  )
}

export default Create