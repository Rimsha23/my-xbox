import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { Collapse, initTE } from 'tw-elements';
import Button from '../../components/button';
import CardSlider from '../slide';
initTE({ Collapse });

const About = () => {
    const [myStyle, setmyStyle]= useState({
        color:'white',
        backgroundColor:'black'
    })
    const [btnText,setBtnText]= useState('Enable Light Mode')
    const toggleMode=()=>{
        if(myStyle.color === 'white'){
        setmyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText('Enable Dark Mode')
    }
    else{
        setmyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText('Enable Light Mode')
    }
    }
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handleAccordionToggle = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); 
    } else {
      setActiveAccordion(index); 
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center  w-3/4 mb-4 ' >
      <div id="accordionExample mt-4 justify-center items-center" >
        {/* Accordion Item #1 */}
        <div  className="rounded-t-lg mb-4 mt-16 border border-neutral-200  dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingOne">
            <button
            style={myStyle}
              class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded={activeAccordion === 1}
              aria-controls="collapseOne"
              onClick={() => handleAccordionToggle(1)}
            >
              Lost Password And Can't Sign In?
              <span
                className={`ml-auto h-5 w-5 shrink-0 rotate-[${activeAccordion === 1 ? '-180deg' : '0'}] fill-[#336dec] transition-transform duration-200 ease-in-out group-${activeAccordion !== 1 ? '[data-te-collapse-collapsed]' : ''}:rotate-0 group-${activeAccordion !== 1 ? '[data-te-collapse-collapsed]' : ''}:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-${activeAccordion !== 1 ? '[data-te-collapse-collapsed]' : ''}:fill-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`${activeAccordion === 1 ? 'visible' : 'hidden'}`}
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby="headingOne"
            data-te-parent="#accordionExample"
          >
            <div className="px-5 py-4"
            style={myStyle}
            >
            If you've forgotten your password and know the email address for your Microsoft account, you can reset your password online by verifying your identity using other information.
Reset your password
If you don't know your Microsoft account email address or password, follow the steps in:
Find your Microsoft account email addressReset or recover your lost Microsoft account password
If you're changing your password because you're worried your account was hacked or compromised, follow the steps in:
Secure your account if you think you've been hacked
            </div>
          </div>
        </div>

  <div
  
    class="border border-t-0 mb-4 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingTwo"> 
      <button
        class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        style={myStyle}
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        onClick={() => handleAccordionToggle(2)}>
        How To Change Your Xbox Gametag?
        <span
          class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
     id="collapseTwo"
     className={`${activeAccordion === 2 ? 'visible' : 'hidden'}`}
     aria-controls='collapseTwo'
     data-te-collapse-item
     data-te-collapse-show
     aria-labelledby="headingTwo"
     data-te-parent="#accordionExample"
   >

<div className="px-5 py-4"
style={myStyle}
>   
        The following are important things to note before changing your gamertag:
If this is your first time changing your gamertag, you can change it one time for free. This is regardless of whether we created it for you automatically when you first signed up for Xbox (meaning you didn't choose it yourself) or if you created your own gamertag at signup.<br></br>
<strong>Note: </strong> After changing your gamertag once, all future gamertag changes require a fee (cost varies by region and currency).
On Xbox 360: Gamertags can be up to 15 characters long, including spaces. They can't start with a number.
On Xbox One, Xbox Series X|S, and Windows: Gamertags can be up to 12 characters long, including spaces. They can't start with a number.
If you receive a message that says a gamertag is unavailable, this means that you'll need to try another. The gamertag that you're trying to create is either inappropriate for the Xbox service or can't be used at this time.
After you confirm your new gamertag, the change is reflected across Xbox. You don't need to tell your friends that you've changed it—their friends lists will be updated automatically.
</div>
      </div>
    </div>
  </div>
  <div
    class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button
      style={myStyle}
        class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        onClick={() => handleAccordionToggle(3)}>
        What Is Required To Get Insider Views?
        <span
          class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
     id="collapseThree"
     aria-controls='collpaseThree'
     className={`${activeAccordion === 3 ? 'visible' : 'hidden'}`}
     data-te-collapse-item
     data-te-collapse-show
     aria-labelledby="headingThree"
     data-te-parent="#accordionExample">
       
      <div class="px-5 py-4" style={myStyle}>
      Each Insider content preview has different requirements to participate. To view the requirements for each preview:
<br></br>1.Launch the Xbox Insider Hub.<br></br>
2.Go to Previews.<br></br>
3.Select the preview you want.<br></br>
4.Read the eligibility requirements on the Info tab of the Insider content details page.<br></br>
5.Note Only previews that you're eligible to participate in will appear in the Previews section of the Xbox Insider Hub. Previews may be specific to Xbox and Windows devices and not available across both.
      </div>
    </div>
  </div>
  </div>
  <div className='mt-6'>
    <Button variant='blue' onClick={toggleMode}>{btnText}</Button>
  </div>
  <CardSlider/>
        </>
    );
}
export default About;