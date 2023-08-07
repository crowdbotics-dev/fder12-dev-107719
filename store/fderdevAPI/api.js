import axios from "axios"
const fderdevAPI = axios.create({
  baseURL: "https://fder12-dev-107719.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return fderdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_asdsf_list(payload) {
  return fderdevAPI.get(`/api/v1/asdsf/`)
}
function api_v1_asdsf_create(payload) {
  return fderdevAPI.post(`/api/v1/asdsf/`, payload)
}
function api_v1_asdsf_retrieve(payload) {
  return fderdevAPI.get(`/api/v1/asdsf/${payload.id}/`)
}
function api_v1_asdsf_update(payload) {
  return fderdevAPI.put(`/api/v1/asdsf/${payload.id}/`, payload)
}
function api_v1_asdsf_partial_update(payload) {
  return fderdevAPI.patch(`/api/v1/asdsf/${payload.id}/`, payload)
}
function api_v1_asdsf_destroy(payload) {
  return fderdevAPI.delete(`/api/v1/asdsf/${payload.id}/`)
}
function api_v1_fjfjf_list(payload) {
  return fderdevAPI.get(`/api/v1/fjfjf/`)
}
function api_v1_fjfjf_create(payload) {
  return fderdevAPI.post(`/api/v1/fjfjf/`, payload)
}
function api_v1_fjfjf_retrieve(payload) {
  return fderdevAPI.get(`/api/v1/fjfjf/${payload.id}/`)
}
function api_v1_fjfjf_update(payload) {
  return fderdevAPI.put(`/api/v1/fjfjf/${payload.id}/`, payload)
}
function api_v1_fjfjf_partial_update(payload) {
  return fderdevAPI.patch(`/api/v1/fjfjf/${payload.id}/`, payload)
}
function api_v1_fjfjf_destroy(payload) {
  return fderdevAPI.delete(`/api/v1/fjfjf/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return fderdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return fderdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return fderdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return fderdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return fderdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return fderdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return fderdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return fderdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return fderdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return fderdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return fderdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return fderdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return fderdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_asdsf_list,
  api_v1_asdsf_create,
  api_v1_asdsf_retrieve,
  api_v1_asdsf_update,
  api_v1_asdsf_partial_update,
  api_v1_asdsf_destroy,
  api_v1_fjfjf_list,
  api_v1_fjfjf_create,
  api_v1_fjfjf_retrieve,
  api_v1_fjfjf_update,
  api_v1_fjfjf_partial_update,
  api_v1_fjfjf_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
