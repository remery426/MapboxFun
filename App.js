import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import Button from './Components/Button';
import Header from './Components/Header';
Mapbox.setAccessToken('pk.eyJ1IjoicmVtZXJ5NDI2IiwiYSI6ImNqZmFhd2RsdDJsZDQyd3FoY2N5Y2JicTQifQ.S4Pu3-jZR3ogK_lQj2MwAQ');
const VECTOR_SOURCE_URL ='mapbox://remery426.3cx61bud'
import smileyFaceGeoJSON from './smileyface.json';
import seattle from './seattle.json';
import ImgButton from './Components/ImgButton';
const coords = [{long:47.620380,lat:-122.349319, name: "Space Needle "},{long:47.651780,lat: -122.347303, name: "Fremont Troll"},{long:47.625393,lat:-122.337834, name: "Gum Wall"}]
export default class App extends Component<{}> {
  constructor(){
    super();
      this.state = {index:0,welcome:true,zoom:9,day:Mapbox.StyleURL.Street}
  }
  componentDidMount(){
    this.dayTime()
    setTimeout(()=> this.setState({
      welcome: false,
      zoom: 15
    }), 4000)
  }
  dayTime(){
    var  date  = new Date()
    var time = date.getHours()
    if(time < 6 || time >= 19){
      this.setState({
        day: Mapbox.StyleURL.Dark
      })
    }
    else{
      this.setState({
        day: Mapbox.StyleURL.Street
      })
  }
}
  nextEvent(){
    if(this.state.index==coords.length-1){
    this.setState({
      index: 0,
    })
  }
  else{
    this.setState({
      index:this.state.index+1,
    })
  }
  }
  lastEvent(){
    if(this.state.index==0){
    this.setState({
      index: coords.length-1,
    })
  }
  else{
    this.setState({
      index:this.state.index-1,
    })
  }
  }
  changeDay(){
    if(this.state.day == Mapbox.StyleURL.Street){
      this.setState({
        day: Mapbox.StyleURL.Dark
      })
    }
    else{
      this.setState({
        day: Mapbox.StyleURL.Street
      })
    }
  }
  zoomOut(){
    this.setState({
      zoom: this.state.zoom -1
    })
  }
  zoomIn(){
    this.setState({
      zoom: this.state.zoom + 1
    })
  }
  showButtons(){
    if(this.state.welcome == false){
      return(
      <View>
      <View style = {styles.buttonBar}>
      <Button onPress= {this.lastEvent.bind(this)}> Last </Button>
      <Button onPress= {this.nextEvent.bind(this)}> Next </Button>
      </View>
      <Text style= {{alignSelf:'center', fontSize: 22}}> {coords[this.state.index].name} </Text>
      </View>
    )
    }
    else{
      return(
        <Text style = {{fontSize:22, alignSelf:'center'}}> Welcome to Seattle! </Text>
      )
    }
  }
  renderAnnotations () {
  if(this.state.welcome == false){
  return (
    <Mapbox.PointAnnotation
      key='pointAnnotation'
      id='pointAnnotation'
      coordinate={[coords[this.state.index].lat, coords[this.state.index].long]}>
      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <Mapbox.Callout title= {coords[this.state.index].name} />
    </Mapbox.PointAnnotation>
  )
}

}

  render() {
    return (
      <View style ={styles.bigContainer}>
      <Header />
      {this.showButtons()}
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={this.state.day}
            zoomLevel={this.state.zoom}
            centerCoordinate={[coords[this.state.index].lat, coords[this.state.index].long]}
            style={styles.container}

            showUserLocation={true}>
            {this.renderAnnotations()}
            <Mapbox.VectorSource>
              <Mapbox.BackgroundLayer id='background' style={layerStyles.background} />
                </Mapbox.VectorSource>
                        <Mapbox.ShapeSource id='smileyFaceSource' shape={seattle}>
                          <Mapbox.FillLayer id='smileyFaceFill' style={layerStyles.smileyFace} />
                        </Mapbox.ShapeSource>
        </Mapbox.MapView>
      </View>
      <View style = {styles.footerBar}>
      <View style = {styles.buttonBar}>
      <ImgButton onPress= {this.changeDay.bind(this)} src = 'https://cdn0.iconfinder.com/data/icons/bubbly-icons/512/Idea_Electricity_Bulb_Innovation_Innovative_Lightbulb1-256.png'> </ImgButton>
      <ImgButton onPress= {this.zoomOut.bind(this)} src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/80633-200.png'> </ImgButton>
      <ImgButton onPress= {this.zoomIn.bind(this)} src = 'https://image.freepik.com/free-icon/plus-sign-in-a-circle_318-53198.jpg'> </ImgButton>


      </View>
      </View>
      </View>
    );
  }
}
const layerStyles = Mapbox.StyleSheet.create({
  smileyFace: {
    fillAntialias: true,
    fillOpacity:.2,
    fillColor: 'green',
    fillOutlineColor: 'rgba(255, 255, 255, 0.84)',
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigContainer: {
    padding: 10,
    flex: 1
  },
  buttonBar: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  annotationContainer: {
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 15,
},
annotationFill: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: 'orange',
  transform: [{ scale: 0.6 }],
}
});
