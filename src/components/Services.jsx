import {  useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const  Services=()=> {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [addons, setAddons] = useState([]);
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const [objError, setError] = useState("");
 const ServiceID=   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
       const templeteID= import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
         const PublicKey=      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

      
  // Base packages
  const services = [
    { id: "starter", name: "Starter Presence", price: 500 },
    { id: "essentials", name: "E-Commerce Essentials", price: 1200 },
    { id: "pro", name: "Professional E-Commerce", price: 2000 },
    { id: "enterprise", name: "Enterprise Solution", price: 3500 },
  ];

  // Add-ons
  const addonOptions = [
    { id: "pages", name: "Extra Pages", price: 150 },
    { id: "seo", name: "SEO Optimization", price: 300 },
    { id: "migration", name: "Database Migration", price: 400 },
    { id: "maintenance", name: "Monthly Maintenance", price: 250 },
  ];

  function ValidateEmail(){
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
  }

  const handleAddonChange = (id) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const calculatePrice = () => {
    let total = service ? service.price : 0;
    addons.forEach((a) => {
      const addon = addonOptions.find((opt) => opt.id === a);
      if (addon) total += addon.price;
    });
    setPrice(total);
  };

  const sendEmail = () => {
    
    const result=ValidateEmail(email);

    if(!result){

      setError("The email you entered is not valid. Please try again.")
      setEmail("");

return
    }

    const templateParams = {
      service: service.name,
      addons: addons
        .map((a) => addonOptions.find((opt) => opt.id === a).name)
        .join(", "),
      price: `$${price}`,
      email,
    };

    emailjs
      .send(ServiceID,templeteID, templateParams,PublicKey)
      .then(() => alert("✅ Quote request sent! We'll contact you soon."))
      .catch((err) => alert("❌ Error: " + err.text));
  };

  return (
  <div>
      <motion.div    variants={fadeIn("down", "tween", 0.1, 1)} >
       <div className=" p-0 text-center text-white">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-10">Choose from flexible packages tailored to your business needs.</p>
    </div>
      <div className=" flex items-center justify-center bg-[#050816] text-white p-6">
      <div className="max-w-lg w-full bg-[#2a344d] rounded-2xl shadow-xl p-8">
        {/* Progress */}
        <div className="flex justify-between mb-6 text-sm text-gray-300">
          <span className={step === 1 ? "font-bold text-white" : ""}>1. Service</span>
          <span className={step === 2 ? "font-bold text-white" : ""}>2. Add-ons</span>
          <span className={step === 3 ? "font-bold text-white" : ""}>3. Confirm</span>
        </div>

        {/* Step 1: Choose Service */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Choose a Service</h2>
            {services.map((s) => (
              <button
                key={s.id}
                className={`w-full p-4 mb-3 rounded-xl border transition-all ${
                  service?.id === s.id
                    ? "bg-white text-[#050816] font-semibold"
                    : "bg-[#2a344d] border-white/20 hover:bg-white/10"
                }`}
                onClick={() => setService(s)}
              >
                {s.name} – ${s.price}
              </button>
            ))}
            <button
              onClick={() => setStep(2)}
              disabled={!service}
              className="mt-4 w-full px-4 py-3 bg-white text-[#050816] rounded-xl font-bold disabled:opacity-50"
            >
              Next →
            </button>
          </>
        )}

        {/* Step 2: Add-ons */}
        {step === 2 && (
          <>
       

            <h2 className="text-xl font-bold mb-4">Select Add-ons</h2>
            {addonOptions.map((a) => (
              <label key={a.id} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  checked={addons.includes(a.id)}
                  onChange={() => handleAddonChange(a.id)}
                  className="mr-3 accent-white"
                />
                {a.name} (+${a.price})
              </label>
            ))}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-white/10 text-white rounded-xl"
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  calculatePrice();
                  setStep(3);
                }}
                className="px-4 py-2 bg-white text-[#050816] rounded-xl font-bold"
              >
                Next →
              </button>
            </div>
          </>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <>

            <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
            <p className="mb-2">📦 <b>Package:</b> {service.name}</p>
            <p className="mb-2">
              ➕ <b>Add-ons:</b>{" "}
              {addons.length
                ? addons.map((a) => addonOptions.find((opt) => opt.id === a).name).join(", ")
                : "None"}
            </p>
            <p className="text-lg font-bold mb-6">💰 Total Price: ${price}</p>
                 
                 
              {objError&&<p className="text-red-500 text-xs" >{`❌ ${objError}   
`}</p>}

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl mb-4 text-black"
              value={email}
              onChange={(e) => {setEmail(e.target.value); setError("")} }
              required
            />

            <div className="flex justify-between">
              <button
                onClick={() =>{ setStep(2);setEmail("");}}
                className="px-4 py-2 bg-white/10 text-white rounded-xl"
              >
                ← Back
              </button>
              <button
                onClick={sendEmail}
                disabled={!email}
                className="px-4 py-2 bg-green-500 rounded-xl font-bold disabled:opacity-50"
              >
                ✅ Confirm & Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </motion.div>
  
  </div>
  );
}


export default SectionWrapper(Services,"services")