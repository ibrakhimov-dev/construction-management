export const base_url = 'http://garant.jdu.uz';

// login api
export const login_api_url = () => `${base_url}/api/login`;

// other expenses api
export const others_expenses_api_url = () => `${base_url}/api/filter/other-expenses`;

// other expenses day api
export const others_expenses_day_api_url = (day) => `${base_url}/api/latest/other-expenses/${day}`;

// create others expenses api
export const create_others_expenses_api_url = () => `${base_url}/api/other-expenses`;

// delete others expense api
export const delete_others_expense_api_url = (id) => `${base_url}/api/other-expenses/${id}`;

// current others expenses api
export const current_others_expenses_api_url = (id) => `${base_url}/api/other-expenses/${id}`;

// edit others expenses api
export const edit_others_expenses_api_url = (id) => `${base_url}/api/other-expenses/${id}`;

// car expenses api
export const car_expenses_api_url = () => `${base_url}/api/filter/car-expenses`;

// car expenses day api
export const car_expenses_day_api_url = (day) => `${base_url}/api/latest/car-expenses/${day}`;

// create car expenses api
export const create_car_expenses_api_url = () => `${base_url}/api/car-expenses`;

// delete car expense api
export const delete_car_expense_api_url = (id) => `${base_url}/api/car-expenses/${id}`;

// current car expenses api
export const current_car_expenses_api_url = (id) => `${base_url}/api/car-expenses/${id}`;

// edit car expenses api
export const edit_car_expenses_api_url = (id) => `${base_url}/api/car-expenses/${id}`;

// house expenses api
export const house_expenses_api_url = () => `${base_url}/api/filter/household-expenses`;

// house expenses day api
export const house_expenses_day_api_url = (day) => `${base_url}/api/latest/household-expenses/${day}`;

// create house expenses api
export const create_house_expenses_api_url = () => `${base_url}/api/household-expenses`;

// delete house expense api
export const delete_house_expense_api_url = (id) => `${base_url}/api/household-expenses/${id}`;

// current house expenses api
export const current_house_expenses_api_url = (id) => `${base_url}/api/household-expenses/${id}`;

// edit house expenses api
export const edit_house_expenses_api_url = (id) => `${base_url}/api/household-expenses/${id}`;
