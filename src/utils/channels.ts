import { GuildBasedChannel, GuildMember } from 'discord.js';

export const getChannelFromChannelName = async (
  member: GuildMember,
  channelName: string
) => {
  const foundChannel = member.guild.channels.cache.find(
    (channel: GuildBasedChannel) => channel.name.includes(channelName)
  );

  if (!foundChannel) {
    return new Error(`${channelName} does not exist.`);
  }

  return foundChannel;
};
