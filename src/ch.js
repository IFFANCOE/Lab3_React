import React from 'react';
import './ch.css';


class ch extends React.Component {
    render() {
        let count_1 = this.props.check_count > 5 ? 'area2' : '';
        let count_2 = this.props.check_count > 5 ? "Game Over" : "Counter : " + this.props.check_count;
        let test = `area ${count_1}`
        return (
            <div>
                <div className={test}>
                <h1 className={test}>{this.count_1}{count_2}</h1>
                </div>
            </div>
        )
    }
}
export default ch;