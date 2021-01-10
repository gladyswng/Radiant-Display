import React from 'react'
import QuestionIcon from '../svg/question.svg'
import AnswerIcon from '../svg/answer.svg'
import AboutNavbar from '../components/SubNavbar'

interface FAQProps {

}

const FAQ: React.FC<FAQProps> = ({}) => {

  const QAList = [
    {
      q: 'Can you design the LCD according to customers request?',
      a: 'Yes, we can make the design as you want. We have our own R & D team, we can produce the drawing for you with shortest time & affordable tooling price. '
    },
    {
      q: 'Can we make additional teatures for our LCD?',
      a: 'Sure, touch screen , irregular shape, silk printing with multiple colors, drilled hole, backlight with a wide range of colors could be added according to your requirements. '
    },
    {
      q: 'How can we start proceeding the order?',
      a: 'First, development fee is needed to be paid for customizing & manufacturing the sample. After payment is received, it would take 3-5 days to produce the drawing. After drawing is confirmed from your side, It would take 25 days to produce the sample. After sample is confirmed from your side, it would take 30-35 days to produce your mass order.'

    }
  ]
    return (
      <>
      <div className="flex items-center flex-col w-full mb-20">
        <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6 ">FAQ</h1>
        

        <div  className="w-9/12 flex flex-col divide-y divide-rd-lightGray">
          {QAList.map(qa => {

            return (
            <div key={qa.q} className="flex py-8">

              <QuestionIcon className="inline-block mr-3"  width="40px" height="40px" fill="#fbc531" style={{ minWidth:"40px" }}/>
              <div>
                 <span className="inline-block align-top text-rd-darkGray text-lg mb-4">{qa.q}</span>
                 <span className="align-top text-rd-darkGray font-light inline-block" style={{ maxWidth:"1000px" }}>{qa.a}</span>

              </div>

              {/* <div className=" flex my-4">
            
          
                  <QuestionIcon className="inline-block mr-3"  width="40px" height="40px" fill="#fbc531" style={{ minWidth:"40px" }}/>

              <span className="inline-block align-top text-rd-darkGray text-lg">{qa.q}</span>
                


              </div>
              <div className="flex mb-6 ml-12">

               <span className="align-top text-rd-darkGray font-light inline-block" style={{ maxWidth:"1000px" }}>{qa.a}</span>
              </div> */}
            </div>
            )
          })}

        </div>

  

         

        
               
                
        <div>
          


          

        </div>
      </div>
      </>
    )
}
export default FAQ