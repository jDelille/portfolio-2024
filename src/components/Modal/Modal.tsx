import './Modal.scss';

export default function Modal() {
 return (
  <>
   <div className="overlay"></div>
   <div className='modal'>

    <div className="modal-header">
     <div className="close">X</div>
    </div>
    <div className="modal-content">
     <div className="title">Fretify - Interactive Guitar App</div>
    </div>

   </div>

  </>
 )
}
