import { IoCloseOutline } from "react-icons/io5";

const DeleteButton = () => {
 return (
  <button 
    className="
      absolute 
      top-2.5 
      right-3.5
      opacity-0 
      group-hover:opacity-100 
      group-hover:bg-gradient-to-r 
      group-hover:from-white 
      group-hover:to-gray-100 
      text-black 
      transition-opacity 
      duration-300
    "
  >
    <IoCloseOutline className="w-5 h-5"/>
  </button>
 );
}

export default DeleteButton;