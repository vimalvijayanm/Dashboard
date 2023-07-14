import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


const gridLayout = () => {
  const layout = [
    { i: 'component1', x: 0, y: 0, w: 1, h: 2 },
    { i: 'component2', x: 1, y: 0, w: 2, h: 1 },
    
  ];

  const onLayoutChange = (newLayout) => {

    console.log(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={onLayoutChange}
    >
      <div key="component1">Component 1</div>
      <div key="component2">Component 2</div>
     
    </GridLayout>
  );
};

export default gridLayout;
