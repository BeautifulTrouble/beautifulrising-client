// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import ContactUs from 'containers/ContactUs/sagas';
import EmailTools from 'containers/EmailTools/sagas';
import LanguageProvider from 'containers/LanguageProvider/sagas';
import NewsFeed from 'containers/NewsFeed/sagas';

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
  injectSagas(EmailTools);
  injectSagas(NewsFeed);

  // TODO Re-examine this
  // injectSagas(LanguageProvider);

  const getHomePageComponent = (nextState, cb) => {
    const importModules = Promise.all([
      import('containers/HomePage/reducer'),
      import('containers/HomePage/sagas'),
      import('containers/HomePage'),
      import('containers/ToolsViewOptions/reducer'),
      import('containers/ToolsSortOptions/reducer')
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, sagas, component,
          toolsViewOptionsReducer, toolsSortOptionsReducer]) => {
      injectReducer('homePage', reducer.default);
      injectSagas(sagas.default);

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
      path: '/tool(/:label)*',
      name: 'tool',
      getComponent(nextState, cb) {

          const importModules = Promise.all([
            import('containers/ToolPage/reducer'),
            import('containers/ToolPage/sagas'),
            import('containers/SubmitRealWorldExample/sagas'),
            import('containers/ToolPage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, worldExampleSagas, component]) => {
            injectReducer('tool', reducer.default);
            injectSagas(sagas.default);
            injectSagas(worldExampleSagas.default);
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
            import('containers/AboutPage/sagas'),
            import('containers/AboutPage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([sagas, component]) => {
            injectSagas(sagas.default);
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
            import('containers/AboutPage/sagas'),
            import('containers/ContributePage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([sagas, component]) => {
            injectSagas(sagas.default);
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
            import('containers/AboutPage/sagas'),
            import('containers/TrainingPage'),
          ]);

          const renderRoute = loadModule(cb);
          importModules.then(([sagas, component]) => {
            injectSagas(sagas.default);
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
            import('containers/AboutPage/sagas'),
            import('containers/PlatformsPage'),
          ]);

          const renderRoute = loadModule(cb);
          importModules.then(([sagas, component]) => {
            injectSagas(sagas.default);
            renderRoute(component);
          });
          importModules.catch(errorLoading);
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
