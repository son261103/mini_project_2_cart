import React, {Component} from 'react';
import {connect} from "react-redux";

class Notify extends Component {
    render() {
        let {notify} = this.props;
        if (notify) {
            return (
                <>
                    <div className="alert alert-success" role="alert" id="mnotification">
                        {notify}
                    </div>
                </>
            );
        }
        // return (
        //     <>
        //         <div className="alert alert-success" role="alert" id="mnotification">
        //             Updated <b>ivysaur</b>
        //         </div>
        //     </>
        // );
    }
}

 const mapStateToProps = (state) => {
     return {
         notify: state.notify
     };
 }

export default connect(mapStateToProps, null)(Notify); //export default Notify;