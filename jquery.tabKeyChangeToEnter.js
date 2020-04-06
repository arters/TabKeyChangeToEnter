/*
*	 TabKeyChangeToEnter
*
*	 Examples/Docs: github.com/arters/TabKeyChangeToEnter/
*/
$('form.use-tab-enter').on('keydown', 'input, select', function(e) {

    var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
    focusable = form.find('input,select,textarea,a,button').filter(':visible');
    if (e.key === "Enter") {
      next = focusable.eq(focusable.index(this)+1);

      // var type = focusable.find('button[type="submit"]') ;
      var type = next[0].type || next[0].attr('type');
      if(type == 'submit'){
         form.submit();
      }
      if (next.length) {
        next.focus();
      }
      return false;
    }
});
