import {
  Interaction,
  InteractionReplyOptions,
  MessageEmbed,
  MessageEmbedOptions,
} from "discord.js";
import { MessageActionRow, MessageButton } from "discord.js";
import Bot from "../classes/Bot";
import { LemonEmojis } from "./emoji";

function embed(
  opt: MessageEmbedOptions,
  ctx: Interaction,
  bot: Bot
): MessageEmbed {
  return new MessageEmbed(opt)
    .setColor(parseInt(bot.config.style.colour.primary.replace("#", ""), 16))
    .setFooter({
      text: `Command run by ${ctx.user.username}`,
      iconURL: ctx.user.avatarURL(),
    })
    .setTimestamp();
}
function simpleEmbed(str: string, bot: Bot): MessageEmbed {
  return new MessageEmbed()
    .setDescription(str)
    .setColor(parseInt(bot.config.style.colour.primary.replace("#", ""), 16));
}

function errorMessage(err: string): InteractionReplyOptions {
  return {
    embeds: [new MessageEmbed().setDescription(err).setColor("RED")],
    ephemeral: true,
  };
}

const inviteRow = new MessageActionRow().addComponents([
  new MessageButton()
    .setStyle("LINK")
    .setURL("https://top.gg/bot/896309687136436234/vote")
    .setLabel("Vote")
    .setEmoji("🗳"), // Ballot box emoji
  new MessageButton()
    .setStyle("LINK")
    .setURL(
      "https://discord.com/api/oauth2/authorize?client_id=896309687136436234&permissions=515463564358&scope=bot%20applications.commands"
    )
    .setLabel("Invite")
    .setEmoji("🔗"), // Link Emoji
  new MessageButton()
    .setStyle("LINK")
    .setURL("https://discord.gg/h9bRr6FNsM")
    .setLabel("Support Server")
    .setEmoji(LemonEmojis.LemonTools),
]);

export function epherrf(str: string): InteractionReplyOptions {
  return {
    embeds: [
      new MessageEmbed({
        description: str,
        color: "RED",
      }),
    ],
    components: [
      inviteRow
    ],
    ephemeral: true,
  };
}

export const enum EmbedColours {
  EMBED_COLOUR = "#2f3136",
  COLOURLESS = "#36393F",
  DISCORD_BLURPLE = "#7289DA",
  HOVER_COLOURLESS = "#32353b",
  DISCORD_LIGHT_BLURPLE = "#5865f2",

}

export { simpleEmbed, embed, errorMessage, inviteRow };
