
import * as React from 'react';

export default function MyComponent({
  title='This is a sample React component'
}) {
  const styles = {
    main: {
      padding: "24px",
      fontFamily: "Wix Madefor Text",
      textAlign: "center",
      background: "#FFFFFF"
    },
    title: {
      fontWeight: "bold",
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: "24px",
      textAlign: "center",
      marginTop: "15px",
      marginBottom: "5px",
    },
    subtitle: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0px",
      color: '#595D70'
    },
  };
  
  return (
    <div style={styles.main}>
      <img src='http://wix.to/6gubljp' width='120px' height='100px' />
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.subtitle}>Write your own from scratch or import an external React component. Make sure to install any NPM packages your component requires.</p>
    </div>
  );
}