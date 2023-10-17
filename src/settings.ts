import JsonTablePlugin from "src/main";
import {App, PluginSettingTab, Setting} from "obsidian";

export class JsonTablePluginSettingTab extends PluginSettingTab {
	plugin: JsonTablePlugin;

	constructor(app: App, plugin: JsonTablePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl("h1", {
			text: "JSON Table - Settings"
		});

		containerEl.createEl("h2", {
			text: "Commands"
		});

		new Setting(containerEl)
			.setName("Generate a table from selected JSON")
			.setDesc(
				"Creates a Markdown table based on your selected JSON. The JSON needs to be valid."
			);

		new Setting(containerEl)
			.setName("Generate table from a selected JSON URL")
			.setDesc(
				"Creates a Markdown table based on JSON data from a selected URL. The URL needs to return valid JSON."
			);

		new Setting(containerEl)
			.setName("Generate JSON from a selected table")
			.setDesc("Creatse JSON based on your selected table.");

		containerEl.createEl("h4", {
			text: "Developper Settings"
		});
		new Setting(containerEl)
			.setName("Enable Debug Logging")
			.setDesc("If enabled")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.devMode)
					.onChange(async (value) => {
						this.plugin.settings.devMode = value;
						await this.plugin.saveSettings();
					})
			);
	}
}
