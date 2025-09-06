function addEvent() {
  const title = prompt("Nazwa wydarzenia:");
  const date = prompt("Data (YYYY-MM-DD):");
  const time = prompt("Godzina (HH:MM):");
  const location = prompt("Lokalizacja:");

  const event = { title, date, time, location };
  const email = localStorage.getItem("user_email");
  const key = email + "_events";
  const events = JSON.parse(localStorage.getItem(key) || "[]");
  events.push(event);
  localStorage.setItem(key, JSON.stringify(events));
}
