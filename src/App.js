import { Modal } from "./Components/Modal";
import { useState } from "react";

export function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <button
        className="open-modal-button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Subscribe
      </button>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
