import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "",
    url: "",
    about: "",
    matches: [],
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("value" + value, "name" + name);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                name="dob_day"
                id="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />

              <input
                type="number"
                name="dob_month"
                id="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                type="number"
                name="dob_year"
                id="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                name="gender_identity"
                id="man-gender-identity"
                required={true}
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">man</label>
              <input
                type="radio"
                name="gender_identity"
                id="woman-gender-identity"
                required={true}
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">woman</label>
              <input
                type="radio"
                name="gender_identity"
                id="more-gender-identity"
                required={true}
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity">more</label>
            </div>

            <label htmlFor="show-gender">Show Gender on my profile</label>
            <input
              type="checkbox"
              name="show_gender"
              id="show-gender"
              required={true}
              onChange={handleChange}
              checked={formData.show_gender}
            />

            <label htmlFor="">Show Me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                name="gender_interest"
                id="man-gender-interest"
                required={true}
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">man</label>
              <input
                type="radio"
                name="gender_interest"
                id="woman-gender-interest"
                required={true}
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">woman</label>
              <input
                type="radio"
                name="gender_interest"
                id="everyone-gender-interest"
                required={true}
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              type="text"
              name="about"
              id="about"
              required={true}
              value={formData.about}
              onChange={handleChange}
              placeholder="I like long walks"
            />

            <input type="submit" />
          </section>
          <section>
            <label htmlFor="">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />

            <div className="photo-container">
              <img src={formData.url} alt="profile pic preview" />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
