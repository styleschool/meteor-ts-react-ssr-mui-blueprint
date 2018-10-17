import * as React from 'react';

import { YMaps } from 'react-yandex-maps';

const onApiAvaliable = (ymaps:any) => {
  if (!ymaps.panorama.isSupported()) {
    return;
  }
  ymaps.panorama.locate([55.811791, 37.636338]).done(
    function(panoramas:any) {
      if (panoramas.length > 0) {
        const player = new ymaps.panorama.Player("player", panoramas[0], {
          direction: [-70, 20]
        });
      }
    },
    function(error:any) {
      alert(error.message);
    }
  );
}

function Panorama() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      width: '100%',
    }}>
      <div id="player" style={{
        width: '100%',
        height: 350,
        margin: 0,
        padding: 0,
      }} />
      <YMaps onApiAvaliable={(ymaps:any) => onApiAvaliable(ymaps)} />
    </div>
  );
}

export default Panorama;