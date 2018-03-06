import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
//import everything from the index.js file in actions folder and assign it to a variable actions:
import * as actions from '../components/actions';

class ListItem extends Component {
    //compWillUpdate is called whenever the comp is about to be re-rendered to the device:
    componentWillUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props;
        // console.log(library.id, library.description)

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}
//Moving Logic out of the component, using ownProps
//ownProps is an object that is exactly equal to this.props inside of the component. 
const mapStateToProps = (state, ownProps) => {
    //this line is the same as (library.id === selectedLibraryId); refactoring here:
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);