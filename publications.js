/*global console*/

var Publications = (function () {
    "use strict";
    
    var my = {}, Paper, Author, Link;
    
    my.Author = function (firstName, lastName, webPage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.webPage = webPage;
    };
    
    my.Author.prototype.toHTML = function () {
        var result = this.lastName + " " + this.firstName;
        
        if (this.webPage) {
            return "<a class = 'author' href='" + this.webPage + "'>" + result + "</a>";
        } else {
            return result;
        }
    };
    
    my.Link = function (title, link, icon) {
        this.title = title;
        this.link = link;
        this.icon = icon;
    };
    
    my.Paper = function (title, authors, location, thumbnail, links) {
        this.title = title;
        this.authors = authors;
        this.location = location;
        this.thumbnail = thumbnail;
        this.links = links;
    };
    
    my.Paper.prototype.add = function (container) {
        var i, publication, aside, data, title, authors, author, location;
        
        publication = document.createElement("div");
        publication.className = "publication";
        
        aside = document.createElement("aside");
        aside.className = "publication-thumbnail";
        aside.style.backgroundImage = "url(" + this.thumbnail + ")";
        
        data = document.createElement("div");
        data.className = "publication-data";
        
        title = document.createElement("div");
        title.className = "title";
        title.innerHTML = this.title;
        
        authors = document.createElement("div");
        authors.className = "authors";
        
        for (i = 0; i < this.authors.length; i += 1) {
            author = document.createElement("span");
            author.className = "author";
            author.innerHTML = this.authors[i].toHTML();
            authors.appendChild(author);
            
            if (i < this.authors.length - 2) {
                authors.innerHTML += ", ";
            } else if (i < this.authors.length - 1) {
                authors.innerHTML += " and ";
            }
        }
        
        location = document.createElement("div");
        location.className = "location";
        location.innerHTML = this.location;
        
        data.appendChild(title);
        data.appendChild(authors);
        data.appendChild(location);
        
        publication.appendChild(aside);
        publication.appendChild(data);
        
        container.appendChild(publication);
    };
    
    return my;
}());

var Niels = new Publications.Author("Niels", "Billen", "https://perswww.kuleuven.be/~u0093806/");
var Matthias = new Publications.Author("Matthias", "Moulin", "http://matt77hias.github.io/");
var Ares = new Publications.Author("Ares", "Lagae", "http://people.cs.kuleuven.be/~ares.lagae/");
var Philip = new Publications.Author("Philip", "Dutr&eacute;", "http://people.cs.kuleuven.be/~philip.dutre/");
var Bjorn = new Publications.Author("Bj&ouml;rn", "Engelen", null);

var BELD13PVEDI = new Publications.Paper("Probabilistic Visibility Evaluation for Direct Illumination",
                                        [Niels, Bjorn, Ares, Philip],
                                         "Computer Graphics Forum (Proceedings of the 19th Eurographics Symposium on Rendering), 32(4):39-47, July 2013.",
                                        "images/BELD13PVEDI_thumbnail.jpg");

var BLD14PVEGP = new Publications.Paper("Probabilistic Visibility Evaluation using Geometry Proxies",
                                        [Niels, Ares, Philip],
                                         "Computer Graphics Forum (Proceedings of the 20th Eurographics Symposium on Rendering), 33(4):143-152, July 2014.",
                                        "images/BLD14PVEGP_thumbnail.jpg");

var MBD15EVHFKUTR = new Publications.Paper("Efficient visibility heuristics for kd-trees using the RTSAH",
                                        [Matthias, Niels, Philip],
                                         "Eurographics Symposium on Rendering - Experimental Ideas & Implementations, July 2015.",
                                        "images/MBD15EVHFKUTR_thumbnail.jpg");

var publicationContainer = document.getElementById("publications-container");
MBD15EVHFKUTR.add(publicationContainer);
BLD14PVEGP.add(publicationContainer);
BELD13PVEDI.add(publicationContainer);

