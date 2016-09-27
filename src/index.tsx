import * as React from 'react';  
import { render } from 'react-dom';

import { HolaMundo } from './components/HolaMundo';

declare const document: any;


render(  
    <HolaMundo nombre="Yayu" herramienta="TypeScript" />,
    document.getElementById('app')
);