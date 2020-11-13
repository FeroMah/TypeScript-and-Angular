var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var tickets = new Array();
function sortBy(criteria) {
    try {
        tickets.forEach(function (t) {
            if (t[criteria] === undefined) {
                throw new Error("Can't be sorted by " + criteria);
            }
            if (typeof t[criteria] === "string") {
                return tickets.sort(function (t1, t2) {
                    return t1[criteria].localeCompare(t2[criteria]);
                });
            }
            if (typeof t[criteria] === "number") {
                return tickets.sort(function (t1, t2) { return t1[criteria] - t2[criteria]; });
            }
        });
    }
    catch (e) {
        console.log(e);
    }
}
function solution(ticket_meta, sort_criteria) {
    ticket_meta.forEach(function (meta) {
        var splited = meta.split("|");
        var ticket = new Ticket(splited[0], parseFloat(splited[1]), splited[2]);
        tickets.push(ticket);
    });
    sortBy(sort_criteria);
    console.log(tickets);
}
console.log("Order by destination:");
solution([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");
tickets = new Array();
console.log();
console.log("Order by status:");
solution([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status");
tickets = new Array();
console.log();
console.log("Order by price:");
solution([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "price");
