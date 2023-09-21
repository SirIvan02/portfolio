import React, { useState } from 'react'


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch('https://portfolio-backend-nine-rosy.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Errore durante l'invio del messaggiooo");
      }
  
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
  
    } catch (error) {
      console.error('Error sending message:', error);
    }finally {
      setIsSubmitting(false); // Imposta lo stato di invio su false dopo l'invio
    }
  };

  return (
  <div className='lg:flex justify-center lg:mt-20'>
    <div className='xl:mx-48 lg:mx-16 justify-center flex text-white'>
      <ul className='p-8'>
        <li className='bg-[#222222] rounded-lg p-4 mt-4 w-80 text-left'><i class="fa-solid fa-location-dot w-8 bg-[#ff8c42] text-center p-2 rounded-full mr-3"></i>Italy, Apulia, Taranto</li>
        <li className='bg-[#222222] rounded-lg p-4 mt-4 w-80 text-left'><i class="fa-solid fa-phone bg-[#ff8c42] p-2 rounded-full mr-3"></i>+39 370 372 0986</li>
        <li className='bg-[#222222] rounded-lg p-4 mt-4 w-80 text-left'><i class="fa-regular fa-envelope bg-[#ff8c42] p-2 rounded-full mr-3"></i>ivancamassa@gmail.com</li>
      </ul>
    </div>

    <div className='absolute w-0.5 h-1/2 bg-black hidden lg:block'></div>     

    <div className='m-auto justify-center h-0.5 w-1/2 bg-black lg:hidden'></div>

  <div className='flex justify-center content-center'>
    <form onSubmit={handleSubmit} className='rounded-lg drop-shadow-md text-left lg:w-[500px] p-8 '>
    <div className='my-6'>
      <label>Name</label><br/>
      <input type="text" name="name" placeholder='Jhon Smith' id='name' value={formData.name} onChange={handleChange} required className='md:w-[300px] min-w-[300px] rounded-md p-2'/>
    </div>

    <div className='my-6'>
      <label>Email</label><br/>
      <input type="email" name="email" placeholder='youremail@example.com' id='email' value={formData.email} onChange={handleChange} required className='md:w-[300px] min-w-[300px] rounded-md p-2'/>
    </div>
   
   <div className='my-6'>
      <label>Message</label><br/>
      <textarea name="message" id='message' placeholder='write your message here...' value={formData.message} onChange={handleChange} className='resize-none rounded-md md:min-h-[250px] md:min-w-[300px] p-2 min-w-[300px] min-h-[200px]' required/>
   </div>

    <div className='m-2'>
    {isSubmitting && <div className='text-green-600'>Message sent successfully!</div>}
      <input type="submit" value="Send" className='border-2 cursor-pointer text-[#ff8c42] border-[#ff8c42] hover:shadow-[#ff8c42] hover:bg-[#ff8c42] hover:text-white shadow-lg duration-300 px-4 py-2 text-xl rounded-md' />
    </div>
    </form>
  </div>
  </div>
  )
}

export default Form
