import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_asdsf_list = createAsyncThunk(
  "aSdsfs/api_v1_asdsf_list",
  async payload => {
    const response = await apiService.api_v1_asdsf_list(payload)
    return response.data
  }
)
export const api_v1_asdsf_create = createAsyncThunk(
  "aSdsfs/api_v1_asdsf_create",
  async payload => {
    const response = await apiService.api_v1_asdsf_create(payload)
    return response.data
  }
)
export const api_v1_asdsf_retrieve = createAsyncThunk(
  "aSdsfs/api_v1_asdsf_retrieve",
  async payload => {
    const response = await apiService.api_v1_asdsf_retrieve(payload)
    return response.data
  }
)
export const api_v1_asdsf_update = createAsyncThunk(
  "aSdsfs/api_v1_asdsf_update",
  async payload => {
    const response = await apiService.api_v1_asdsf_update(payload)
    return response.data
  }
)
export const api_v1_asdsf_partial_update = createAsyncThunk(
  "aSdsfs/api_v1_asdsf_partial_update",
  async payload => {
    const response = await apiService.api_v1_asdsf_partial_update(payload)
    return response.data
  }
)
export const api_v1_asdsf_destroy = createAsyncThunk(
  "aSdsfs/api_v1_asdsf_destroy",
  async payload => {
    const response = await apiService.api_v1_asdsf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const aSdsfsSlice = createSlice({
  name: "aSdsfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_asdsf_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_asdsf_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_asdsf_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_asdsf_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_asdsf_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_asdsf_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_asdsf_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_asdsf_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_asdsf_list,
  api_v1_asdsf_create,
  api_v1_asdsf_retrieve,
  api_v1_asdsf_update,
  api_v1_asdsf_partial_update,
  api_v1_asdsf_destroy,
  slice: aSdsfsSlice
}
