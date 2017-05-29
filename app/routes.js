// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

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
          toolsViewOptionReducer, toolsSortOptionsReducer]) => {
      injectReducer('homePage', reducer.default);
      injectSagas(sagas.default);
      renderRoute(component);
      injectReducer('toolsViewOption', toolsViewOptionReducer.default);
      injectReducer('toolsSortOption', toolsViewOptionReducer.default)
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
            import('containers/ToolPage'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, component]) => {
            injectReducer('tool', reducer.default);
            injectSagas(sagas.default);
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
        import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/contribute(/:section)*',
      name: 'contribute',
      getComponent(nextState, cb) {
        import('containers/ContributePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/resources(/:section)*',
      name: 'resources',
      getComponent(nextState, cb) {
        import('containers/TrainingPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/platforms(/:section)*',
      name: 'platforms',
      ignoreScrollBehavior: true, //for useScroll
      getComponent(nextState, cb) {
        import('containers/PlatformsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/:filter(type|tag|search)(/:label)*',
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
