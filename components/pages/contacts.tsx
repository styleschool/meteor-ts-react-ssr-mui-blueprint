import * as React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import CardContacts from "./card_contacts"
import CardDetails from "./card_details"


export const Component = (props : any) => {
  return(
    
    <div>
      <YMaps>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '70%',
          height: '100%',
        }}>
          <Map state={{ center: [55.811791, 37.636338], zoom: 15 }} style={{position: 'relative'}} width={'100%'} height={'100%'}>
            <Placemark
              geometry={{
                coordinates: [55.811791, 37.636338]
              }}
              properties={{
                hintContent: 'Проспект Мира, 101с1',
                balloonContent: 'Small icon'
              }}
              options={{
                iconLayout: 'default#image',
                iconImageHref: 'pages/contacts/location.png',
                iconImageSize: [40, 40],
                
              }}
            />
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
    </div>
  )
}

export default Component;