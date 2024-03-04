import React from 'react';
import PostData from "../Constants/PostCardData.js";
import StorySection from "./Story_Section.js";
import PostCard from "./Post_Card.js";


const Home = () => {
  
  return (
    <>
         <div className="flex flex-col sm:m-0 mt-[60px]">
          <StorySection />
          <div className="md:mt-[165px] mt-[165px] absolute ss:left-[18%] xs:left-0 sm:left-[212px] md:left-[35%] lg:left-[31%] mb-5 md:w-[465px] w-[480px]">
            {PostData.map( (item) => (
              <PostCard
                key={item.id}
                img={item.profileImg}
                name={item.profileName}
                post={item.postImg}
                description={item.description}
                like={item.likes}
                date={item.date}
              />
            ))}
          </div>
        </div>
    </>
  )
}

export default Home;