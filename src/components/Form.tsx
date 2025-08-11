import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  isVisable: boolean;
  setFormData: {
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setMessage: (message: string) => void;
  };
}

const Form = ({ isVisable, setFormData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setFormData.setName(data.Name);
    setFormData.setEmail(data.Email);
    if (data.Phone != null) setFormData.setPhone(data.Phone);
    if (data.Message != null) setFormData.setMessage(data.Message);
    reset();
  };

  return (
    <>
      {isVisable && (
        <div className="w-full max-w-md mx-auto px-4 py-8 sm:py-12 bg-gray-100 text-gray-900 rounded-lg sm:max-w-lg">
          <h1 className="font-title text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center">
            <b>Join the waiting list!</b>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="uppercase text-sm text-gray-600 font-title block mb-2">
                Full Name *
              </label>
              <input
                {...register("Name")}
                className="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
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
            <div>
              <label className="uppercase text-sm text-gray-600 font-title block mb-2">
                Email *
              </label>
              <input
                {...register("Email")}
                className="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
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
            <div>
              <label className="uppercase text-sm text-gray-600 font-title block mb-2">
                Phone Number
              </label>
              <input
                {...register("Phone")}
                className="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
                type="tel"
                placeholder="Enter your Phone Number including country code"
              />
              {errors.Phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 font-title block mb-2">
                Message
              </label>
              <textarea
                {...register("Message")}
                className="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base h-24"
                placeholder="Enter your Message"
              ></textarea>
              {errors.Message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Message.message}
                </p>
              )}
            </div>
            <div>
              <button
                className="w-full bg-PrimaryGreen text-gray-100 p-3 rounded-lg font-title tracking-wide text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
