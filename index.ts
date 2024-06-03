import { createLocalPersister } from 'tinybase/persisters/persister-browser/with-schemas';
import * as _TinyBaseReact from 'tinybase/ui-react/with-schemas';
import { createStore } from 'tinybase/with-schemas';

const store = createStore();
const persister = createLocalPersister(store, 'test');
