const sortBy = require("lodash.sortby");
const socialLinks = require("./socialLinks");

const verifyLinks = [
  { label: "Facebook", username: "molly0xfff", private: true },
  {
    label: "Hacker News",
    username: "molly0x57",
    href: "https://news.ycombinator.com/user?id=molly0x57",
  },
  { label: "Instagram", username: "molly0xfff", private: true },
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
    label: "Substack",
    href: "https://substack.com/@mollywhite",
    username: "mollywhite",
  },
  {
    label: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/User:GorillaWarfare",
    username: "GorillaWarfare",
  },
  { label: "Wikipediocracy", username: "GorillaWarfare" },
  { label: "Wire", username: "molly0xfff" },
];

module.exports = sortBy([...socialLinks, ...verifyLinks], "label");
