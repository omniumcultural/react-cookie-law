import React from 'react';
import CookieBanner from './components/CookieBanner';
import CookiePanel from './components/CookiePanel';


import { isServer } from './helpers';

const CookieBannerUniversal = props => (isServer() ? null : <CookieBanner {...props} />);
const CookiePanelUniversal = props => (isServer() ? null : <CookiePanel {...props} />);

export { CookieBannerUniversal as CookieBanner };
export { CookiePanelUniversal as CookiePanel };
