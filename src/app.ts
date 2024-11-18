import 'dotenv/config';

import { executeCommand } from './core/execute';
import { bindCommands } from './utils';
import { nailongClient } from './core';
import {
  registerClientEvents,
  registerGuildEvents,
  registerUserEvents,
} from './events';

registerClientEvents(nailongClient);
registerGuildEvents(nailongClient);
registerUserEvents(nailongClient);

bindCommands(nailongClient);
executeCommand(nailongClient);

nailongClient.login(process.env.TOKEN);
