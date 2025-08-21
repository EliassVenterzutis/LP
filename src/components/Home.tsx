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
    <section
      id="home"
      className="relative overflow-x-hidden min-h-[85vh] flex items-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/city4.jpg)`,
          zIndex: -3,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay filter */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-PrimaryBlue/80 to-PrimaryBlueLight/80"
        style={{ zIndex: -2 }}
        aria-hidden="true"
      ></div>

      {/* Additional subtle dark overlay for contrast */}
      <div
        className="absolute inset-0 bg-black/40"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10 relative z-10 max-w-7xl">
        {/* Text content first on all screen sizes */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1">
          <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
            <h1 className="font-title text-white text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl drop-shadow-lg">
              Turn Tender Chaos into Clarity
            </h1>
          </Reveal>
          <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
            <p className="mt-5 mb-8 text-base sm:text-lg font-base text-PrimaryWhite max-w-lg drop-shadow-md leading-relaxed">
              A single platform to create, compare, and close tenders — built
              for property managers, contractors, and service providers who
              value efficiency and transparency.
            </p>
          </Reveal>
        </div>

        {/* Form second on all screen sizes */}
        <div className="w-full lg:w-1/2 max-w-lg p-8 lg:p-10 bg-white/35 rounded-3xl backdrop-blur-xl border border-white/40 shadow-xl order-2">
          <Reveal keyframes={pureFade} duration={800} delay={600} triggerOnce>
            <h2 className="text-2xl lg:text-3xl font-title font-semibold text-white mb-6 text-center drop-shadow-md">
              Join the waiting list!
            </h2>
          </Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 lg:space-y-8"
          >
            <Reveal keyframes={slideUp} duration={800} delay={800} triggerOnce>
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-title text-white mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="Name"
                  {...register("Name")}
                  className={`w-full bg-white/70 text-gray-900 p-3 rounded-xl transition-shadow duration-300 shadow-sm focus:outline-none 
                    focus:ring-4 ${
                      isSubmitted
                        ? "border-2 border-PrimaryGreen ring-0"
                        : "border border-transparent focus:ring-PrimaryBlue"
                    }
                  `}
                  type="text"
                  placeholder="Enter your Name"
                  required
                  autoComplete="name"
                />
                {errors.Name && (
                  <p className="text-red-400 text-sm mt-1 italic">
                    {errors.Name.message}
                  </p>
                )}
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={900} triggerOnce>
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-title text-white mb-1"
                >
                  Email *
                </label>
                <input
                  id="Email"
                  {...register("Email")}
                  className={`w-full bg-white/70 text-gray-900 p-3 rounded-xl transition-shadow duration-300 shadow-sm focus:outline-none 
                    focus:ring-4 ${
                      isSubmitted
                        ? "border-2 border-PrimaryGreen ring-0"
                        : "border border-transparent focus:ring-PrimaryBlue"
                    }
                  `}
                  type="email"
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                />
                {errors.Email && (
                  <p className="text-red-400 text-sm mt-1 italic">
                    {errors.Email.message}
                  </p>
                )}
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={1000} triggerOnce>
              <div>
                <label
                  htmlFor="Phone"
                  className="block text-sm font-title text-white mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="Phone"
                  {...register("Phone")}
                  className={`w-full bg-white/70 text-gray-900 p-3 rounded-xl transition-shadow duration-300 shadow-sm focus:outline-none 
                    focus:ring-4 ${
                      isSubmitted
                        ? "border-2 border-PrimaryGreen ring-0"
                        : "border border-transparent focus:ring-PrimaryBlue"
                    }
                  `}
                  type="tel"
                  placeholder="Enter your Phone Number including country code"
                  autoComplete="tel"
                />
                {errors.Phone && (
                  <p className="text-red-400 text-sm mt-1 italic">
                    {errors.Phone.message}
                  </p>
                )}
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={1100} triggerOnce>
              <div>
                <label
                  htmlFor="Message"
                  className="block text-sm font-title text-white mb-1"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  {...register("Message")}
                  className={`w-full bg-white/70 text-gray-900 p-3 rounded-xl transition-shadow duration-300 shadow-sm focus:outline-none focus:ring-4 resize-none 
                    ${
                      isSubmitted
                        ? "border-2 border-PrimaryGreen ring-0"
                        : "border border-transparent focus:ring-PrimaryBlue"
                    }
                  `}
                  placeholder="Enter your Message"
                  rows={5}
                ></textarea>
                {errors.Message && (
                  <p className="text-red-400 text-sm mt-1 italic">
                    {errors.Message.message}
                  </p>
                )}
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={1200} triggerOnce>
              <div>
                <button
                  className={`w-full flex items-center justify-center text-white p-4 rounded-xl font-title tracking-wide text-lg shadow-lg hover:brightness-110 focus:outline-none focus:ring-4 transition-all duration-300 ${
                    isSubmitted
                      ? "bg-PrimaryGreen cursor-not-allowed opacity-80 focus:ring-PrimaryGreen"
                      : "bg-PrimaryBlue focus:ring-PrimaryGreen"
                  }`}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 ml-4 flex-shrink-0"
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
    </section>
  );
};

export default Home;
