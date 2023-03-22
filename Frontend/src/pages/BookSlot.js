// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function BookSlot() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selectedTime, setSelectedTime] = useState(0);
//   const [textInput, setTextInput] = useState('');

//   const handleTimeChange = (event) => {
//     setSelectedTime(parseInt(event.target.value));
//   };

//   const handleTextChange = (event) => {
//     setTextInput(event.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("/bookslot",{
//         time: selectedTime,
//         text: textInput,
//         venueId: id,
//     }).then(res => {
//         console.log(res)
//         if (res.data.error){
//             alert(res.data.error)
//         } else {
//             navigate(`/previouspage`)
//         }
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//     });
//   };

//   return (
//     <div>
//       <h1>Book Slot</h1>
//       <form onSubmit={handleSubmit}>
//         <label for="time">Time:</label>
//         <select id="time" value={selectedTime} onChange={handleTimeChange}>
//           {[...Array(24)].map((_, index) => (
//             <option value={index} key={index}>
//               {index}:00 - {index + 1}:00
//             </option>
//           ))}
//         </select>
//         <br />
//         <label for="text">Text:</label>
//         <input type="text" id="text" value={textInput} onChange={handleTextChange} />
//         <br />
//         <button type="submit">Confirm Booking</button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookSlot() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(0);
  const [textInput, setTextInput] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value));
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/bookslot",{
        time: selectedTime,
        text: textInput,
        venueId: id,
    }).then(res => {
        console.log(res)
        if (res.data.error){
            alert(res.data.error)
        } else {
            navigate(`/previouspage`)
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Book Slot</h1>
      <form onSubmit={handleSubmit} className="w-2/3 flex flex-col items-center">
        <div className="mb-6">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time:</label>
          <select id="time" value={selectedTime} onChange={handleTimeChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {[...Array(24)].map((_, index) => (
              <option value={index} key={index}>
                {index}:00 - {index + 1}:00
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Court:</label>
          <input type="text" id="text" value={textInput} onChange={handleTextChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}
