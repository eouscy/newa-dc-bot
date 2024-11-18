import {
  Client,
  ClientOptions,
  Collection,
  GatewayIntentBits,
  Partials,
} from 'discord.js';

export class DiscordClient extends Client {
  commands: Collection<string, unknown>;
  constructor(options: ClientOptions) {
    super(options);

    this.commands = new Collection();
  }
}

export const nailongClient = new DiscordClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel, Partials.Message, Partials.Reaction],
});
