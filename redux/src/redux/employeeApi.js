import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const employeeList = createApi({
    reducerPath: "employeeList",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ["Employee"],
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
        query: () => "/employee",
        providesTags: ["Employee"],
      }),
      getEmployee: builder.query({
          query: (id) => `/employee/${id}`,
          providesTags: ["Employee"],
      }),
      addEmployee: builder.mutation({
          query(employee)  {
              return {
                url: "/employee",
                method: "POST",
                body: employee,
              }
          },
          invalidatesTags: ["Employee"],
      }),
      deleteEmployee: builder.mutation({
          query(id) {
              return {
                  url: `/employee/${id}`,
                  method: 'DELETE'
              }
          },
          invalidatesTags: ["Employee"],
      }),
      updateEmployee: builder.mutation({
          query(data)  {
              const {id, ...body} = data;
              return {
                  url: `/employee/${id}`,
                  method: "PUT",
                  body,
              }
          }, 
          invalidatesTags: ["Employee"],
      }),
    }),
  })
  
  export const { useGetEmployeeListQuery,
    useGetEmployeeQuery,
    useAddEmployeeMutation,
    useDeleteEmployeeMutation,
    useUpdateEmployeeMutation
 } = employeeList;