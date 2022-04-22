function Modal(props) {
    function cancelHandler() {
        props.onCancel();

    }

    function confirmHandler() {
        props.onConfirm();
    }


    return (
        <div className='modal'>
            <p>Confirm?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>No</button>
            <button className='btn' onClick={confirmHandler}>Yes</button>
        </div>
    );
}

export default Modal;