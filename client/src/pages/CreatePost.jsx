import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../utils";
import { preview } from "../assets";
import { FormField, Loader } from "../components";
const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://imagify-im2o.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        response.json();
        navigate("/");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("plz enter a prompt and generate an image!");
    }
  };

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = async () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    console.log(randomPrompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://imagify-im2o.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  return (
    <section>
      <div className="pricing-header px-3 py-3 pt-md-3 pb-md-4 mr-auto">
        <div>
          <h1 className="display-4">Design Picture</h1>
          <p className="lead">
            Generate awe-inspiring and artistically crafted images through{" "}
            <snap className="text-primary">Imagify...</snap> and share them with
            the world
          </p>
        </div>
        <form className="mt-5 mw-100  col-lg-8" onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-5">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Ex., john doe"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name="promot"
              placeholder={form.prompt}
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <div className="position-relative bg-light border border-muted text-dark small rounded-lg focus-ring-primary focus-border-primary w-50 p-3 d-flex justify-content-center align-items-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-100 h-100 object-fit-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-75 h-75 object-fit-contain opacity-4"
                />
              )}

              {generatingImg && (
                <div className="position-absolute top-0 start-0 bottom-0 end-0 z-0 d-flex justify-content-center align-items-center bg-dark-transparent rounded-lg">
                  <Loader />
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 d-flex gap-5">
            <button
              type="button"
              onClick={generateImage}
              className="btn btn-success"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>

          <div className="mt-4">
            <p className="mt-2 text-muted small">
              ** Once you have created the image you want, you can share it with
              others in the community **
            </p>
            <button type="submit" className="btn btn-info">
              {loading ? "Sharing..." : "Share with the Community"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
