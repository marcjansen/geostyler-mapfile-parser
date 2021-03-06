import { Style } from 'geostyler-style';

const pointStyle: Style = {
  name: 'Simple point',
  rules: [{
    name: 'Test point',
    symbolizers: [{
      kind: 'Mark',
      wellKnownName: 'Circle',
      color: '#00FF00',
      radius: 7.5,
      rotate: 360,
      opacity: 1,
      strokeColor: '#000000',
      strokeWidth: 1,
      strokeOpacity: 1  // same as opacity
    }]    
  }]
};

export default pointStyle;
