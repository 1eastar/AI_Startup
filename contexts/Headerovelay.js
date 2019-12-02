import React, {createContext} from 'react';

const context = createContext();
const {Provider, Consumer:HeaderoverlayConsumer} = context;

class HeaderoverlayProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //
            modalVisible:false,
        };
        this.action={
            //
            setModalVisible : (visible) => {
                this.setState({modalVisible: visible});
            }
        };
    }

    render(){
        const {state, action} = this;
        const value = {state, action};

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export {HeaderoverlayConsumer, HeaderoverlayProvider};