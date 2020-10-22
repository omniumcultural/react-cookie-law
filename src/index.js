import React from 'react';
import CookieBanner from './components/CookieBanner';
import CookiePanel from './components/CookiePanel';
import CookieBanner2 from './components/CookieBanner2';


import { isServer } from './helpers';

const CookieBannerUniversal = props => (isServer() ? null : <CookieBanner {...props} />);
const CookiePanelUniversal = props => (isServer() ? null : <CookiePanel {...props} />);
const CookieBannerUniversal2 = props => (isServer() ? null : <CookieBanner2 {...props} />);

export { CookieBannerUniversal as CookieBanner };
export { CookiePanelUniversal as CookiePanel };
export { CookieBannerUniversal2 as CookieBanner2 };