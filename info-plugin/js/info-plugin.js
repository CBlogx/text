(function ($) {
  $.fn.information = function (data) {
    insertsm();
    let content = data.content;
    let title = data.title;
    let yes = data.yes;
    let no = data.no;
    let count = data.count;
    let xml = new XMLHttpRequest();
    xml.open("GET", content, true);
    xml.send();
    xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
        $(".inpg-content").html(marked(xml.responseText));
      }
    };
    $(".inpg-banner").html(`<span>` + title + `</span>`);
    $(".inpg-bottom-choose")
      .eq(0)
      .html(`<p>` + yes + `<\p>`);
    $(".inpg-bottom-choose")
      .eq(1)
      .html(`<p>` + no + `<\p>`);
    clock(count);
  };
})(window.jQuery);

const clock = (count) => {
  if (count > 0) {
    $(".inpg-bottom-count").html(count.toString());
    $(".inpg-bottom-choose").hide();
    count--;
    time = setTimeout(clock, 1000, count);
  } else {
    $(".inpg-bottom-count").hide();
    $(".inpg-bottom-choose").show();
  }
};
const no = () => {
  window.close();
};
const yes = () => {
  $("#info-plugin").hide();
};
const insertsm = () => {
  $("<link>")
    .attr({
      rel: "stylesheet",
      type: "text/css",
      href: "./css/info-plugin.css",
    })
    .appendTo("head");
  let template = `
  <div id="info-plugin">
      <div class="inpg-info">
        <div class="inpg-banner"></div>
        <div class="inpg-content">
          <p></p>
        </div>
        <div class="inpg-bottom">
          <div class="inpg-bottom-content">
            <a class="inpg-bottom-choose" href="javascript:yes();">
              <p></p>
            </a>
            <div class="inpg-bottom-count"></div>
            <a class="inpg-bottom-choose" href="javascript:no();">
              <p></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  $("body").append(template);
};
