import { DripsyProvider } from 'dripsy';
import React from 'react';
import Mockup from './Mockup';
import { View, Text } from 'dripsy';
import Fonts from './fonts'

const radii = [0, 2, 4, 8, 16, 32];
radii.rounded = 999999;

const theme = {
  colors: {
    background: '#000',
    muted: '#222',
    muted2: '#333',
    muted3: '#008b8b',
    text: '#fff',
    error: '#FF0000',
    warning: '#F5A623',
    success: '#00C806',
    cyan: '#50E3C2'
  },
  text: {
    body: {
      color: 'text',
    },
  },
  space: [0, 4, 8, 16, 32, 64],
  radii,
};
function InnerApp () {
<DripsyProvider theme={theme}>
      <View sx={{ py: 5, px: 3, flex: 1, bg: 'background' }}>
        <Mockup url="poet.cool">
          <View 
            sx={{ height: 400, bg:'cyan', justifyContent: 'center'}}
          >
            <Text sx={{ color: 'background', textAlign: 'center', fontWeight: 'bold' }}>
              Poet
            </Text>
            <Text sx={{ color: 'muted3', textAlign: 'center', fontWeight: 'bold' }}>
              Cool
            </Text>
          </View>
        </Mockup>
      </View>
    </DripsyProvider>
}

export default function App() {
  return (
    <Fonts>
      <InnerApp />
    </Fonts>
  
  );
}
