import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const schema = z.object({
  Name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  Email: z.string().email("Invalid email address"),
  Phone: z
    .string()
    .refine(
      (val) => val === undefined || val === "" || /^\+?[\d\s]{7,15}$/.test(val),
      {
        message: "Invalid phone number",
      }
    )
    .optional(),
  Message: z
    .string()
    .refine((val) => val === undefined || val === "" || val.length >= 10, {
      message: "Message must be at least 10 characters",
    })
    .optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setFormData: {
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setMessage: (message: string) => void;
  };
}

const pureFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home: React.FC<Props> = ({ setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setFormData.setName(data.Name);
    setFormData.setEmail(data.Email);
    if (data.Phone != null) setFormData.setPhone(data.Phone);
    if (data.Message != null) setFormData.setMessage(data.Message);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Reset button and input state after 3 seconds
  };

  return (
    <section className="text-gray-600 body-font relative overflow-x-hidden">
      <div className="relative bg-cover bg-center pt-20 pb-20 overflow-x-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            opacity: 0.6,
            backgroundImage: `url(/city4.jpg)`,
            backgroundSize: "cover",
            zIndex: -2,
          }}
        ></div>
        {/* Colored Overlay */}
        <div
          className="absolute inset-0 bg-PrimaryBlue opacity-70"
          style={{ zIndex: -1 }}
        ></div>
        {/* Content */}
        <div className="container mx-auto flex px-5 py-10 flex-col lg:flex-row items-center justify-between relative z-10 gap-8 overflow-x-hidden">
          {/* Left: Home Content */}
          <div className="lg:w-1/2 w-full flex flex-col items-center text-center mb-16 lg:mb-0 lg:pr-8">
            <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
              <h1 className="font-title sm:text-5xl text-4xl mb-4 text-white font-bold max-w-2xl">
                Turn Tender Chaos into Clarity
              </h1>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
              <p className="mb-8 leading-relaxed text-lg max-w-xl font-base text-white">
                A single platform to create, compare, and close tenders — built
                for property managers, contractors, and service providers who
                value efficiency and transparency.
              </p>
            </Reveal>
            <div className="flex justify-center"></div>
          </div>
          {/* Right: Form Content with Frosted Glass Effect */}
          <div
            className="lg:w-1/2 w-full max-w-md px-4 py-8 sm:py-12 bg-white/30 text-gray-900 rounded-2xl sm:max-w-lg border border-white/20 shadow-md"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <Reveal keyframes={pureFade} duration={800} delay={600} triggerOnce>
              <h1 className="font-title text-2xl sm:text-3xl font-semibold text-PrimaryBlue mb-6 text-center">
                Join the waiting list!
              </h1>
            </Reveal>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Reveal
                keyframes={slideUp}
                duration={800}
                delay={800}
                triggerOnce
              >
                <div>
                  <label className="uppercase text-sm text-PrimaryBlue font-title block mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("Name")}
                    className={`w-full bg-white/50 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-PrimaryBlue text-base transition-colors duration-300 ${
                      isSubmitted ? "border-2 border-PrimaryGreen" : ""
                    }`}
                    type="text"
                    placeholder="Enter your Name"
                    required
                  />
                  {errors.Name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.Name.message}
                    </p>
                  )}
                </div>
              </Reveal>
              <Reveal
                keyframes={slideUp}
                duration={800}
                delay={900}
                triggerOnce
              >
                <div>
                  <label className="uppercase text-sm text-PrimaryBlue font-title block mb-2">
                    Email *
                  </label>
                  <input
                    {...register("Email")}
                    className={`w-full bg-white/50 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-PrimaryBlue text-base transition-colors duration-300 ${
                      isSubmitted ? "border-2 border-PrimaryGreen" : ""
                    }`}
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.Email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.Email.message}
                    </p>
                  )}
                </div>
              </Reveal>
              <Reveal
                keyframes={slideUp}
                duration={800}
                delay={1000}
                triggerOnce
              >
                <div>
                  <label className="uppercase text-sm text-PrimaryBlue font-title block mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register("Phone")}
                    className={`w-full bg-white/50 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-PrimaryBlue text-base transition-colors duration-300 ${
                      isSubmitted ? "border-2 border-PrimaryGreen" : ""
                    }`}
                    type="tel"
                    placeholder="Enter your Phone Number including country code"
                  />
                  {errors.Phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.Phone.message}
                    </p>
                  )}
                </div>
              </Reveal>
              <Reveal
                keyframes={slideUp}
                duration={800}
                delay={1100}
                triggerOnce
              >
                <div>
                  <label className="uppercase text-sm text-PrimaryBlue font-title block mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("Message")}
                    className={`w-full bg-white/50 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-PrimaryBlue text-base h-24 transition-colors duration-300 ${
                      isSubmitted ? "border-2 border-PrimaryGreen" : ""
                    }`}
                    placeholder="Enter your Message"
                  ></textarea>
                  {errors.Message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.Message.message}
                    </p>
                  )}
                </div>
              </Reveal>
              <Reveal
                keyframes={slideUp}
                duration={800}
                delay={1200}
                triggerOnce
              >
                <div>
                  <button
                    className={`w-full flex items-center justify-center text-gray-100 p-3 rounded-lg font-title tracking-wide text-lg focus:outline-none focus:ring-2 focus:ring-PrimaryBlue transition-colors duration-300 ${
                      isSubmitted
                        ? "bg-PrimaryGreen"
                        : "bg-PrimaryBlue hover:bg-PrimaryGreen"
                    } box-border`}
                    type="submit"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      "We will contact you soon!"
                    ) : (
                      <>
                        Get early access!
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-5 flex-shrink-0"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
