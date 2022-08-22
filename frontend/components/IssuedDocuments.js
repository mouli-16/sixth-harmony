
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function IssuedDocuments(){
  const [list,setList] = useState([]);

  const getDocuments = async ()=>{
      const res = await axios.get('http://localhost:5000/storage/getfiles',{ withCredentials:true })
      setList(res.data.files)
      
   }

  useEffect(()=>{
      getDocuments();
  },[])

/* THE LIST OF DOCUMENTS FOR A USER IS IN THE LIST ARRAY.

The structure is:- [
  {
    "name":"/Main.cpp",    // filename (Will change it later)
    "cid": "2s538dh93h8dj9d",  //IPFS Hash of the stored file
    "id": "f393j93j9d38"   //Mongo Document id
  }
]


*/
  return(
  
    <div className="w-full ml-10">
        <div className="font-sans font-semibold text-lg text-orange-700 mt-3 ">
                      Welcome, Ruchika
        </div>
        <p className="text-gray-900 mt-2">
            All your documents will appear here.
        </p>
        <div className="pr-5">
            {list && list.map((elem)=>
            <div className="h-20 mt-3 shadow-lg rounded-lg">
              <a href = {`http://dweb.link/ipfs/${elem.cid}${elem.name}`} className="h-20 mt-3 shadow-lg rounded-lg">{elem.name}</a>
              </div>
            )}
        </div> 
        
    </div>
  );
}