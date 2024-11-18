import { Client, Events, GuildMember } from 'discord.js';
import { getChannelFromChannelName } from '../utils';

export const registerUserEvents = async (client: Client) => {
  client.on(Events.GuildMemberAdd, async (member: GuildMember) => {
    const systemChannel = member.guild.systemChannel;
    const rulesChannel = await getChannelFromChannelName(member, 'guild-rules');
    const accessChannel = await getChannelFromChannelName(
      member,
      'server-access'
    );
    const requestInviteChannel = await getChannelFromChannelName(
      member,
      'request-invite'
    );

    const greeting = `Hello there ${member}, Welcome to ${member.guild.name}`;

    await systemChannel.send(greeting);
  });
};
