import React, {
    Component,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

var styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F6F6EF', flexDirection: 'column' },
})
class MyWebView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{ uri: this.props.url }}></WebView>
            </View>
        )
    };
};

MyWebView.propTypes = {
    url: React.PropTypes.string.isRequired
};

module.exports = MyWebView;