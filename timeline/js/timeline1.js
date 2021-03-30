(function ($) {
  $.fn.step = function (action, current) {
    $(this).on(action, function () {
      var len = $(".step_number").length;
      for (let i = 0; i < len; i++) {
        $(".step_line:eq(" + i + ")").removeClass("done");
        $(".step_number:eq(" + i + ")").removeClass("done");
      }
      for (let i = 0; i < current; i++) {
        var crr_line = i - 1;
        if (crr_line >= 0)
          $(".step_line:eq(" + crr_line + ")").addClass("done");
        $(".step_number:eq(" + i + ")").addClass("done");
      }
    });
  };
})(jQuery);
