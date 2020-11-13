class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}
let tickets: Array<Ticket> = new Array();

function sortBy(criteria: string) {
  try {
    tickets.forEach((t) => {
      if (t[criteria] === undefined) {
        throw new Error("Can't be sorted by " + criteria);
      }

      if (typeof t[criteria] === "string") {
        return tickets.sort((t1, t2) =>
          t1[criteria].localeCompare(t2[criteria])
        );
      }

      if (typeof t[criteria] === "number") {
        return tickets.sort((t1, t2) => t1[criteria] - t2[criteria]);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function solution(ticket_meta: Array<String>, sort_criteria: string) {
  ticket_meta.forEach((meta) => {
    let splited: Array<string> = meta.split("|");
    let ticket = new Ticket(splited[0], parseFloat(splited[1]), splited[2]);
    tickets.push(ticket);
  });

  sortBy(sort_criteria);

  console.log(tickets);
}

console.log("Order by destination:");
solution(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
tickets = new Array();
console.log();
console.log("Order by status:");
solution(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
tickets = new Array();
console.log();
console.log("Order by price:");
solution(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "price"
);
