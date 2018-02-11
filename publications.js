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
    
    my.Paper = function (title, authors, location, thumbnail, projectPageLink, links) {
        this.title = title;
        this.authors = authors;
        this.location = location;
        this.thumbnail = thumbnail;
        this.links = links;
        this.projectPageLink = projectPageLink;
    };
    
    my.Paper.prototype.add = function (container) {
        var i, publication, aside, data, title, authors, author, location, link, links, linkElement, linkIcon, linkDescription;
        
        publication = document.createElement("div");
        publication.className = "publication";
        
        aside = document.createElement("aside");
        aside.className = "publication-thumbnail";
        aside.style.backgroundImage = "url(" + this.thumbnail + ")";
        
        data = document.createElement("div");
        data.className = "publication-data";
        
        title = document.createElement("a");
        title.href = this.projectPageLink;
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
        
        links = document.createElement("div");
        links.className = "links";
        
        if (this.links) {
            for (i = 0; i < this.links.length; i += 1) {
                link = this.links[i];
                
                linkElement = document.createElement("a");
                linkElement.className = "link";
                linkElement.href = link.link;
                
                linkIcon = document.createElement("img");
                linkIcon.className = "link-icon";
                linkIcon.src = link.icon;
                
                linkDescription = document.createElement("div");
                linkDescription.className = "link-description";
                linkDescription.innerHTML = link.title;
                
                linkElement.appendChild(linkIcon);
                linkElement.appendChild(linkDescription);

                links.appendChild(linkElement);
            }
        }
        
        data.appendChild(title);
        data.appendChild(authors);
        data.appendChild(location);
        data.appendChild(links);
        
        publication.appendChild(aside);
        publication.appendChild(data);
        
        container.appendChild(publication);
    };
    
    return my;
}());

var Niels = new Publications.Author("Niels", "Billen", "http://nielsbillen.github.io/");
var Matthias = new Publications.Author("Matthias", "Moulin", "http://matt77hias.github.io/");
var Ares = new Publications.Author("Ares", "Lagae", "http://people.cs.kuleuven.be/~ares.lagae/");
var Philip = new Publications.Author("Philip", "Dutr&eacute;", "https://sites.google.com/site/philipdutre/");
var Bjorn = new Publications.Author("Bj&ouml;rn", "Engelen", null);
var Roald = new Publications.Author("Roald", "Frederickx", "https://people.cs.kuleuven.be/~roald.frederickx/");
var Joran = new Publications.Author("Joran", "Van de Woestijne", null);

var phdniels = new Publications.Paper("Improving Efficiency in Illumination Algorithms using Stochastic Visibility Evaluation and Line Sampling",
                                         [Niels],
                                         "Ph.D thesis, Department of Computer Science, KU Leuven, Celestijnenlaan 200A, 3001 Heverlee, Belgium, February 2018.",
                                         "images/phdniels_thumbnail.jpg",
                                         "http://graphics.cs.kuleuven.be/publications/phdniels/index.html",
                                         [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/phdniels/index.html", "images/icon_html.png"),
                                          new Publications.Link("Dissertation", "http://graphics.cs.kuleuven.be/publications/phdniels/files/dissertation-highquality.pdf", "images/icon_pdf.png"),
                                          new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/phdniels/files/citation.bib", "images/icon_tex.png"),
                                          new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/phdniels/files/abstract.txt", "images/icon_txt.png"),
                                          new Publications.Link("Lirias", "https://lirias.kuleuven.be/handle/123456789/600502", "images/icon_html.png"),
                                          new Publications.Link("Presentation", "http://graphics.cs.kuleuven.be/publications/phdniels/files/presentation.pdf", "images/icon_pdf.png")]);

