/*global console, document, window, clearTimeout, setTimeout*/
var scrollLibrary = (function () {
    "use strict";
    
    var my = {},
        scroll,
        scrollStartY, /* start position of the scroll */
        scrollStartTime, /* time when the scroll was started (in ms)*/
        scrollDuration, /* amount of time the scroll should take */
        scrollToY, /* end position of the scroll */
        scrollTimer, /* timer used for the scrolling */
        getViewLeft,
        getViewTop; /* function which returns the top of the view on the page */
    
    scrollDuration = 1500; /* duration of the scroll (in ms) */

    
    scroll = function () {
        var currentTime,
            progress,
            interpolation,
            scrollPosition,
            b;
        
        b = 0.05;
        
        
        currentTime = new Date().getTime();
        progress = Math.max(0, Math.min(1, (currentTime - scrollStartTime) / scrollDuration));
        //interpolation = progress * (3.0 + progress * (-6.0 + 4.0 * progress));
       
        interpolation = (b * progress + 3.0 * progress / 8.0 - Math.sin(2.0 * Math.PI * progress) / (4.0 * Math.PI) + Math.sin(4.0 * Math.PI * progress) / (32.0 * Math.PI)) / (b + 3.0 / 8.0);
        scrollPosition = Math.round(scrollStartY * (1.0 - interpolation) + interpolation * scrollToY);
        
        window.scrollTo(getViewLeft(), scrollPosition);

        if (progress < 1) {
            clearTimeout(scrollTimer);
            setTimeout(scroll, 16);
        }
    };
    
    getViewLeft = function () {
        return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
    };
    
    getViewTop = function () {
        return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    };
    
    my.scrollTo = function (elementId) {
        var element, /* the element to scroll to */
            bodyRect, /* bounding rectangle of the body element */
            elementRect, /* bounding rectangle of the element to scroll to */
            viewHeight, /* height of the visibile window */
            scrollMaxY; /* maximum position to scroll to */
        
        element = document.getElementById(elementId);
        bodyRect = document.body.getBoundingClientRect();
        elementRect = element.getBoundingClientRect();
        viewHeight = window.innerHeight || 0;
        scrollMaxY = bodyRect.height - viewHeight;
        scrollStartY = getViewTop();
        scrollStartTime = new Date().getTime();
        
        scrollToY = Math.max(0, Math.min(scrollMaxY, elementRect.top - bodyRect.top));
        
        clearTimeout(scrollTimer);
        
        scroll();
    };
    
    return my;
}());