import {lazy} from 'react';

const MainLazy = lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
}) );

export {MainLazy as MainPage };