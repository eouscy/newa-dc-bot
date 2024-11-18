import { Client, Events, Guild } from 'discord.js';
import { deployGuildCommands } from '../utils/deployGuildCommands';

export const registerGuildEvents = (client: Client) => {
  client.on(Events.GuildCreate, (guild: Guild) => {
    deployGuildCommands(guild.id);
    console.log(`Joined to a new server: ${guild.name}`);
  });
};
