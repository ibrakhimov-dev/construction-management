export const base_url = 'https://test.garantstroy.uz';

//! Auth 
// login api
export const login_api_url = () => `${base_url}/api/login`;

// role api url
export const role_api_url = () => `${base_url}/api/get-user`;

// logout api url
export const logout_api_url = () => `${base_url}/api/logout`;

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

// delete home sales api url
export const delete_home_sales_api_url = (id) => `${base_url}/api/house-trades/${id}`

// edit home sales api url
export const edit_home_sales_api_url = (id) => `${base_url}/api/house-trades/${id}`;

// home sales expenses api url
export const home_sales_expenses_api_url = (id) => `${base_url}/api/trade-expenses/${id}`;

// delete home sales expenses api url
export const delete_home_sales_expenses_api_url = (id) => `${base_url}/api/house-trade-expenses/${id}`;

// add home sales expenses api url
export const add_home_sales_expenses_api_url = () => `${base_url}/api/house-trade-expenses`;

// edit home sales expenses api url
export const edit_home_sales_expenses_api_url = (id) => `${base_url}/api/house-trade-expenses/${id}`;

// current home sales expenses api url
export const current_home_sales_expense_api_url = (id) =>  `${base_url}/api/house-trade-expenses/${id}`

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
export const hired_worker_api_url = () => `${base_url}/api/filter/hired-workers`;

// delete hired worker api url
export const delete_hired_worker_api_url = (id) => `${base_url}/api/hired-workers/${id}`;

// edit hired worker api url
export const edit_hired_worker_api_url = (id) => `${base_url}/api/hired-workers/${id}`;

// current hired worker api url
export const current_hired_worker_api_url = (id) => `${base_url}/api/hired-workers/${id}`

// create hired worker expenses api url
export const create_hired_worker_expenses_api_url = () => `${base_url}/api/hired-worker-expenses`;

// hired worker expenses api url
export const hired_worker_expenses_api_url = (id) => `${base_url}/api/hired-expenses/${id}`;

// delete hired worker expenses api url
export const delete_hired_worker_expenses_api_url = (id) => `${base_url}/api/hired-worker-expenses/${id}`;

// edit hired worker expenses api url
export const edit_hired_worker_expenses_api_url = (id) => `${base_url}/api/hired-worker-expenses/${id}`;

//! Contract
// create contract api url
export const create_contract_api_url = () => `${base_url}/api/contracts`;

// contract api url
export const contract_api_url = () => `${base_url}/api/filter/contracts`;

// current contract api url
export const current_contract_api_url = (id) => `${base_url}/api/contracts/${id}`;

// delete cotract api url
export const delete_contract_api_url = (id) => `${base_url}/api/contracts/${id}`;

// contract expenses api url
export const contract_expenses_api_url = (id) => `${base_url}/api/contract-floors/${id}`;

// create contarct expenses api url
export const create_contract_expenses_api_url = () => `${base_url}/api/floors`;

// delete contract expenses api url
export const delete_contract_expenses_api_url = (id) => `${base_url}/api/floors/${id}`;

// edit contract expenses api url
export const edit_contract_expenses_api_url = (id) => `${base_url}/api/floors/${id}`;

//! Income
// create income api url
export const create_income_api_url = () => `${base_url}/api/incomes`;

// income api url
export const income_api_url = () => `${base_url}/api/filter/incomes`;

// delete income api url
export const delete_income_api_url = (id) => `${base_url}/api/incomes/${id}`;

// current income api url
export const current_income_api_url = (id) => `${base_url}/api/incomes/${id}`;

// edit income api url
export const edit_income_api_url = (id) => `${base_url}/api/incomes/${id}`;

//! Expenses
// create expenses api url
export const create_expenses_api_url = () => `${base_url}/api/expenses`;

// expenses api url
export const expenses_api_url = () => `${base_url}/api/expenses`;

// delete expenses api url
export const delete_expenses_api_url = (id) => `${base_url}/api/expenses/${id}`;

// current expenses api url
export const current_expenses_api_url = (id) => `${base_url}/api/expenses/${id}`;

// edit expenses api url
export const edit_expenses_api_url = (id) => `${base_url}/api/expenses/${id}`;

// expenses item api url
export const expenses_item_api_url = () => `${base_url}/api/expense-items`;

// expenses item create api url
export const expenses_item_create_api_url = () => `${base_url}/api/expense-items`;

// expenses item edit api url
export const expenses_item_edit_api_url = (id) => `${base_url}/api/expense-items/${id}`;

// expenses item delete api url 
export const expenses_item_delete_api_url =(id) => `${base_url}/api/expense-items/${id}`;

//! Users
// all users api url
export const all_user_api_url = () => `${base_url}/api/users`;

// current user api url
export const current_user_api_url = (id) => `${base_url}/api/users/${id}`;

// create user api url
export const create_user_api_url = () => `${base_url}/api/users`;

// edit user api url
export const edit_user_api_url = (id) => `${base_url}/api/users/${id}`;

// delete user api url
export const delete_user_api_url = (id) => `${base_url}/api/users/${id}`;

//! Worker
// create worker api url
export const create_worker_api_url = () => `${base_url}/api/workers`;

// worker api url
export const worker_api_url = () => `${base_url}/api/workers`;

// delete worker api url
export const delete_worker_api_url = (id) => `${base_url}/api/workers/${id}`;

// current worker api url
export const current_worker_api_url = (id) => `${base_url}/api/workers/${id}`;

// edit worker api url
export const edit_worker_api_url = (id) => `${base_url}/api/workers/${id}`;

//! Worker DayOff
// all dayoff api url
export const all_dayoff_api_url = () => `${base_url}/api/day-offs`;

// create dayoff api url 
export const create_dayoff_api_url = () => `${base_url}/api/day-offs`;

// delete dayoff api url
export const delete_dayoff_api_url = (id) => `${base_url}/api/day-offs/${id}`;

//! Worker Account
// create worker account api url
export const create_worker_account_api_url = () => `${base_url}/api/worker-accounts`;

// edit worker account api url
export const edit_worker_account_api_url = (id) => `${base_url}/api/worker-accounts/${id}`;

// delete worker account api url
export const delete_worker_account_api_url = (id) => `${base_url}/api/worker-accounts/${id}`;

// all worker account api url
export const all_worker_account_api_url = () => `${base_url}/api/worker-accounts`;

// current worker account api url
export const current_worker_account_api_url = (id) => `${base_url}/api/worker-accounts/${id}`

//! Worker avans
// create worker avans api url
export const create_worker_avans_api_url = () => `${base_url}/api/advance-payments`; 

// all worker avans api url
export const all_worker_avans_api_url = () => `${base_url}/api/advance-payments`;

// delete worker avans api url
export const delete_worker_avans_api_url = (id) => `${base_url}/api/advance-payments/${id}`

//! Dashboard
// dashboard api url
export const dashboard_api_url = () => `${base_url}/api/dashboard/data`; 
