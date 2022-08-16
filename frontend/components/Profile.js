
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
          <div className="h-48 w-48">
            <img className="rounded-full" src="/assets/srijan.jpg"></img>
          </div>
          <div className="ml-5">
            <div className="flex">
              <div>Name:</div>
              <p>Ruchika</p>
            </div>
            <div className="flex">
              <div>Mobile:</div>
              <p>+917980372693</p>
            </div>
            <div className="flex">
              <div>Gender:</div>
              <p>Female</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    // <>
    //   {[
    //     'Primary',
    //     'Secondary',
    //     'Success',
    //     'Danger',
    //     'Warning',
    //     'Info',
    //     'Light',
    //     'Dark',
    //   ].map((variant) => (
    //     <Card
    //       bg={variant.toLowerCase()}
    //       key={variant}
    //       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    //       style={{ width: '18rem' }}
    //       className="mb-2"
    //     >
    //       <Card.Header>Header</Card.Header>
    //       <Card.Body>
    //         <Card.Title>{variant} Card Title </Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   ))}
    // </>
  );
}