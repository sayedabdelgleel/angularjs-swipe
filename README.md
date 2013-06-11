
angular-swipe
==================

It is AngularJS Directive based on [ Brad's Swipe](https://github.com/bradbirdsall/Swipe)

-----

* **Requires AngularJS 1.1.4+**

* Include `swipe.js` and `swiper.js` into your page
* Declare `'angular-swipe'` as a dependency for your angular app: `angular.module('myApp', ['swiper']);`

* Swipe only needs to follow a simple pattern. Here is an example:

``` html
<div swiper >
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```
Above is the initial required structure– a series of elements wrapped in two containers. Place any content you want within the items.

Also Swipe needs just a few styles added to your stylesheet:

``` css
.swipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap > div {
  float:left;
  width:100%;
  position: relative;
}


