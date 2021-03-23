import React from 'react'

interface ModalProps {

}

const Modal: React.FC<ModalProps> = ({children}) => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-rd-gray opacity-50"></div>
              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-rd-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
             
                  
                        {children}
                    
                  
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}
export default Modal