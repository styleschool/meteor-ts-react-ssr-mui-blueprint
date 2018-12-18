import * as React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import CardContacts from "./card_contacts"
import CardDetails from "./card_details"

var propertiesMap = {
  moscow: { 
    mapProp: {
      center : [55.811791, 37.636338],
      zoom : 15
    },
    placemarkProp: {
      geometry: {
      coordinates: [55.811791, 37.636338]
      },
      properties: {
        hintContent: 'Проспект Мира, 101с1',
        balloonContent: 'Small icon'
      },
      options: {
        iconLayout: 'default#image',
        iconImageHref: 'pages/contacts/location.png',
        iconImageSize: [40, 40],
      }   
    }
  },
  
  novosib: {
    mapProp: {
      center : [55.027903, 82.926727],
      zoom : 15
    },
    placemarkProp: {
      geometry: {
      coordinates: [55.027903, 82.926727]
      },
      properties: {
        hintContent: 'ул. Максима Горького, 79',
        balloonContent: 'Small icon'
      },
      options: {
        iconLayout: 'default#image',
        iconImageHref: 'pages/contacts/location.png',
        iconImageSize: [40, 40],
      }  
    }
  },
  
  smolensk: {
    mapProp: {
      center : [54.767700, 32.067466],
      zoom : 15
    },
    placemarkProp: {
      geometry: {
      coordinates: [54.767700, 32.067466]
      },
      properties: {
        hintContent: 'Хлебозаводской пер. 7, стр. 6',
        balloonContent: 'Small icon'
      },
      options: {
        iconLayout: 'default#image',
        iconImageHref: 'pages/contacts/location.png',
        iconImageSize: [40, 40],
      }  
    }
  },
};


class Component extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {coord : 'moscow'}
  };
  
  render() {
    
    return (
      <div>
        <YMaps>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '70%',
            height: '100%',
          }}>
            <Map state={propertiesMap[this.state.coord].mapProp} style={{position: 'relative'}} width={'100%'} height={'100%'}>
              <Placemark {...propertiesMap[this.state.coord].placemarkProp}/>
            </Map>
          </div>
        </YMaps>
        <div style={{
          position: 'absolute',
          top: '70%',
          right: 0,
          height: 0,
        }}>
          <div style={{
            width: 650,
            maxHeight: '100vh',
            transformOrigin: 'right center',
            transform: 'translateY(-70%)',
            overflowY: 'scroll',
            padding: 15,
          }}>
            <div>
              <CardContacts />
              <CardDetails />
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: '40%',
          right: 0,
          height: 0,
        }}>
          <div style={{
            width: 150,
            transform: 'translateY(-40%)',
            padding: 15,
          }}>
            <button onClick={() => this.setState({coord: 'moscow'})}>Москва</button>
            <button onClick={() => this.setState({coord: 'novosib'})}>Новосибирск</button>
            <button onClick={() => this.setState({coord: 'smolensk'})}>Смоленск</button>
          </div>
        </div>
      </div>
    )
  };
}

export default Component;