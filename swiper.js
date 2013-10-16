angular.module('swiper', [])
.directive('swiper', function ($parse, $timeout) {
  return {
    scope: true,
    link: function(scope, element, attrs) {
      element.addClass('swipe');

      var config = {};

      if ( attrs.auto ) {
        config.auto = parseInt(attrs.auto,10);
      }
      if ( attrs.startSlide ) {
        config.startSlide = parseInt(attrs.startSlide,10);
      }
      if ( attrs.speed ) {
        config.speed = parseInt(attrs.speed,10);
      }
        var onSlideEnd;
        if (attrs.onSlideEnd)
            onSlideEnd = $parse(attrs.onSlideEnd);
    
        config.callback = function (e, index, slide)
        {
            // apply with timeout to avoid stuttering transitions
            $timeout(
                    function ()
                    {
                        // always apply to propagate swipes status change to angular
                        if (onSlideEnd)
                            onSlideEnd(scope,
                                    { index: index, slide: slide});
                    }, 10
            );
        };

      var swiperProperty = attrs.swiper || 'swiper';
      $timeout(function ()
      {
        var swiper = new Swipe(element[0], config);
        scope[swiperProperty] = swiper;
      });
    }
  }
});
