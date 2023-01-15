const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('슘교')
		.setDescription('위대하신 하프슘님'),
	async execute(interaction) {
		await interaction.reply('2022년 부터 시작된 유구한 전통을 가지며 위대하신 하프슘님을 모시는 종교' );
	},
};