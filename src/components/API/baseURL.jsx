export const base_url = 'http://garant.jdu.uz';

//! Auth 
// login api
export const login_api_url = () => `${base_url}/api/login`;

//! Other Expenses 
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

//! Car Expenses 
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

//! House Expenses 
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

//! Object
// object api url
export const object_api_url = () => `${base_url}/api/projects`;

// create object api url
export const create_object_api_url = () => `${base_url}/api/projects`;

// upload img url api
export const upload_img_url_api = () => `${base_url}/api/image-upload`;

// edit object api url
export const edit_object_url_api = (id) => `${base_url}/api/projects/${id}`;

// current object api url
export const current_object_url_api = (id) => `${base_url}/api/projects/${id}`;

// delete img api url
export const delete_img_api_url = () => `${base_url}/api/image-delete`;

// delete object api url
export const delete_object_api_url = (id) => `${base_url}/api/projects/${id}`;

//! Home Sales
// home sales api url
export const home_sales_api_url = () => `${base_url}/api/house-trades`;

// create home sales api url
export const create_home_sales_api_url = () => `${base_url}/api/house-trades`;

// detail home sales api url
export const detail_home_sales_api_url = (id) => `${base_url}/api/house-trades/${id}`;

// home sales expenses api url
export const home_sales_expenses_api_url = (id) => `${base_url}/api/trade-expenses/${id}`;

// delete home sales expenses api url
export const delete_home_sales_expenses_api_url = (id) => `${base_url}/api/house-trade-expenses/${id}`;

// add home sales expenses api url
export const add_home_sales_expenses_api_url = () => `${base_url}/api/house-trade-expenses`;

//! Tools 
// create tools api url
export const create_tools_api_url = () => `${base_url}/api/tools`;

// all object api url
export const all_object_api_url = () => `${base_url}/api/all-projects`; 

// tools api url
export const tools_api_url = () => `${base_url}/api/filter/tools`;

// delete tools api url
export const delete_tools_api_url = (id) => `${base_url}/api/tools/${id}`;

// edit tools api url
export const edit_tools_api_url = (id) => `${base_url}/api/tools/${id}`;

// current tools api url
export const current_tools_api_url = (id) => `${base_url}/api/tools/${id}`;

//! Hired Worker
// create hired worker api url
export const create_hired_worker_api_url = () => `${base_url}/api/hired-workers`;

// hired worker api url
export const hired_worker_api_url = () => `${base_url}/api/hired-workers`;