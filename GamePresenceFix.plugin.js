/**
 * @name GamePresenceFix
 * @version 1.0.0
 * @description Correct errors that turn off game activity each time you run a discord.
 * @authorId 368688044934561792
 * @authorLink https://github.com/green1052
 * @source https://github.com/green1052/GamePresenceFix/blob/main/GamePresenceFix.plugin.js
 */

module.exports = class GamePresenceFix {
    getName() {
        return "GamePresenceFix";
    }

    getDescription() {
        return "Correct errors that turn off game activity each time you run a discord.";
    }

    getVersion() {
        return "1.0.0";
    }

    getAuthor() {
        return "green1052";
    }

    load() {
        if (window.ZLibrary) {
            ZLibrary.PluginUpdater.checkForUpdate(
                this.getName(),
                this.getVersion(),
                "https://raw.githubusercontent.com/green1052/GamePresenceFix/main/GamePresenceFix.plugin.js"
            );
        }
    }

    start() {
        if (!BdApi.findModuleByProps("guildPositions").showCurrentGame)
            BdApi.findModuleByProps("updateRemoteSettings").updateLocalSettings({showCurrentGame: true});
    }
}
