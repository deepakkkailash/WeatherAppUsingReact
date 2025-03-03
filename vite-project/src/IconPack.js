const calendar = new URL('./assets/calendar.png', import.meta.url).href;
const dashboard = new URL('./assets/Dashboard.png', import.meta.url).href;
const location = new URL('./assets/location.png', import.meta.url).href;
const settings = new URL('./assets/settings.png', import.meta.url).href;

const ListOfIcons = [calendar, dashboard, location, settings];

console.log(ListOfIcons);

export default ListOfIcons;