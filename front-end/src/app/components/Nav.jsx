"use client"
import { useRef } from "react"
export const Nav=()=>{
    const addDialogRef=useRef(null)
    const onClick=()=>{
        if(addDialogRef.current)
            {
                addDialogRef.current.showModal()
            }
    }
    return <div className="w-full h-fit flex justify-center items-center py-5 shadow-sm">
   <button class="btn bg-green-400" onClick={onClick}>Add product</button>
<dialog ref={addDialogRef} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog" >
        <button class='btn bg-green-400 '>Add product</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
}
