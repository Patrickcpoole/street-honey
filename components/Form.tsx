import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Form() {
  return (
    <>
    
    <form>
    <div className="mb-4 flex flex-row">
    <div className="mb-4 w-1/2 mr-6">
      <label className="block text-gray-700 text-sm font-bold mb-2 ">
        First Name
      </label>
      <input className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name" />
      </div>
      <div className="mb-4 w-1/2 ml-6">
      <label className=" block text-gray-700 text-sm font-bold mb-2" >
        Last Name
      </label>
      <input className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" />
    </div>
    </div>
    <div className="mb-4">
      
    <TextField
            id="email"
            label="Email"
            placeholder="Email"
    
            fullWidth
          />
          </div>
          <div className="mb-4">
      <TextField
            id="note"
            label="Notes"
            placeholder="Notes"
            multiline
            fullWidth
          />


    </div>
   
    <div className="flex items-center justify-between">
      <Button>Sign Up</Button>
      <Button>Cancel</Button>
    </div>
  </form>

  </>
  )
}

export default Form