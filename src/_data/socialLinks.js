const sortBy = require("lodash.sortby");

const data = [
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/molly.wiki",
    username: "molly.wiki",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/298979974029901827",
    username: "molly0xfff",
  },
  {
    label: "Github",
    href: "https://github.com/molly",
    username: "molly",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mollyawhite/",
    username: "mollyawhite",
  },
  {
    label: "Mastodon",
    href: "https://hachyderm.io/@molly0xfff",
    username: "@molly0xfff@hachyderm.io",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/watchfulprotector",
    username: "watchfulprotector",
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/molly0xFFF",
    username: "molly0xfff",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/molly0xFFF",
    username: "molly0xfff",
  },
];

module.exports = sortBy(data, "label");
