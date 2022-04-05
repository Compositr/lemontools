import { Client } from "discord.js";
import CommandManager from "../modules/command/CommandManager";
import getConfig from "../helper/config/GetConfig";
import Logger from "../modules/logs/Logger";
import EventManager from "../modules/event/EventManager";
import makeCache from "../helper/config/MakeCache";
import PluginManager from "../modules/plugin/PluginManager";

export default class Bot extends Client {
  public logger = new Logger();
  public isDev = () => !(process.env.ENVIRONMENT === "production");
  public config = getConfig();

  // Managers
  public CommandManager = new CommandManager(this);
  public EventManager = new EventManager(this);
  public PluginManager = new PluginManager(this);

  constructor() {
    super({
      intents: ["GUILDS", "GUILD_MEMBERS"],
      makeCache,
    });

    if (this.isDev()) this.logger.warn(`Running in developer or debug mode`);
    this.start();
  }

  private start() {
    const _create = Date.now();
    this.logger.info("Logging in");
    this.login(process.env.BOT_TOKEN).then(() => {
      this.logger.info(
        `Successfully logged in as ${this.user.tag}. Took ${
          Date.now() - _create
        }ms`
      );
    });
  }
}
