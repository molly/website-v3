function toggleSubstack() {
  var substackToggle = document.getElementById("toggle-substack");
  var shouldHide = substackToggle.checked;
  var blogLists = document.getElementsByClassName("blog-list");
  var opmlLinks = document.getElementsByClassName("opml-link");
  for (var i = 0; i < blogLists.length; i++) {
    var blogs = blogLists[i].getElementsByTagName("li");
    for (var j = 0; j < blogs.length; j++) {
      var blog = blogs[j];
      if (blog.dataset.isSubstack === "true") {
        if (shouldHide) {
          blog.classList.add("hidden");
        } else {
          blog.classList.remove("hidden");
        }
      }
    }
  }

  for (var i = 0; i < opmlLinks.length; i++) {
    var opmlLink = opmlLinks[i];
    if (shouldHide) {
      opmlLink.href = opmlLink.href.replace(".opml", "NoSubstack.opml");
    } else {
      opmlLink.href = opmlLink.href.replace("NoSubstack.opml", ".opml");
    }
  }
}

(function () {
  var substackToggle = document.getElementById("toggle-substack");
  substackToggle.addEventListener("click", toggleSubstack);
})();
