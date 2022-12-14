import * as React from "react";

class DefaultProperties extends React.Component {

    static defaultProps = {
        disabled: false,
        text: "My Button"
    };

    render() {
        const {disabled, text} = this.props;
        return (
            <button disabled={disabled}>{text}</button>
        );
    }
}

export default DefaultProperties;