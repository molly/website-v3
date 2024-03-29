const sortBy = require("lodash.sortby");
const socialLinks = require("./socialLinks");

const verifyLinks = [
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
    label: "Matrix",
    href: "https://matrix.to/#/@molly0xfff:matrix.org",
    username: "@molly0xfff:matrix.org",
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/mollywhite",
    username: "mollywhite",
  },
  {
    label: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/User:GorillaWarfare",
    username: "GorillaWarfare",
  },
  { label: "Wikipediocracy", username: "GorillaWarfare" },
];

module.exports = sortBy([...socialLinks, ...verifyLinks], "label");
