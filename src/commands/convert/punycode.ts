import { decode, encode } from "punycode";
import Command from "../../classes/Command";
import { embed, epherrf } from "../../util/embed";

export default new Command({
  name: "punycode",
  description: "Converts a domain to punycode and vice versa.",
  category: "convert",
  perms: [],
  options: [
    {
      name: "encode",
      description: "Encode a domain to punycode",
      type: "SUB_COMMAND",
      options: [
        {
          name: "domain",
          description: "The domain to encode",
          type: "STRING",
          required: true,
        },
      ],
    },
    {
      name: "decode",
      description: "Decode a domain from punycode",
      type: "SUB_COMMAND",
      options: [
        {
          name: "domain",
          description: "The domain to decode",
          type: "STRING",
          required: true,
        },
      ],
    },
  ],
  async execute({ bot, args, ctx }) {
    const sub = args.getSubcommand(true);
    const domain = args.getString("domain");
    switch (sub) {
      case "encode":
        const encoded = encode(domain);
        ctx.reply({
          embeds: [
            embed(
              {
                description: `Original: \`${domain}\`\nEncoded: \`${encoded}\``,
              },
              ctx,
              bot
            ),
          ],
        });
        break;
      case "decode":
        const decoded = decode(domain);
        ctx.reply({
          embeds: [
            embed(
              {
                description: `Encoded: \`${domain}\`\nOriginal: \`${decoded}\``,
              },
              ctx,
              bot
            ),
          ],
        });
        break;
      default:
        ctx.reply(
          epherrf(
            "Something went wrong. Try again later or open a ticket in our support server."
          )
        );
        break;
    }
  },
});
