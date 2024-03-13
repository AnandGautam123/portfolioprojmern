import React from "react";
import { Form, Input, message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminIntro() {
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="welcome Text">
          <Input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input placeholder="firstName" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="lastName" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input placeholder="caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="description" />
        </Form.Item>
        <div className="flex justify-end w-full" label="welcomeText">
          <button className="px-10 py-2  bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
