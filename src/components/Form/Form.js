import React from 'react'

const Jumbotron = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
        
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
</form>
  )
}

export default Jumbotron