var BELD13PVEDI = new Publications.Paper("Probabilistic Visibility Evaluation for Direct Illumination",
                                         [Niels, Bjorn, Ares, Philip],
                                         "Computer Graphics Forum (Proceedings of the 24th Eurographics Symposium on Rendering), 32(4):39-47, July 2013.",
                                         "images/BELD13PVEDI_thumbnail.jpg",
                                         "http://graphics.cs.kuleuven.be/publications/BELD13PVEDI/index.html",
                                         [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/BELD13PVEDI/index.html", "images/icon_html.png"),
                                          new Publications.Link("Paper", "http://graphics.cs.kuleuven.be/publications/BELD13PVEDI/BELD13PVEDI_paper.pdf", "images/icon_pdf.png"),
                                          new Publications.Link("Presentation", "http://graphics.cs.kuleuven.be/publications/BELD13PVEDI/BELD13PVEDI_presentation.pdf", "images/icon_pdf.png"),
                                          new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/BELD13PVEDI/BELD13PVEDI_citation.bib", "images/icon_tex.png"),
                                          new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/BELD13PVEDI/BELD13PVEDI_abstract.txt", "images/icon_txt.png"),
                                          new Publications.Link("Lirias", "https://lirias.kuleuven.be/handle/123456789/401248", "images/icon_html.png"),
                                          new Publications.Link("DOI", "https://dx.doi.org/10.1111/cgf.12149", "images/icon_html.png")]);

var BLD14PVEGP = new Publications.Paper("Probabilistic Visibility Evaluation using Geometry Proxies",
                                        [Niels, Ares, Philip],
                                        "Computer Graphics Forum (Proceedings of the 25th Eurographics Symposium on Rendering), 33(4):143-152, July 2014.",
                                        "images/BLD14PVEGP_thumbnail.jpg",
                                        "http://graphics.cs.kuleuven.be/publications/BLD14PVEGP/index.html",
                                        [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/BLD14PVEGP/index.html", "images/icon_html.png"),
                                         new Publications.Link("Paper", "http://graphics.cs.kuleuven.be/publications/BLD14PVEGP/BLD14PVEGP_paper.pdf", "images/icon_pdf.png"),
                                         new Publications.Link("Presentation", "http://graphics.cs.kuleuven.be/publications/BLD14PVEGP/BLD14PVEGP_presentation.pdf", "images/icon_pdf.png"),
                                         new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/BLD14PVEGP/BLD14PVEGP_citation.bib", "images/icon_tex.png"),
                                         new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/BLD14PVEGP/BLD14PVEGP_abstract.txt", "images/icon_txt.png"),
                                         new Publications.Link("Lirias", "https://lirias.kuleuven.be/handle/123456789/454641", "images/icon_html.png"),
                                         new Publications.Link("DOI", "https://dx.doi.org/10.1111/cgf.12421", "images/icon_html.png")]);

var MBD15EVHFKUTR = new Publications.Paper("Efficient visibility heuristics for kd-trees using the RTSAH",
                                           [Matthias, Niels, Philip],
                                           "Eurographics Symposium on Rendering - Experimental Ideas & Implementations, July 2015.",
                                           "images/MBD15EVHFKUTR_thumbnail.jpg",
                                           "http://graphics.cs.kuleuven.be/publications/MBD15EVHFKUTR/index.html",
                                           [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/MBD15EVHFKUTR/index.html", "images/icon_html.png"),
                                            new Publications.Link("Paper", "http://graphics.cs.kuleuven.be/publications/MBD15EVHFKUTR/MBD15EVHFKUTR_paper.pdf", "images/icon_pdf.png"),
                                            new Publications.Link("Presentation", "http://graphics.cs.kuleuven.be/publications/MBD15EVHFKUTR/MBD15EVHFKUTR_presentation.pdf", "images/icon_pdf.png"),
                                            new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/MBD15EVHFKUTR/MBD15EVHFKUTR_citation.bib", "images/icon_tex.png"),
                                            new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/MBD15EVHFKUTR/MBD15EVHFKUTR_abstract.txt", "images/icon_txt.png"),
                                            new Publications.Link("DOI", "https://dx.doi.org/10.2312/sre.20151164", "images/icon_html.png")]);

var BD16VAUERC = new Publications.Paper("Visibility Acceleration using Efficient Ray Classification",
                                           [Niels, Philip],
                                           "CW Report 695",
                                           "images/BD16VAUERC_thumbnail.jpg",
                                           "http://graphics.cs.kuleuven.be/publications/BD16VAUERC/index.html",
                                           [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/BD16VAUERC/index.html", "images/icon_html.png"),
                                            new Publications.Link("Preprint", "http://graphics.cs.kuleuven.be/publications/BD16VAUERC/BD16VAUERC_paper.pdf", "images/icon_pdf.png"),
                                            new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/BD16VAUERC/BD16VAUERC_citation.bib", "images/icon_tex.png"),
                                            new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/BD16VAUERC/BD16VAUERC_abstract.txt", "images/icon_txt.png"),
                                            new Publications.Link("Report page", "http://www.cs.kuleuven.be/publicaties/rapporten/cw/CW695.abs.html", "images/icon_html.png")]);

