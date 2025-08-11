import { useState} from "react"
import { Object } from "./Object"
import { popup } from "./Object"
function Post(){
    const [info, setInfo] = useState(Object)

    

    function renderPost(){
        return(
            <div className="flex-col justify-center align-center text-center flex-1 font-sans">
                <div className="flex gap-[300px] max-w-[500px] ml-110 mb-5 w-[500px]">
                    <h1 className="font-bold text-3xl mt-5">Instagram</h1>
                    <div className="flex mt-[20px] gap-[5px]">
                        <button id="add-btn" onClick={PopUp} className="h-10 w-20 font-xl rounded-full text-xl font-bold text-white bg-gradient-to-b from-yellow-500  via-pink-600  to-indigo-800 cursor-pointer hover:border-black border-2 ">+</button>
                        <img src="https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg" alt="" className="h-10 w-10 rounded-full"/>
                    </div>
                </div>
                <div id="popup-bg" className="fixed w-full h-full bg-black-100 backdrop-blur-sm top-0 hidden "></div>

                <div id="popup" className="fixed border-black border-solid border-5 hidden w-[500px] rounded-xl  text-start ml-[425px] mr-[425px] pt-10 pb-3 px-3 bg-gradient-to-b from-yellow-500  via-pink-600  to-indigo-800 ">
                    <div id="popup-head" className="flex align-center justify-between mt-[-25px]">
                        <p className="font-bold">Image URL</p>
                        <button id="close" className="bg-black text-white w-8 h-8 rounded-full mb-1 cursor-pointer hover:font-bold">X</button>
                    </div>
                    <input type="text" id="img-url" className="border-black border-solid border-3 pr-68 rounded-sm mb-5 bg-none outline-none" />
                    <p className="font-bold">Username</p>
                    <input type="text" id="username-url"  className="border-black border-solid border-3 pr-68 rounded-sm mb-5 bg-none outline-none"/>
                    <p className="font-bold">User Profile URL</p>
                    <input type="text" id="profile-url" className="border-black border-solid border-3 pr-68 rounded-sm mb-5 bg-none outline-none"/>
                    <p className="font-bold">Address</p>
                    <input type="text" id="address" className="border-black border-solid border-3 pr-68 rounded-sm mb-5 bg-none outline-none"/><br/>
                    <button id="submit" onClick={addPosts} className="rounded-sm font-bold border-black border-2  hover:bg-black hover:text-white cursor-pointer transition ease-linear duration-500 px-2">SUBMIT</button>
                </div>

                <div className=" ml-[450px] mr-[500px] w-[500px] " >
                    {info.map((inf, index)=>
                        <div className="mb-5" key={index}> 
                            <div className="flex justify-center align-center gap-[350px]">
                                <div className="flex text-start gap-2 mb-3">
                                    <img className="w-[40px] h-[40px] rounded-[50%]"src={inf.icon} alt="" />
                                    <p><b>{inf.name}</b><br/>{inf.address}</p>
                                </div>
                                <button className="bg-red-500 border-none h-10 px-6 justify-center text-base font-bold cursor pointer rounded-[5px] text-white hover:bg-red-800 transition ease-linear duration-500 cursor-pointer" onClick={() => deleteInfo(index)}>Delete</button>
                            </div>
                            <div className=" ">
                                <img src={inf.img} id="img" className="max-w-[500px] rounded-xl w-full h-full"/>
                            </div>
                            <div className="flex-col align-start">
                                <div className="w-[30px] mb-[-5px] flex gap-1 mt-1">
                                    <img src="https://www.svgrepo.com/show/532473/heart.svg" alt="" />
                                    <img src="https://files.svgcdn.io/proicons/comment.svg" alt="" />
                                    <img src="https://www.svgrepo.com/show/506747/share-1.svg" alt="" />
                                </div>
                                <div className="text-start ">
                                    <p><b>{inf.comments.user}</b></p>
                                    <p>{inf.comments.comment}</p>
                                </div>

                                <div>
                                    <input className="flex max-w-[500px] h-[30px] pl-[5px] pr-80 py-3 mb-[20px] justify-start rounded-3xl border-gray-400 border-solid border-1"type="text" placeholder="Enter your comment..."/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        
        )
        
    }

    function addPosts(){

        let addPost={
            name: document.getElementById("username-url").value,
            address: document.getElementById("address").value,
            icon: document.getElementById("profile-url").value,
            img:document.getElementById("img-url").value,
            comments:{
                name: "Lebron James",
                comment: "Ugh"
            }
        }
        renderPost()    
        setInfo(info => [addPost, ...info])
        document.getElementById("username-url").value=""
        document.getElementById("address").value=""
        document.getElementById("profile-url").value=""
        document.getElementById("img-url").value=""
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup-bg").style.display = "none";
    }

    return renderPost();

    function PopUp (){
        popup()
    }

    function deleteInfo(index){
        setInfo(info.filter((_,i)=> i !== index))
        confirm("Are you sure you want to delete this post?")
        renderPost()
    }

}

export default Post