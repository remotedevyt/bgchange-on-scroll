$(window).scroll(function(){

    var $window = $(window);
    var $body = $('body');
    var $panel = $('.panel');

    var scroll = $window.scrollTop() + ($window.height() / 3);
    $panel.each(function(){
        var $this = $(this);

        if($this.position().top <= scroll && 
        $this.position().top + $this.height() > scroll){
            $body.removeClass(function(ind,css){
                return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
            });
            $body.addClass('bg-' + $(this).data('bg'));
        }
    })
}).scroll();