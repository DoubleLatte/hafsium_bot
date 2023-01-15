const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('기도')
		.setDescription('위대하신 하프슘님'),
	async execute(interaction) {
		await interaction.reply(':regional_indicator_h: :regional_indicator_a: :regional_indicator_f: :regional_indicator_s: :regional_indicator_i: :regional_indicator_u: :regional_indicator_m: :place_of_worship:' );
	},
};