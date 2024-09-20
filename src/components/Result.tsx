"use client"
import Image from "next/image"
import { useRef ,useState } from "react";
import MainLogo from "@/components/logomain.png"
import { StudentRollNumber } from "@/components/rollNumber"



const Result = () => {
  // yahan par yeh input se value lerha hai

  const rollNumberRef = useRef<HTMLInputElement>(null);
  const [getRollNumber , setRollNumber] = useState<string>("")
  const NewArray:string[]=[];
  const [Warnings,setWarnings] = useState<string>("")

  StudentRollNumber.forEach((e)=>{
   
    const Array= e.replace(/^0+/, "")
    NewArray.push(Array)

  })



  
  const handleCheck=()=>{

const RollNumbers = rollNumberRef.current?.value
if(RollNumbers){

const removeZero = RollNumbers.replace(/^0+/, "")
const condition:boolean = NewArray.includes(removeZero)

if(condition){
  setRollNumber("Pass")
  setWarnings("")
}else{
  setRollNumber("Fail")
  setWarnings("")
  
}
  
}else{
  setWarnings("Enter Your Roll Number First")
  setRollNumber("")
}

}


  return (
    
    <>

{/* // main container// */}

<div className="flex flex-col justify-between h-[100vh] w-full md:w-[450px] bg-white rounded-lg shadow-2xl md:h-[80vh]">

{/* heading div */}
<div className="flex rounded-t-lg justify-center items-center h-[60px] p-2 bg-gradiant-blue">
    <h1 className="text-white text-xl font-bold">Student Result</h1>
</div>
 
{/* Logo And Peragraph div */}

<div className="flex flex-col justify-center items-center text-[1rem] text-blue-800 font-semibold md:text-[1.1rem]">

<Image src={MainLogo} width={80} alt="logo" className="mt-[25px]"/>
<p  className="mt-[20px]">Governor Sindh Initiative for</p>
<p>Artificial Intelligence, Web 3.0 & Metaverse</p>

<input className="mt-6 text-center border-2 rounded-sm w-[80%] h-10 outline-none shadow-md focus:shadow-lg" ref={rollNumberRef} type="number" placeholder="Roll Number"/>




<button onClick={handleCheck} className="border border-blue-500 active:scale-95 transition-transform mt-6 w-40 h-9 rounded-3xl bg-blue">Check</button>

{/* Show Result Div */}
</div>
<h4 className={`text-center mt-6 text-2xl ${getRollNumber == "Pass"? "text-green-800":"text-red-950"} font-semibold  p-1 rounded-md`} >{getRollNumber}</h4>

<h6 className="text-center text-red-700">{Warnings}</h6>

<p className="text-gray-500 text-center relative mb-2">Made With Love By Muhammad Shahroz</p>
 </div>

 </>

  )
}

export default Result