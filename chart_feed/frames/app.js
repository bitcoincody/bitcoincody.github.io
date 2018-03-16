 




function scrollDown(el){

    this.times = 0;
    this.moveInter = 0;
    this.backInter = 0;
    var scrl=this;
    el.hover(function(){
        clearInterval(scrl.moveInter);
    },function(){
        scrl.move();
    });
    this.moveBack = function () {

        var self = this;
        clearInterval(this.moveInter);
        this.backInter = setInterval(function () {
            self.times -= 5;
            el.scrollTop(self.times);
            if (self.times == 0) {
                return self.startMove();
            }
        }, 1);
    }

    this.move = function() {

        var self = this;
        this.moveInter = setInterval(function () {
            self.times++;
            el.scrollTop(self.times);
            if (self.times == 1200) {
                return self.moveBack();
            }
        }, 125);
    }

    this.startMove = function() {
        this.times = 0;
        var self = this;
        if (this.backInter != null) {
            clearInterval(this.backInter);
        }
        window.setTimeout(function () {
            self.move();
        }, 0000);
    }
}
jQuery('html, body, iframe').each(function () {
    el = jQuery(this);
    var scroller = new scrollDown(el);
    scroller.startMove();

});

