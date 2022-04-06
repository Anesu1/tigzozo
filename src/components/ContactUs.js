import React from "react";
import styled from "styled-components";
import BigHeader from "../styled/BigHeader";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import { FormControl, Input, InputLabel, TextField } from "@material-ui/core";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";

const Wrapper = styled.section`
  background: #000000;
  color: #ffffff;
  padding: 5%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media(min-width:992px){
        padding:5% 10%;
    }
  .contact-inner {
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  .heading {
    margin-bottom: 50px;
    h2{
      top:0;
      margin-bottom:50px;
    }
    h3 {
      color: #ffffff;
      opacity: 0.1;
      font-size:46px;
      @media (min-width: 768px) {
        width: max-content;
        font-size:80px;
      }
      @media(min-width:992px){
        font-size:100px;
        margin-bottom:20px;
      }
    }
  }
  p {
    margin-bottom: 15px;
  }
  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    line-height: 1.2;
    font-size: 16px;
    font-family: ${(props) => props.theme.fam.regular};
    svg {
      width: 25px;
      height: 25px;
      margin-right: 20px;
    }
    br {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
  }
  .form {
    padding: 1px;
    position: relative;
    background: linear-gradient(to bottom, #f24d2d, #fbb03b);
    max-width: 400px;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 45%;
      max-width:350px;
    }
  }

  form {
    background: #101010;
    color: white;
    padding: 1rem;
    .MuiFormControl-root {
      width: 100%;
      margin-bottom: 20px;
    }
    .MuiInputBase-multiline {
      padding: 0;
    }
    .MuiInputLabel-formControl {
      top: 10px;
      left: 10px;
    }
    .MuiInput-underline:after {
      border-color: ${(props) => props.theme.color.orange};
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${(props) => props.theme.color.orange};
    }
    label {
      color: rgba(255, 255, 255, 0.71);
      z-index: 1;
      font-family: ${(props) => props.theme.fam.regular};
    }
    input {
      width: 100%;
      background: #2d2c2c;
      height: 40px;
    }
    textarea {
      height: 130px;
      width: 100%;
      background: #2d2c2c;
    }
    button {
      margin-left: auto;
      height: 40px;
      width: 150px;
      background: ${(props) => props.theme.color.orange};
      color: #ffffff;
      display: block;
      border: none;
      font-size: 18px;
    }
  }
`;

function ContactUs() {
  return (
    <Wrapper id="contact">
      <div className="contact-inner">
        <div className="heading">
          <BigHeader>Get In Touch</BigHeader>
          <Heading>
            Contact <span>Us</span>
          </Heading>
        </div>
        <Paragraph>
          We're passionate about innovation, brilliant ideas and the <br />{" "}
          execution that brings it all together in one beautiful <br />{" "}
          experience. If you are too, call or send us an email to get <br />{" "}
          started.
        </Paragraph>
        <li>
          <FaPhone /> +263 77 505 1190
        </li>
        <li>
          <BsEnvelopeFill /> 
tigzozomedia@gmail.com
        </li>
        <li>
          <FaMapMarkerAlt /> 23 Oxford Avenue. Newlands, <br />
          Harare, <br />
          Zimbabwe
        </li>
      </div>
      <div className="form">
        <form action="">
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input type="email" />
          </FormControl>
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default ContactUs;
