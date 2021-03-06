import { ClientEvents } from "discord.js";
import Bot from "./Bot";

export default class Event<K extends keyof ClientEvents, R = any> {
  constructor(
    public event: K,
    public run: (bot: Bot, ...args: ClientEvents[K]) => Promise<R>
  ) {}
}
