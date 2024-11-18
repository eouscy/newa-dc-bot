import { Client, Events, GuildMember } from 'discord.js';
import { getChannelFromChannelName } from '../utils';

export const registerUserEvents = async (client: Client) => {
  client.on(Events.GuildMemberAdd, async (member: GuildMember) => {
    const systemChannel = member.guild.systemChannel;

    const greeting = `Hello there ${member}, Welcome to ${member.guild.name}`;

    await systemChannel.send(greeting);
  });
};
