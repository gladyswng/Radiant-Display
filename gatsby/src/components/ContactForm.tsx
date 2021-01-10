import React from 'react'

interface ContactFormProps {
  small?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ small }) => {
  const styles = {
    inputStyleS: "focus:ring-rd-yellow focus:border-rd-yellow block w-full rounded px-2 my-2 md:my-0 text-rd-darkGray font-light text-sm placeholder-rd-gray",
    inputStyle: "focus:ring-rd-yellow focus:border-rd-yellow block w-full rounded p-3 my-2 md:my-0 text-rd-darkGray font-light text-sm placeholder-rd-gray bg-rd-lightGray",
    button: "focus:outline-none focus:ring focus:border-rd-yellow hover:border-rd-yellow hover:text-rd-yellow "
  }


    return (
      <div >
        {small ? 
        <form action="#">
            
            <div className="md:grid md:grid-cols-2 md:gap-2">
              
              <input type="text" id="name" placeholder="Name" className={styles.inputStyleS}/>
              <input type="text" id="company" placeholder="Company" className={styles.inputStyleS}/>
              <input type="text" id="email" placeholder="Email" className={`${styles.inputStyleS} col-span-2`}/>
      
              
             
              <textarea name="message" id="message" placeholder="Message" cols={30} rows={4} className={`${styles.inputStyleS} col-span-2`}></textarea>

            </div>
  
            <button className={`${styles.button} block w-16 rounded px-2 mt-2 font-light text-rd-gray bg-transparent border border-rd-gray `}>Send</button>
        
        </form> :
        <form>
          <div className="md:grid md:grid-cols-2 md:gap-4">
              
              <input type="text" id="name" placeholder="Name" className={styles.inputStyle}/>
              <input type="text" id="company" placeholder="Company" className={`${styles.inputStyle} col-start-1`}/>
              <input type="text" id="email" placeholder="Email" className={`${styles.inputStyle} col-start-1`}/>
              
              <textarea name="message" id="message" placeholder="Message" cols={25} rows={4} className={`${styles.inputStyle} col-start-2 row-start-1 row-span-3`}></textarea>

            </div>
  
            <button className={`${styles.button} block rounded px-8 py-1 mt-4 font-light text text-rd-yellow bg-transparent border border-rd-yellow`}>Send</button>

        </form>
        }
      </div>
    )
}
export default ContactForm