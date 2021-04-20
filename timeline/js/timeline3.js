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
    var list = `<ul class="regform_step"> <li class="step_item"><a class="step_number number_1"></a><span class="step_line"></span></li><li class="step_item"><a class="step_number number_2"></a><span class="step_line"></span></li><li class="step_item"><a class="step_number number_3"></a><span class="step_line"></span></li><li class="step_item"><a class="step_number number_4"></a><span class=""></span></li> </ul>`;
    $(".regform_show").prepend(list);
    var crr = data.current;
    $(this).step(crr);
    var text = $("." + this[0].className + " li");
    for (let i = 0; i < text.length; i++) {
      let t = String(i + 1);
      if (i < crr) $(text[i]).attr("class", "text_" + t + " done");
      else $(text[i]).attr("class", "text_" + t);
    }
  };
})(jQuery);
function tstep() {
  var ul = $("ul");
  ul.each(function () {
    var step = $(this).data("step");
    if (step) {
      $(this).attr("class", "step_text");
      $(this).stepper({
        current: step,
      });
    }
  });
}
tstep();
