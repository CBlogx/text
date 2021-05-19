$("<link>")
  .attr({
    rel: "stylesheet",
    type: "text/css",
    href: "css/share.min.css",
  })
  .appendTo("head");
$("<link>")
  .attr({
    rel: "stylesheet",
    type: "text/css",
    href: "css/social.css",
  })
  .appendTo("head");
let template = `<div class="sites">
      <div class="social-share share-component link"></div>
      <button class="share-sites">分享</button>
    </div>`;
$("body").append(template);
$(".share-sites").mouseover(function () {
  $(".sites").animate({ left: "0px" });
});
$(".sites").mouseleave(function () {
  setTimeout(function () {
    $(".sites").animate({ left: "-378px" });
  }, 0);
});
