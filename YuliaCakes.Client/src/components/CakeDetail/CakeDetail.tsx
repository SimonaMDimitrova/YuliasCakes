import * as React from 'react';
import CakeDetailsModel from '../../models/cake-details';

interface CakeDetailProps {
  children?: React.ReactNode;
}

export default function CakeDetail(props: CakeDetailProps) {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        Тортичка :P
      </div>
    </React.Fragment>
  );
}