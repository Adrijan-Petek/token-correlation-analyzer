import React from 'react';
import sample from '../../sample_reports/report-sample.json';
export default function Home(){
  const data = sample.correlation_matrix || [];
  return <div style={{padding:20}}>
    <h1>Token Correlation Sample</h1>
    <pre>{JSON.stringify(data,null,2)}</pre>
  </div>;
}
