const sortBy = require("lodash.sortby");
const socialLinks = require("./socialLinks");

const verifyLinks = [
  {
    label: "Etsy",
    href: "https://www.etsy.com/shop/mollywhitestore",
  },
  {
    label: "Github",
    username: "molly",
    href: "https://github.com/molly",
  },
  {
    label: "Hacker News",
    username: "molly0x57",
    href: "https://news.ycombinator.com/user?id=molly0x57",
  },
  {
    label: "IRC",
    custom:
      "IRC: <ul><li>Freenode: <code>GorillaWarfare<wbr/>@wikipedia<wbr/>/gorillawarfare</code> (no longer used)</li><li>Libera Chat: <code>GorillaWarfare<wbr/>@wikipedia<wbr/>/gorillawarfare</code> (rarely online these days)</li></ul>",
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/mollywhite",
    username: "mollywhite",
  },
  {
    label: "Signal",
    href: "https://signal.me/#eu/EvSDonMbzo7UATFs7zYAiYPVY3Z07TR7WM6Oef6YABM2sIerozNFWIy_wGTm03a3",
    username: "molly0xfff.07",
  },
  {
    label: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/User:GorillaWarfare",
    username: "GorillaWarfare",
  },
  { label: "Wikipediocracy", username: "GorillaWarfare" },
];

module.exports = sortBy([...socialLinks, ...verifyLinks], "label");
