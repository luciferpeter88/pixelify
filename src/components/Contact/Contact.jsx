import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = ({ data, socialData }) => {
  const form = useRef();
  const { title, text, subTitle } = data;
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const style = { color: "#e9b642", marginBottom: "10px", display: "block" };
  function onSubmit(data, e) {
    e.preventDefault();
    console.log(data);
    emailjs
      .sendForm("service_9ajhsgc", "template_x29ufya", form.current, {
        publicKey: "gOgZJv8vyuG3F27jM",
      })
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {}
      );
    reset();
  }
  return (
    <section
      id="contact"
      className="st-dark-bg"
      style={{ position: "relative", zIndex: "999" }}
    >
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3
              className="st-contact-title"
              style={success ? { color: "#2ac3b1" } : { color: "white" }}
            >
              {success ? "Message Sent Successfully" : "Get In Touch"}
            </h3>
            <div id="st-alert"></div>
            <form
              ref={form}
              method="POST"
              className="st-contact-form"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="st-form-field">
                {errors.name && <span style={style}>Name is required</span>}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="st-form-field">
                {errors.email && (
                  <span style={style}>Invalid email format</span>
                )}
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    },
                  })}
                />
              </div>
              <div className="st-form-field">
                {errors.subject && (
                  <span style={style}>Subject is required</span>
                )}
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  {...register("subject", { required: true })}
                />
              </div>
              <div className="st-form-field">
                {errors.message && (
                  <span style={style}>Message is required</span>
                )}
                <textarea
                  cols="30"
                  rows="10"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="">kaszapnagyp@gmail.com</Link>
                  <Link to="">kaszap.nagy.balint@gmail.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+447515632494</span>
                  <span>+447401772626</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    Glasgow, <br />
                    G23-5QN, Scotland
                  </span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;
