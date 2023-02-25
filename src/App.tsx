import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MyModal from "./MyModal";
import MyModalWithoutDialog from "./MyModalWithoutDialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWithoutDialog, setIsOpenWithoutDialog] = useState(false);

  return (
    <>
      <div className="bg-green-300 h-12 sticky top-0">hi sticky</div>
      <div className="bg-blue-200 h-32">Hi</div>
      <div className="bg-orange-200 h-32">Hi</div>
      <button className="h-32 bg-purple-500 w-full" onClick={() => setIsOpen(true)}>
        Open Modal With Dialog
      </button>
      <button className="h-32 bg-orange-500 w-full" onClick={() => setIsOpenWithoutDialog(true)}>
        Open Modal Without Dialog
      </button>
      <div className="bg-blue-200 h-32">Hi</div>
      <div className="bg-orange-200 h-32">Hi</div>
      <div className="bg-blue-200 h-32 sticky top-12">Hi sticky</div>
      <div className="bg-orange-200 h-32">Hi</div>
      <div className="bg-blue-200 h-32">Hi</div>
      <div className="bg-orange-200 h-32">Hi</div>
      <div className="bg-blue-200 h-32">Hi</div>
      <div className="bg-orange-200 h-32">Hi</div>
      <div className="bg-blue-200 h-32">Hi</div>

      <MyModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <MyModalWithoutDialog isOpen={isOpenWithoutDialog} closeModal={() => setIsOpenWithoutDialog(false)} />
    </>
  );
}

export default App;
