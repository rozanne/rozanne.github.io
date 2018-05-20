// discographies from discography.js

window.onload = function() {
    console.log('::::Page is loaded');
    init();
    renderPage();
}

var data = {
    array: [],
    length: 0,
    parent: null
};

function init() {
    data.array = discographies || [];
    data.length = discographies.length;
    data.parent = document.getElementById('fullContainer');
}

function renderPage() {
    for(var i=1; i <= data.length; i+=2) {
        var first = data.array[i-1];
        var second = data.array[i];
        var defaultImageUrl = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1613a0ef6e5%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1613a0ef6e5%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22130.7%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

        if(first && first.imageurl === "") {
            first.imageurl = defaultImageUrl;
        }

        if(second && second.imageurl === "") {
            second.imageurl = defaultImageUrl;
        }

        if(!second || second === undefined || second === {}) {
            second = {};
            second.type = "";
            second.title = "Coming soon!";
            second.date = "";
            second.place = "";
            second.imageurl = defaultImageUrl;
        }

        data.parent.innerHTML +=
        '<div class="row mb-2">' +
            '<div class="col-md-6">' +
                '<div class="card flex-md-row mb-4 box-shadow h-md-250">' +
                    '<div class="card-body d-flex flex-column align-items-start">' +
                        '<strong class="d-inline-block mb-2 text-primary">' + first.type + '</strong>' +
                        '<h3 class="mb-0">' +
                            '<a class="text-dark" href="#">' + first.title + '</a>' +
                        '</h3>' +
                        '<div class="mb-1 text-muted">' + first.date + '</div>' +
                        '<p class="card-text mb-auto">' + first.place + '</p>' +
                    '</div>' +
                    '<img class="card-img-right flex-auto d-none d-md-block page-card-img" src="' + first.imageurl + '">' +
                '</div>' +
            '</div>' +
            '<div class="col-md-6">' +
                '<div class="card flex-md-row mb-4 box-shadow h-md-250">' +
                    '<div class="card-body d-flex flex-column align-items-start">' +
                        '<strong class="d-inline-block mb-2 text-primary">' + second.type + '</strong>' +
                        '<h3 class="mb-0">' +
                            '<a class="text-dark" href="#">' + second.title + '</a>' +
                        '</h3>' +
                        '<div class="mb-1 text-muted">' + second.date + '</div>' +
                        '<p class="card-text mb-auto">' + second.place + '</p>' +
                    '</div>' +
                    '<img class="card-img-right flex-auto d-none d-md-block page-card-img" src="' + second.imageurl + '">' +
                '</div>' +
            '</div>' +
        '</div>';
    }
}
