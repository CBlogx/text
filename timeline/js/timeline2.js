(function ($) {
  $.fn.step = function (current) {
    var len = $(".step_number").length;
    for (let i = 0; i < len; i++) {
      $(".step_line:eq(" + i + ")").removeClass("done");
      $(".step_number:eq(" + i + ")").removeClass("done");
    }
    for (let i = 0; i < current; i++) {
      var crr_line = i - 1;
      if (crr_line >= 0) $(".step_line:eq(" + crr_line + ")").addClass("done");
      $(".step_number:eq(" + i + ")").addClass("done");
    }
  };
})(jQuery);
(function ($) {
  $.fn.stepper = function (data) {
    var crr = data.current;
    // var style = data.style;
    // var parent = $(this).parent();
    // var width = $(window).width();
    // if (style == undefined) $(parent).attr("class", "regform_show");
    // else $(parent).attr("class", "regform_show" + style);

    // for (var key in data) {
    //   $($("." + this[0].className + " li")[data.current - 1]).attr(
    //     key,
    //     data[key]
    //   );
    // }

    $(this).step(crr);
    var text = $("." + this[0].className + " li");
    for (let i = 0; i < text.length; i++) {
      let t = String(i + 1);
      if (i < crr) $(text[i]).attr("class", "text_" + t + " done");
      else $(text[i]).attr("class", "text_" + t);
    }
    // console.log($("." + this[0].className + " li")[data.current - 1]);
    // console.log($( + " li"));
  };
})(jQuery);
