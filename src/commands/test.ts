import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

const test = {
  data: new SlashCommandBuilder().setName('test').setDescription('Test!'),
  async execute(interaction: CommandInteraction) {
    interaction.reply(`Hey there ${interaction.member}`);
  },
};

export default test;
