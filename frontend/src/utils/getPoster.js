const posters = {
  "Matrix": "/posters/matrix.jpg",
  "Demolition": "/posters/demolition.png",
  "The Lobster": "/posters/the_lobster.jpg",
  "Milk & Serial": "/posters/milk_serial.jpg",
  "Coraline": "/posters/coraline.jpg",
  "Late Night with the Devil": "/posters/late_night.jpg",
};

export function getPoster(title) {
  return posters[title] || "/posters/default.jpg";
}
