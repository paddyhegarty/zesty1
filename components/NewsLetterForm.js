import { useState } from 'react'

const NewsLetterForm = () => {

  const [formBody, setFormBody] = useState({
    "your-email": '',
    "your-subject": "Email submission"
  })

  const onChange = e => {
    setFormBody({
      "your-email": e.target.value,
      "your-subject": "Email submission"
    })
  }

  let action = "http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/33/feedback"
  let method = "post"

  const formSubmissionHandler = e => {
    e.preventDefault();
    let body = new FormData();
    body.append("your-email", formBody['your-email']);
    body.append("your-subject", "Email submission");

    fetch(action, {
      method,
      body
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div>
      <form>s
        <input id="your-email" type="text" name="your-email" onChange={onChange} required />
        <button type="submit" onClick={formSubmissionHandler}>Submit</button>
      </form>
    </div>
  )
}

export default NewsLetterForm
