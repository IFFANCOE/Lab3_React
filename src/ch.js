import React from 'react';
import './ch.css';


class ch extends React.Component {
    render() {
        let count_end = this.props.check_count > 5 ? 'area2' : '';
        let count_ends = this.props.check_count > 5 ? "Game Over" : "Counter : " + this.props.check_count;
        let test = `area ${count_end}`
        return (
            <div>
                <div className={test}>
                <h1 className={test}>{this.count_end}{count_ends}</h1>
                </div>
            </div>
        )
    }
}
export default ch;