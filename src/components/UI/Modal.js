import classes from './Modal.module.css'
function Modal(props) {
    return (
      <div className={classes.modal}>
        <p>{props.text}</p>
        <button className='btn btn--alt' onClick={props.onClose}>
          Cancel
        </button>
        <button className='btn' onClick={props.handlerDelete}>
          Confirm
        </button>
      </div>
    
    );
  }
  
  export default Modal;
  