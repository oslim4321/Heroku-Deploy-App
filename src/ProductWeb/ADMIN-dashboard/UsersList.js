import React from 'react'
import { useGlobalContext } from '../ContextApi'

function UsersList() {
    const { User } = useGlobalContext()
    // console.log(User)
  return (
      <div>
          
<div class="mx-auto p-4">
  <h1 class="text-2xl mb-8">Users</h1>
  

<div class="flex flex-col" data-aos="fade-up">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                no
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Password
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Admin
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
           {
                User < 1 ? (<>Loading...<div class="spinner-border" role="status">
                 <span class="sr-only">Loading...</span></div></>) :
            (User.map(elem=>{
                return (
                    <tr data-aos="fade-up">
        <td class="px-6 py-4 whitespace-no-wrap">
        <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
     
        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
        </div>
        <div class="ml-4">
          <div class="text-sm leading-5 font-medium text-gray-900">
          	{/* {elem.data.name} */}
          </div>
          <div class="text-sm leading-5 text-gray-500">
          	
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap">
      <div class="text-sm leading-5 text-gray-900">{elem.data.email}</div>
      <div class="text-sm leading-5 text-gray-500"></div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
      	{elem.data.name}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{elem.data.password}</td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{elem.data.admin}</td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-green-500 cursor-pointer]">Edit</td>
  </tr>
                )
            }))
            }
                                      
          {/*  */}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  
    </div>
    </div>
  )
}

export default UsersList