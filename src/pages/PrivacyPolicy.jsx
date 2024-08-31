import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar></Navbar>
      
      <div className="max-w-4xl mx-auto p-6 md:p-10 mt-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-600 mb-4">Last updated: 7th July 2024</p>

        <p className="mb-4">
        Welcome to My Perfect PG. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our app.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect and process the following data about you:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li><strong>Personal Information:</strong></li>
          <ul className="list-disc list-inside pl-4">
            <li>Name : To personlize your experience</li>
            <li>Email address : To communicate with you</li>
            <li>Phone number : For Verification and contact purposes</li>
            <li>Password : To secure your account</li>
            <li>Profile Picture : To enhance your profile visibility</li>
          </ul>
          <li className="mt-4"><strong>Non-Personal Information:</strong></li>
          <ul className="list-disc list-inside pl-4">
            <li>We DO NOT collect any device information (e.g., mobile device ID, IP address, operating system)</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect in the following ways:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>To provide, operate, and maintain the App</li>
          {/* <li>To communicate with you, including sending updates, notifications, and support messages</li>
          <li>To facilitate idea submissions</li> */}
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not share your information with any third parties. Your information remains with the My Perfect PG  team for app maintenance purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Data Protection Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete any information you believe is incomplete.</li>
          <li>The right to remove account – You have the right to request account removal.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Account Deletion</h2>
        <p className="mb-4">
          If you would like to delete your account and any associated data, please send an email to our Developer Head: 
          <a href="mailto:theashhar.work@gmail.com" className="text-blue-500 underline">harshankit2410@gmail.com</a>.
        </p>
        <p className="mb-4">
          In your email, please include the following details:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>Your full name</li>
          <li>The email address associated with your account</li>
          <li>A brief description of your request (e.g., "Request to delete account and associated data")</li>
        </ul>
        <p className="mb-4">
          Our support team will process your request and confirm the deletion of your account and data within 7 business days.
        </p>

        <p className="mt-10 text-sm text-gray-600">
          Last updated: 31st August 2024
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}