var BD2016LSFDI = new Publications.Paper("Line Sampling for Direct Illumination",
                                           [Niels, Philip],
                                           "Computer Graphics Forum (Proceedings of the 27th Eurographics Symposium on Rendering), 35(4), July 2016.",
                                           "images/BD2016LSFDI_thumbnail.jpg",
                                           "http://graphics.cs.kuleuven.be/publications/BD2016LSFDI/index.html",
                                           [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/BD2016LSFDI/index.html", "images/icon_html.png"),
                                            new Publications.Link("Preprint", "http://graphics.cs.kuleuven.be/publications/BD2016LSFDI/BD2016LSFDI_paper.pdf", "images/icon_pdf.png"),
                                            new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/BD2016LSFDI/BD2016LSFDI_citation.bib", "images/icon_tex.png"),
                                            new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/BD2016LSFDI/BD2016LSFDI_abstract.txt", "images/icon_txt.png")]);

var WFBD2017TCFMLT = new Publications.Paper("Temporal Coherence for Metropolis Light Transport",
                                           [Joran, Roald, Niels, Philip],
                                           "Eurographics Symposium on Rendering - Experimental Ideas & Implementations, July 2017.",
                                           "images/WFBD2017TCFMLT_thumbnail.jpg",
                                           "http://graphics.cs.kuleuven.be/publications/WFBD2017TCFMLT/index.html",
                                           [new Publications.Link("Project page", "http://graphics.cs.kuleuven.be/publications/WFBD2017TCFMLT/index.html", "images/icon_html.png"),
                                            new Publications.Link("Paper", "http://graphics.cs.kuleuven.be/publications/WFBD2017TCFMLT/WFBD2017TCFMLT_paper.pdf", "images/icon_pdf.png"),
                                            new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/WFBD2017TCFMLT/WFBD2017TCFMLT_citation.bib", "images/icon_tex.png"),
                                            new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/WFBD2017TCFMLT/WFBD2017TCFMLT_abstract.txt", "images/icon_txt.png"),
                                            new Publications.Link("Video", "http://graphics.cs.kuleuven.be/publications/WFBD2017TCFMLT/WFBD2017TCFMLT_video.mp4", "images/icon_video.png")]);

/*
var phdniels = new Publications.Paper("Stochastische Visibiliteit in Rendering Algoritmen a.d.h.v. de occlusion map",
                                         [Niels],
                                         "Master thesis, Department of Computer Science, KU Leuven, Celestijnenlaan 200A, 3001 Heverlee, Belgium, June 2013.",
                                         "images/masters_thumbnail.jpg",
                                         undefined,
                                          new Publications.Link("Dissertation", "http://graphics.cs.kuleuven.be/publications/phdniels/files/masterproef.pdf", "images/icon_pdf.png"),
                                          new Publications.Link("Citation", "http://graphics.cs.kuleuven.be/publications/phdniels/files/citation.bib", "images/icon_tex.png"),
                                          new Publications.Link("Abstract", "http://graphics.cs.kuleuven.be/publications/phdniels/files/abstract.txt", "images/icon_txt.png"),
                                          new Publications.Link("Lirias", "https://lirias.kuleuven.be/handle/123456789/600502", "images/icon_html.png"),
                                          new Publications.Link("Presentation", "http://graphics.cs.kuleuven.be/publications/phdniels/files/presentation.pdf", "images/icon_pdf.png")]);
*/
var publicationContainer = document.getElementById("publications-container");

phdniels.add(publicationContainer);
WFBD2017TCFMLT.add(publicationContainer);
BD2016LSFDI.add(publicationContainer);
BD16VAUERC.add(publicationContainer);
MBD15EVHFKUTR.add(publicationContainer);
BLD14PVEGP.add(publicationContainer);
BELD13PVEDI.add(publicationContainer);

