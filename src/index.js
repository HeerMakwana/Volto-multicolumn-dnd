import MulticolumnRowEdit from './components/MulticolumnRow/Edit';
import MulticolumnRowView from './components/MulticolumnRow/View';
import multicolumnReducer from './reducers/multicolumnReducer';

const applyConfig = (config) => {
  config.blocks = config.blocks || {};
  config.blocks.blocksConfig = config.blocks.blocksConfig || {};
  config.blocks.blocksConfig['multicolumnRow'] = {
    id: 'multicolumnRow',
    title: 'Multicolumn Row',
    icon: 'columns',
    group: 'common',
    view: MulticolumnRowView,
    edit: MulticolumnRowEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.addonReducers = {
    ...config.addonReducers,
    multicolumn: multicolumnReducer,
  };

  return config;
};

export default applyConfig;
