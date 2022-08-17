import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
export default function Home(){
  return(
    <>
    <div className='bodyH'>
      <div className="m-4">
        <div className="font-sans font-semibold text-lg text-orange-700 m-4 text-blue-900">
                      Welcome, Ruchika
        </div>
        <p className="text-blue-900 mt-5 ml-4 ">
            Get all your documents from here!
        </p>
        <div className="pr-5 flex mt-1 ">
            <div className="w-3/12 h-32 m-3 shadow-lg rounded-lg "></div>
            <div className="w-3/12 h-32 m-3 shadow-lg rounded-lg"></div>
            <div className="w-3/12 h-32 m-3 shadow-lg rounded-lg"></div>
            <div className="w-1/6 h-32 m-3 shadow-lg rounded-lg"></div>
        </div> 
   </div>
  <div className="m-2">
     <p  className="mt-5 ml-5 text-blue-900">Documents you might need !</p>
 <div class="flex ml-4">
      <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic1.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic5.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic3.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic4.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic5.jpeg" />
        </Card>
    </div>
      </div>
      <div className="m-2 overflow-x-scroll">
     <p  className="mt-5 ml-5 text-blue-900">View your documents here!</p>
 <div class="flex ml-4">
      <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic2.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic6.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic7.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic8.jpeg" />
        </Card>
        <Card style={{ width: '20rem', borderRadius:'35px', margin:'10px'}}>
        <Card.Img variant="top" src="assets/pic2.jpeg" />
        </Card>
    </div>
      </div>
    
    </div>

  </>
  );
}

