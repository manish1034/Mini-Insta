import React,{useState} from "react";
import PostData from '../Constants/PostCardData.js'



const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return(
        <>
            <div className="border-[#363635] border-b-[0.1px]">
            <h2 className="text-[25px] ml-4 mt-4 mb-8 font-semibold ">Search</h2>
            <input className="h-[2.5rem] w-[22rem] p-4 mb-8 ml-2 bg-[#262626] outline-none rounded-md" type="text" placeholder="Search" onChange={e=>setSearchQuery(e.target.value)} ></input>
            </div>
                {/* <div className="ml-5 mt-3">{user.profileName}</div> */}
            {searchQuery !== "" && <div>
            {PostData.filter((user) => user.profileName.toLowerCase().includes(searchQuery)).map((user) => (
                <div key={user.id} className={` w-full mt-3 h-[62px] hover:bg-[#121212] flex flex-row items-center`}>
                        <div className="h-[50px] w-[50px] ml-4 bg-white rounded-full"></div>
                        <div className="ml-2 flex flex-col">
                            <span className="font-bold">{user.profileName}</span>
                            <span>{user.profileName}</span>
                        </div>
                    </div>
            ))}
            </div>}
        
        </>
    )
}

export default Search;