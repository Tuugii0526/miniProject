"use client"
import { DeleteIcon } from "./icons/DeleteIcon"
import { EditIcon } from "./icons/EditIcon"
import { useRef } from "react"
export const ItemCard=({item})=>{
    const editDialogRef=useRef(null)
    const onClick=()=>{
        if(editDialogRef.current)
        {
            editDialogRef.current.showModal()
        }
    }
    return (
        <>
        <div className="p-5 h-fit w-fit ring-1 ring-green-400 rounded-sm">
            <div className="flex gap-5 items-center">
                <p>Product name : {item.name}</p>
                <div className="flex gap-2 ">
                    <DeleteIcon />
                    <div onClick={onClick}>
                    <EditIcon />
                    </div>
                </div>
            </div>
            <p>Product category : {item.category}</p>
            <p>Price : ${item.price}</p>
        </div>

        <dialog ref={editDialogRef} class="modal" >
        <div class="modal-box ">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action ">
            <form method="dialog" >
              <button class='btn bg-green-400 '>Edit product</button>
            </form>
          </div>
        </div>
      </dialog>
        </>
    )
}