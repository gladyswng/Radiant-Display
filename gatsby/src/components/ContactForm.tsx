import React from 'react'

interface ContactFormProps {
  small?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ small }) => {
    return (
      <div >
        {small ? 
        <form action="#">
            
            <div className="md:grid md:grid-cols-2 md:gap-2">
              
              <input type="text" id="name" placeholder="Name" className="focus:ring-yellow focus:border-yellow block w-full rounded px-2 my-2 text-darkgray font-light text-sm placeholder-gray"/>
              <input type="text" id="company" placeholder="Company" className=" focus:ring-yellow focus:border-yellow block w-full rounded px-2 my-2 text-darkgray font-light text-sm placeholder-gray"/>
              <input type="text" id="email" placeholder="Email" className=" col-span-2 focus:ring-yellow focus:border-yellow block w-full rounded px-2 my-2 text-darkgray font-light text-sm placeholder-gray"/>
      
              
             
              <textarea name="message" id="message" placeholder="Message" cols={30} rows={4} className="col-span-2 focus:ring-yellow focus:border-yellow block w-full rounded px-2 text-darkgray font-light text-sm placeholder-gray "></textarea>

            </div>
  
            <button className="block w-16 rounded px-2 mt-2 font-light text-gray bg-transparent border border-gray  focus:outline-none focus:ring focus:border-yellow hover:border-yellow hover:text-yellow ">Send</button>
        
        </form> :
        <form>
          <div className="md:grid md:grid-cols-2 md:gap-4">
              
              <input type="text" id="name" placeholder="Name" className="focus:ring-yellow focus:border-yellow block w-full rounded p-3 text-darkgray font-light text-sm placeholder-gray bg-lightGray"/>
              <input type="text" id="company" placeholder="Company" className="col-start-1 focus:ring-yellow focus:border-yellow block w-full rounded p-3 text-darkgray font-light text-sm placeholder-gray bg-lightGray"/>
              <input type="text" id="email" placeholder="Email" className="col-start-1  focus:ring-yellow focus:border-yellow block w-full rounded p-3 text-darkgray font-light text-sm placeholder-gray bg-lightGray"/>
              
              <textarea name="message" id="message" placeholder="Message" cols={25} rows={4} className="col-start-2 row-start-1 row-span-3 focus:ring-yellow focus:border-yellow block w-full rounded p-3 text-darkgray font-light text-sm placeholder-gray bg-lightGray"></textarea>

            </div>
  
            <button className="block rounded px-8 py-1 mt-4 font-light text text-yellow bg-transparent border border-yellow focus:outline-none focus:ring focus:border-yellow hover:border-yellow hover:text-yellow ">Send</button>

        </form>
        }
      </div>
    )
}
export default ContactForm