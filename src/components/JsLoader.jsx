/**
 * Workaround to import bootstrap js bundle
 */

'use client';
import { useEffect } from 'react';

const JsLoader = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <></>;
};

export default JsLoader;
