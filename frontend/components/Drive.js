

export default function Drive(){
  return(
    <div className="m-4 w-full pr-16">
      <div className="flex justify-between">
        <div className="text-xl text-blue-900 font-semibold font-sans">
           SEAGI DRIVE
        </div>
        <button className="bg-blue-900 text-white h-12 rounded-xl px-6">Upload File</button>
    </div>
    <div className="flex justify-center">
        <img src="assets/file-not-found.jpeg"/>
    </div>
    </div>
  );
}