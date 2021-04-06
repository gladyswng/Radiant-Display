import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'


interface ContactFormProps {
  small?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ small }) => {



    return (
      <div >
        {/* {small ? 
        <form action="#">
            
            <div className="md:grid md:grid-cols-2 md:gap-2">
              
              <input type="text" id="name" placeholder="Name" className="form-input-simple"/>
              <input type="text" id="company" placeholder="Company" className="form-input-simple"/>
              <input type="text" id="email" placeholder="Email" className="form-input-simple col-span-2"/>
      
              
             
              <textarea name="message" id="message" placeholder="Message" cols={30} rows={4} className="form-input-simple col-span-2"></textarea>

            </div>
  
            <button className="btn-response block w-16 rounded px-2 mt-2 font-light text-rd-gray bg-transparent border border-rd-gray   hover:text-rd-yellow hover:border-rd-yellow">Send</button>
        
        </form> : */}
        <Formik 
          initialValues={{
            name: '',
            email: '',
            company: '',
            message: ''
          }}
          validate={values => {
            const errors:any = {}
            if (!values.email) {
              errors.email = '* Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = '* Invalid email address'
            }
            if (!values.message) {
              errors.message = '* Message required'
            }
            if (!values.company) {
              errors.company = '* Company name required'
            }
            return errors

          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            console.log(values)
            setSubmitting(false)
            resetForm()
          }}
        >
          {({
            handleSubmit,
            isSubmitting,
            errors
          }) => (
            <Form onSubmit={handleSubmit}> 
            {small? 
            
              <>
              {/* Render simple form in footer */}
               <div className="flex flex-col">

                  <div className="mb-1">
                    <Field name="company" type="text" id="company" placeholder="Company" className="form-input-simple"/>
                    <ErrorMessage name="company" component="span" className="text-rd-red text-xs block" />

                  </div>
                  <div className="mb-1">
                    <Field name="email" type="text" id="email" placeholder="Email" className="form-input-simple"/>
                    <ErrorMessage name="email" component="span" className="text-rd-red text-xs block" />

                  </div>

                  <div className="mb-1">
                    <Field name="message" id="message" placeholder="Message" cols={30} rows={4} className="form-input-simple" as="textarea"/>
                    <ErrorMessage name="message" component="span" className="text-rd-red text-xs block" />

                  </div>
                  
                

                </div>
      
                <button className="btn-response block w-16 rounded px-2 mt-2 font-light text-rd-gray bg-transparent border border-rd-gray   hover:text-rd-yellow hover:border-rd-yellow">Send</button>
              </>
              :
              <>
              {/* Render bigger form */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                
                
                <div className="col-start-1">
                  <Field type="text" id="name" name="name" placeholder="Name" className="form-input" />
                  <ErrorMessage name="name" component="span" className="text-rd-red text-xs block" />

                </div>
                <div className="col-start-1 relative">
                  <Field type="text" id="company" name="company" placeholder="Company" className="form-input"/>
                  <ErrorMessage name="company" component="span" className="text-rd-red text-xs block md:absolute b-0" />
                  

                </div>
                
                <div className="col-start-1 relative">
                  <Field type="email" name="email" id="email" placeholder="Email" className="form-input"/>
                  <ErrorMessage name="email" component="span" className="text-rd-red text-xs block md:absolute b-0" />

                </div>
                
                <div className="col-start-2 row-start-1 row-span-3 relative">
                <Field name="message" id="message" placeholder="Message" cols={25}  className="form-input h-full" as="textarea"/>
                <ErrorMessage name="message" component="span" className=" text-rd-red text-xs block md:absolute b-0" />

                </div>

              </div>

              <button className="btn-response block rounded px-8 py-1 mt-4 font-light text text-rd-yellow bg-transparent border border-rd-yellow" type="submit" disabled={isSubmitting}>Send</button>
              </>}

            </Form>
          )}

          
        </Formik>
      </div>
    )
}
export default ContactForm