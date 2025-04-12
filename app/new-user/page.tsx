import React from 'react';



const NewUserPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SaaS Analyzer</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-700 hover:text-blue-600">Features</a></li>
              <li><a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Analyze Your Data with Ease</h2>
            <p className="text-lg mb-6">Our SaaS platform helps you gain insights and make data-driven decisions effortlessly.</p>
            <a href="#features" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Learn More</a>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Real-Time Analytics</h4>
                <p>Get up-to-date insights on your data with our real-time analytics tools.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Custom Dashboards</h4>
                <p>Create personalized dashboards to visualize the metrics that matter to you.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold mb-4">AI-Powered Insights</h4>
                <p>Leverage AI to uncover hidden patterns and trends in your data.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Basic</h4>
                <p className="text-2xl font-bold mb-4">$10/month</p>
                <p>Perfect for individuals and small teams.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Pro</h4>
                <p className="text-2xl font-bold mb-4">$30/month</p>
                <p>Great for growing businesses.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
                <p className="text-2xl font-bold mb-4">Contact Us</p>
                <p>Custom solutions for large organizations.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
            <p className="mb-4">Have questions? Reach out to us!</p>
            <a href="mailto:support@saasanalyzer.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Email Us</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SaaS Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewUserPage;