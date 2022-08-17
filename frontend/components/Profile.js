
import Card from 'react-bootstrap/Card';

export default function Profile() {
  return (
    <div className="pr-5 w-5/6 ml-2">
      <div className="shadow-lg rounded-lg">
        <div className="flex  mt-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className='ml-2 font-semibold text-lg text-gray-400 mt-3'>About</div>
        </div>
        <div className="flex p-5">
          <div className="h-50 w-96">
            <img className="rounded-full" src="/assets/srijan.jpg"></img>
          </div>
          <div className="w-full ml-16 mt-10">
            <div className="flex">
              <div className='text-xl font-sans text-gray-600'>Name:</div>
              <p  className='ml-2 text-xl font-sans text-gray-600'>Ruchika</p>
            </div>
            <hr></hr>
            <div className="flex">
              <div className="mt-2 text-xl font-sans text-gray-600">Mobile:</div>
              <p className="mt-2 ml-2 text-xl font-sans text-gray-600">+917980372693</p>
            </div>
            <hr></hr>
            <div className="flex">
              <div className="mt-2 text-xl font-sans text-gray-600">Gender:</div>
              <p   className="mt-2 ml-2 text-xl font-sans text-gray-600">Female</p>
            </div>
            <hr></hr>
            <div className="flex">
              <div className="mt-2 text-xl font-sans text-gray-600">Email:</div>
              <p   className="mt-2 ml-2 text-xl font-sans text-gray-600">ruchikashaw@gmail.com</p>
            </div>
            <hr></hr>
          </div>

        </div>
      </div>
    </div>
  );
}