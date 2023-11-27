import React from 'react'

function Upload() {
    return (
      <div className= "container mx-auto px-80">
        <br/>
        <br/>
        <form>
            <input type="file" id="myFile" name="filename"></input>
        </form>
      </div>
    )
  }
  
  export default Upload