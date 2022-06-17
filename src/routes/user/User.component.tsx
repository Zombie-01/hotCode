import React from 'react';
import { useRouter } from 'next/router';

export default function User(): JSX.Element {
  const { asPath } = useRouter();
  return(
    <>
      <div style={ {padding: '100px' } }>user ===   { asPath.split('/')[2] }</div>  
    </>
  );
}