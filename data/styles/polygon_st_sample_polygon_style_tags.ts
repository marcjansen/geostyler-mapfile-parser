import { Style } from 'geostyler-style';

const polygonStyle: Style = {
  name: 'Simple polygon',
  rules: [{
    name: 'Test polygon',
    symbolizers: [{
      kind: 'Fill',
      color: '#00FF00',
      outlineColor: '#555555',
      opacity: 0.7,
      outlineWidth: 2
    }]
  }]
};

export default polygonStyle;
