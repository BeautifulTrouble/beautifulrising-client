// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import ContactUs from 'containers/ContactUs/sagas';
import EmailTools from 'containers/EmailTools/sagas';
import NewsFeed from 'containers/NewsFeed/sagas';
import Tools from 'containers/Tools/sagas';
import TranslatableStaticText from 'containers/TranslatableStaticText/sagas';
import SubmitNewsFeed from 'containers/SubmitNewsFeed/sagas';
import HomePage from 'containers/HomePage/sagas';
import WhatsHappening from 'containers/WhatsHappening/sagas';
import {changeLocale} from 'containers/LanguageProvider/actions';
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  injectSagas(ContactUs);

  injectSagas(WhatsHappening);

  //enable email everywhere
  injectSagas(EmailTools);

  //for HomePage
  injectSagas(HomePage);

  //get news feed
  injectSagas(NewsFeed);

  //close tools when changing locs
  injectSagas(Tools);

  injectSagas(TranslatableStaticText);

  injectSagas(SubmitNewsFeed);

  // TODO Re-examine this
  // injectSagas(LanguageProvider);

  const getHomePageComponent = (nextState, cb) => {
    const importModules = Promise.all([
      import('containers/HomePage/reducer'),
      // import('containers/SearchField/sagas'),
      import('containers/HomePage'),
      import('containers/ToolsViewOptions/reducer'),
      import('containers/ToolsSortOptions/reducer'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, /*searchSagas,*/ component,
          toolsViewOptionsReducer, toolsSortOptionsReducer]) => {
      injectReducer('homePage', reducer.default);
      // injectSagas(searchSagas.default);

      injectReducer('toolsView', toolsViewOptionsReducer.default);
      injectReducer('toolsSort', toolsSortOptionsReducer.default)

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  };

  return [
    {
      path: '/',
      name: 'homePage',
      getComponent: getHomePageComponent,
    },
    {
      path: '/whats-happening',
      name: 'whats-happening',
      ignoreScrollBehavior: true, //for useScroll
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/WhatsHappening'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([component]) => {
            renderRoute(component);
          });

          importModules.catch(errorLoading);

      },
    },
    {
      path: '/tool(/:label)*',
      name: 'tool',
      scrollToTop: true, 
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/ToolPage/reducer'),
            import('containers/ToolPage/sagas'),
            import('containers/SubmitRealWorldExample/sagas'),
            import('containers/AskTheContributor/sagas'),
            import('containers/ToolPage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, toolPageSagas, worldExampleSagas, askContributor, component]) => {
            injectReducer('tool', reducer.default);
            injectSagas(toolPageSagas.default);
            injectSagas(worldExampleSagas.default);
            injectSagas(askContributor.default);
            renderRoute(component);
          });

          importModules.catch(errorLoading);

      },
    },
    {
      path: '/about(/:section)*',
      name: 'about',
      ignoreScrollBehavior: true, //for useScroll
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/AboutPage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([component]) => {
            renderRoute(component);
          });

          importModules.catch(errorLoading);

      },
    },
    {
      path: '/contribute(/:section)*',
      name: 'contribute',
      ignoreScrollBehavior: true, //for useScroll
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/ContributePage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([component]) => {
            renderRoute(component);
          });

          importModules.catch(errorLoading);

      },
    },
    {
      path: '/resources(/:section)*',
      name: 'resources',
      ignoreScrollBehavior: true, //for useScroll
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/TrainingPage'),
          ]);

          const renderRoute = loadModule(cb);
          importModules.then(([component]) => {
            renderRoute(component);
          });
          importModules.catch(errorLoading);
      },
    },
    {
      path: '/platforms(/:section)*',
      name: 'platforms',
      ignoreScrollBehavior: true, //for useScroll
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/PlatformsPage'),
          ]);

          const renderRoute = loadModule(cb);
          importModules.then(([component]) => {
            renderRoute(component);
          });
          importModules.catch(errorLoading);
      },
    },
    // Entrance
    {
      path: '/ar(/:items)*',
      name: 'arabic',
      onEnter: function(nextState, replace, next) {
        const nextPath = nextState.params.items ? `/${nextState.params.items}${nextState.params.splat}` : '/';
        replace(nextPath);
        setTimeout(function() {
          store.dispatch(changeLocale("ar"));
          next();
        }, 50);      }
    },
    {
      path: '/en(/:items)*',
      name: 'english',
      onEnter: function(nextState, replace, next){
        const nextPath = nextState.params.items ? `/${nextState.params.items}${nextState.params.splat}` : '/';
        replace(nextPath);
        setTimeout(function() {
          store.dispatch(changeLocale("en"));
          next();
        }, 50);
      }
    },
    {
      path: '/es(/:items)*',
      name: 'homePage',
      onEnter: function(nextState, replace, next) {
        const nextPath = nextState.params.items ? `/${nextState.params.items}${nextState.params.splat}` : '/';

        replace(nextPath);
        setTimeout(function() {
          store.dispatch(changeLocale("es"));
          next();
        }, 50);
      },
    },
    {
      path: '/:filter(type|tag|search)(/:label(/:region)*)*',
      name: 'homePage',
      getComponent: getHomePageComponent,
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
