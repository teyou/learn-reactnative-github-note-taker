
import React, {
    Text,
    View,
    Component,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {marginTop: 65, flex: 1},
  image: {height: 350},
  buttonText:{fontSize: 24, color: 'white', alignSelf: 'center'}
});

class Dashboard extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text>This is dashboard</Text>
        <Text>{this.props.userInfo}</Text>
      </View>
    )
  }
};

module.exports = Dashboard;
