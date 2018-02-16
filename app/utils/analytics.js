
import ReactGA from 'react-ga';

function gaInit(gaId) {
    console.debug('GA Init', gaId);
    ReactGA.initialize(gaId);
}
export function gaPageView() {
    // Is set redundant here? (code copied verbatim)
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
};
export function gaEvent(category, action) {
    console.debug('GA Event', category, action);
    ReactGA.event({category, action});
}

// Mapping of links in markdown fields to an appropriate ga click action
export const gaTrackedLinks = {
    'https://docs.google.com/forms/d/e/1FAIpQLSfbN0Qb5P2ORCHYl4UPEdA-01I-ixPP9TRjEFv5c05HGguwrA/viewform': 'training-form-request',
    'https://beautifulrising.org/BeautifulRising_Game_English.pdf': 'game-download',
    'https://beautifulrising.org/BeautifulRising_Game_French.pdf': 'game-download',
    'https://api.beautifulrising.org/pdf/download?lang=en&size=letter': 'pdf-download',
    'https://api.beautifulrising.org/pdf/download?lang=es&size=letter': 'pdf-download',
    'https://api.beautifulrising.org/pdf/download?lang=ar&size=letter': 'pdf-download',
    'https://api.beautifulrising.org/pdf/download?lang=pt&size=letter': 'pdf-download',
};

gaInit('UA-53723508-2');

