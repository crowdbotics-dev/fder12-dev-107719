import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fjfjf_list = createAsyncThunk(
  "fjfjfs/api_v1_fjfjf_list",
  async payload => {
    const response = await apiService.api_v1_fjfjf_list(payload)
    return response.data
  }
)
export const api_v1_fjfjf_create = createAsyncThunk(
  "fjfjfs/api_v1_fjfjf_create",
  async payload => {
    const response = await apiService.api_v1_fjfjf_create(payload)
    return response.data
  }
)
export const api_v1_fjfjf_retrieve = createAsyncThunk(
  "fjfjfs/api_v1_fjfjf_retrieve",
  async payload => {
    const response = await apiService.api_v1_fjfjf_retrieve(payload)
    return response.data
  }
)
export const api_v1_fjfjf_update = createAsyncThunk(
  "fjfjfs/api_v1_fjfjf_update",
  async payload => {
    const response = await apiService.api_v1_fjfjf_update(payload)
    return response.data
  }
)
export const api_v1_fjfjf_partial_update = createAsyncThunk(
  "fjfjfs/api_v1_fjfjf_partial_update",
  async payload => {
    const response = await apiService.api_v1_fjfjf_partial_update(payload)
    return response.data
  }
)
export const api_v1_fjfjf_destroy = createAsyncThunk(
  "fjfjfs/api_v1_fjfjf_destroy",
  async payload => {
    const response = await apiService.api_v1_fjfjf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fjfjfsSlice = createSlice({
  name: "fjfjfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_fjfjf_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fjfjf_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fjfjf_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fjfjf_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fjfjf_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fjfjf_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fjfjf_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fjfjf_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_fjfjf_list,
  api_v1_fjfjf_create,
  api_v1_fjfjf_retrieve,
  api_v1_fjfjf_update,
  api_v1_fjfjf_partial_update,
  api_v1_fjfjf_destroy,
  slice: fjfjfsSlice
}
