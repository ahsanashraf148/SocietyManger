import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      className="bg-gray-800 p-6 rounded-lg max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
    <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      {children}
      <div className="mt-4 text-right">
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;