import React, { Component } from 'react';
import "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log("update");
    }

    render() {
        return (
            <Aux>
                <Backdrop clicked={this.props.closeModal} show={this.props.show}></Backdrop>
                <div
                    className="modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )

    }
}

export default Modal;