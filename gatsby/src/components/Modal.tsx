import React from 'react'

interface ModalProps {

}

const Modal: React.FC<ModalProps> = ({children}) => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity flex-shrink-0" aria-hidden="true">
            <div className="absolute inset-0 bg-rd-gray opacity-50"></div>
              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


              <div className="inline-block align-bottom bg-white    shadow-xl transform transition-all  my-32 sm:align-middle sm:max-w-lg w-11/12 mx-auto" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                
                  {/* <div className=""> */}
             
                
                    {children}
                    
                  
                  {/* </div> */}
                
              </div>
          </div>
        </div>
      </div>
    )
}
export default Modal