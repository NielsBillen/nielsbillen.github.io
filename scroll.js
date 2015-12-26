/*-----------------------------------------------------------------------------
 * Utility javascript for smooth scrolling to an element.
 *---------------------------------------------------------------------------*/

/*global console*/
var Scroll = (function () {
    "use strict";
    
    var my = {}, scrollStart, scrollTo, scrollSpeed, canScroll = true;
    
    my.ScrollToElementById = function (elementId) {
        if (canScroll) {
            var doc, element, bodyRect, maxScroll, viewHeight;
            
            bodyRect = document.body.getBoundingClientRect();
            viewHeight = window.innerHeight || 0;
            maxScroll = bodyRect.height - viewHeight + 64;
            
            console.log(bodyRect);
            console.log(viewHeight);
            
            canScroll = false;

            element = document.getElementById(elementId);
            doc = document.documentElement;
            scrollStart = my.getTop();
            scrollTo = Math.min(element.getBoundingClientRect().top - bodyRect.top, maxScroll);
            scrollSpeed = Math.ceil(Math.abs(scrollTo - scrollStart) * 0.01);
            my.PerformScroll();
        }
    };
    
    my.PerformScroll = function () {
        var doc, distance, position, speed, currentTop;
        
        doc = document.documentElement;
        distance = scrollTo - scrollStart;
        position = (my.getTop() - scrollStart) / distance;
        speed = Math.round(scrollSpeed * Math.abs(Math.sin(position * Math.PI))) + 1;
        currentTop = my.getTop();
        
        if (currentTop < scrollTo) {
            if (currentTop + speed < scrollTo) {
                window.scrollBy(0, speed);
                
                if (currentTop !== my.getTop()) {
                    setTimeout(my.PerformScroll, 1);
                }
            } else {
                window.scrollTo(0, scrollTo);
                canScroll = true;
            }
        } else if (currentTop > scrollTo) {
            if (currentTop - speed > scrollTo) {
                window.scrollBy(0, -speed);
                
                if (currentTop !== my.getTop()) {
                    setTimeout(my.PerformScroll, 1);
                }
            } else {
                window.scrollTo(0, scrollTo);
                canScroll = true;
            }
        } else {
            canScroll = true;
        }
    };
    
    my.getLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    
    my.getTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    };
    
    my.PrintPosition = function () {
        console.log(my.getLeft() + " " + my.getTop());
    };
    
    return my;
}());