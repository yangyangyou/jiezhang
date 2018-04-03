import {
  wxRequest
} from '../utils/wxRequest';
import wepy from 'wepy';

const host = 'http://git.com'
// const host = 'https://xiaoyounger.com'
// const host = 'https://yiiiblog.com'

const apiUrl = host + '/api'
// 获取首页数据
const getIndexList = (params) => wxRequest(params, `${apiUrl}/index`);
const getIndexHeader = (params) => wxRequest(params, `${apiUrl}/header`);
const getIndexBill = (id) => wxRequest({}, `${apiUrl}/statement/${id}`);

// 获取账单
const Bill = (params, c_id = 0) => {
  let url = `${apiUrl}/statement`
  if (c_id != null && c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}
const getBillFrequentUsed = (params) => wxRequest(params, `${apiUrl}/statements/frequent_used`);
const getBillAssets = (params) => wxRequest(params, `${apiUrl}/statements/assets`);
const getExpendCategories = (params) => wxRequest(params, `${apiUrl}/statements/expend_categories`);
const getIncomeCategories = (params) => wxRequest(params, `${apiUrl}/statements/income_categories`);

// 图表栏的数据获取
const Chart = (params) => wxRequest(params, `${apiUrl}/chart`);

// 资产管理
const Asset = (params, c_id = 0) => {
  let url = `${apiUrl}/assets`
  if (c_id != null && c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}

// 资产详情
const AssetDetailInformation = (params) => wxRequest(params, `${apiUrl}/wallet/information`);
const AssetDetailList = (params) => wxRequest(params, `${apiUrl}/wallet/detail`);
const AssetSurplus = (params) => wxRequest(params, `${apiUrl}/wallet/surplus`);

// 资产图标
const AssetIcon = () => wxRequest({}, `${apiUrl}/icons/assets`);

// 资产 & 资产设置
const Wallet = (params, c_id = 0) => {
  let url = `${apiUrl}/wallet`
  if (c_id != null && c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}
const WalletParent = (params) => wxRequest(params, `${apiUrl}/wallet/parent`);
const WalletList = (params) => wxRequest(params, `${apiUrl}/wallet/list`);

const Category = (params, c_id = 0) => {
  let url = `${apiUrl}/categories`
  if (c_id != null && c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}

const CategoryParent = (params) => wxRequest(params, `${apiUrl}/categories/parent`);
const CategoryIcon = () => wxRequest({}, `${apiUrl}/icons/categories`);

// 个人设置
const Settings = (params) => wxRequest(params, `${apiUrl}/settings`);
// 反馈
const Feedback = (params) => wxRequest(params, `${apiUrl}/settings/feedback`);
// 个人信息
const User = (params, c_id = 0) => {
  let url = `${apiUrl}/users`
  if (c_id != null && c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}

// 预算管理界面
const Budget = () => wxRequest({}, `${apiUrl}/budgets`);
const BudgetParent = () => wxRequest({}, `${apiUrl}/budgets/parent`);
const BudgetDetail = (id) => wxRequest({}, `${apiUrl}/budgets/${id}`);
const BudgetUpdate = (params) => wxRequest(params, `${apiUrl}/budgets/0`);

module.exports = {
  host: host,
  getIndexList,
  getIndexHeader,
  getIndexBill,
  Bill,
  getBillFrequentUsed,
  getBillAssets,
  getExpendCategories,
  getIncomeCategories,
  Chart,
  Asset,
  AssetIcon,
  Settings,
  Category,
  CategoryParent,
  Wallet,
  WalletList,
  WalletParent,
  CategoryIcon,
  Feedback,
  User,
  Budget,
  BudgetParent,
  BudgetDetail,
  BudgetUpdate,
  AssetDetailInformation,
  AssetDetailList,
  AssetSurplus,
  uploadPath: `${apiUrl}/upload`
}