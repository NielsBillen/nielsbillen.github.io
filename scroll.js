/*-----------------------------------------------------------------------------
 * Utility javascript for smooth scrolling to an element.
 *---------------------------------------------------------------------------*/

/*global console*/
var Scroll = (function () {
    "use strict";
    
    var my = {}, scrollStart, scrollTo, scrollSpeed, timer, performScroll, getLeft, getTop;
    
    performScroll = function () {
        var doc, distance, position, speed, currentTop;
        
        doc = document.documentElement;
        distance = scrollTo - scrollStart;
        currentTop = getTop();
        position = (currentTop - scrollStart) / distance;
        speed = Math.round(scrollSpeed * Math.abs(Math.sin(position * Math.PI))) + 1;
        
        if (currentTop < scrollTo) {
            if (currentTop + speed < scrollTo) {
                window.scrollBy(0, speed);
                
                if (currentTop !== getTop()) {
                    timer = setTimeout(performScroll, 1);
                }
            } else {
                window.scrollTo(0, scrollTo);
            }
        } else if (currentTop > scrollTo) {
            if (currentTop - speed > scrollTo) {
                window.scrollBy(0, -speed);
                
                if (currentTop !== getTop()) {
                    timer = setTimeout(performScroll, 1);
                }
            } else {
                window.scrollTo(0, scrollTo);
            }
        }
    };
    
    getLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    
    getTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    };
    
    my.ScrollToElementById = function (elementId) {
        var doc, element, bodyRect, maxScroll, viewHeight;
            
        bodyRect = document.body.getBoundingClientRect();
        viewHeight = window.innerHeight || 0;
        maxScroll = bodyRect.height - viewHeight;
        
        element = document.getElementById(elementId);
        doc = document.documentElement;
        
        scrollStart = getTop();
        scrollTo = Math.max(0, Math.min(element.getBoundingClientRect().top - bodyRect.top, maxScroll));
        scrollSpeed = Math.ceil(Math.abs(scrollTo - scrollStart) * 0.01);
        
        clearTimeout(timer);
        
        performScroll();
    };
    
    return my;
}());