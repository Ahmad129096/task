import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    movie: null,
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!data.firstName || !data.lastName) {
      setSuccess(false);
      setErrors({
        firstName: !data.firstName && true,
        lastName: !data.lastName && true,
      });
      return;
    }
    if (data.firstName) setErrors({ ...errors, firstName: false });
    if (data.firstName) setErrors({ ...errors, lastName: false });
    if (data.firstName && data.lastName) {
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="my-form">My form</h2>
        {success ? (
          <div className="success">Thanks for submitting the form</div>
        ) : (
          <>
            <div className="errors">
              {errors.firstName && <div>you need to enter a first name</div>}
              {errors.lastName && <div>you need to enter a last name</div>}
            </div>
            <form action="#" method="post" onSubmit={handleSubmit}>
              <div className="form">
                <div className="form-group">
                  <label>
                    First Name <span className="asteric">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Last Name <span className="asteric">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Favourite Star War Movie</label>
                  <select id="select" name="select">
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
