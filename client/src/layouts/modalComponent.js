import React from "react";


const Modal = (props) => (
    <div className="modal" id="exampleModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="button muted-button" data-dismiss="modal">Close</button>
                    <button type="button" className="button muted-button">Save changes</button>
                </div>
            </div>
        </div>
    </div>
);


export default Modal;