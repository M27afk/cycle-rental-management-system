import React from 'react';
import { Document as Doc, Page as Pag, Text as Tex, View as Vie, StyleSheet as Sty} from '@react-pdf/renderer';

// Create styles
const styles = Sty.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Doc>
    <Pag size="A4" style={styles.page}>
      <Vie style={styles.section}>
        <Tex>Section #1</Tex>
      </Vie>
      <Vie style={styles.section}>
        <Tex>Section #2</Tex>
      </Vie>
    </Pag>
  </Doc>
);

export default MyDocument();