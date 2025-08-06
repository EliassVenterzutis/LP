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
        <div className="px-5 max-w-1/2 py-15 mx-auto bg-gray-100 text-gray-900 rounded-lg">
          <h1 className="title-font sm:text-5xl text-4xl mb-8 font-semibold text-gray-900 leading-15 max-w-200 text-center">
            <b>Join the waiting list!</b>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name *
              </span>
              <input
                {...register("Name")}
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="text"
                placeholder="Enter your Name"
                required
              />
              {errors.Name && (
                <label className="text-red-500">{errors.Name.message}</label>
              )}
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email *
              </span>
              <input
                {...register("Email")}
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="email"
                placeholder="Enter your email address"
                required
              />
              {errors.Email && (
                <label className="text-red-500">{errors.Email.message}</label>
              )}
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Phone Number
              </span>
              <input
                {...register("Phone")}
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="phone"
                placeholder="Enter your Phone Number including country code"
              />
              {errors.Phone && (
                <label className="text-red-500">{errors.Phone.message}</label>
              )}
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                {...register("Message")}
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your Message"
              ></textarea>
              {errors.Message && (
                <label className="text-red-500">{errors.Message.message}</label>
              )}
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-PrimaryGreen text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
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
