(function ($) {
  $("<link>")
    .attr({
      rel: "stylesheet",
      type: "text/css",
      href: "css/floatingWindow.css",
    })
    .appendTo("head");

  $("<link>")
    .attr({ rel: "stylesheet", type: "text/css", href: "css/iconfont.css" })
    .appendTo("head");
  var pos = 0;
  var id = setInterval(frame, 15);
  var isMove = true;
  var elem = document.querySelector("#floatingWindow");

  function data_attr() {
    var ad = $("#advertisement");
    var fW = $("#floatingWindow");
    var mesg = $("#mesg");
    ad.css("background-color", ad.data("bkcolor"));
    ad.attr("class", "advertisement");
    if (fW.data("position") == "right") {
      fW.attr("class", "floatingWindow");
    } else if (fW.data("position") == "left") {
      fW.attr("class", "floatingWindow_a");
    }
    mesg.attr("title", "查看更多请点击图标");
    mesg.on({
      mouseover: function () {
        clearInterval(id);
        id = null;
        $(".advertisement").css("display", "block");
      },
      mouseout: function () {
        id = setInterval(frame, 15);

        $(".advertisement").css("display", "none");
      },
    });
    mesg.attr("class", "floatingWindowA");
  }
  data_attr();

  $.fn.content = function (data) {
    var text = data.content;
    // var more = "详情";
    // more = more.link(data.href);
    var href = data.href;
    if (text != undefined) {
      if (text.length > 105) {
        text = text.substring(0, 104) + "......";
      }
      $(this).text(text);
      // $(more).appendTo(this);
    }
    if (href != undefined) {
      document.querySelector("#mesg").href = href;
    }
  };

  function frame() {
    var floatWindowHeight = elem.offsetHeight;
    if (isMove) {
      pos++;
      if (pos >= window.innerHeight - (floatWindowHeight + 10)) {
        isMove = false;
      } else {
        elem.style.top = pos + "px";
      }
    } else {
      pos--;
      if (pos <= 10) {
        isMove = true;
      } else {
        elem.style.top = pos + "px";
      }
    }
  }
})(window.jQuery);
