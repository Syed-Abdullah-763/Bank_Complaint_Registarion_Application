import { Controller, useForm } from "react-hook-form";
import ExitHeader from "../../components/ExitHeader";
import LoginContent from "../../components/loginContent";
import { TextField, Button } from "@mui/material";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler = (obj) => {
    console.log(obj);
  };
  const inputSX = {
    "& .MuiInputLabel-root": {
      color: "#149949",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#149949",
    },
    "& .MuiOutlinedInput-root": {
      height: "45px",
      borderRadius: "10px",
      "& fieldset": {
        borderColor: "#149949",
      },
      "&:hover fieldset": {
        borderColor: "#149949",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#149949",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "10.5px 14px",
    },
  };

  return (
    <>
      <ExitHeader />

      <main className="w-full min-h-130 flex items-center justify-center">
        <div className="w-3/4 min-h-120 flex items-center justify-center">
          <div className="w-1/3 h-110 hidden md:block ">
            <LoginContent />
          </div>

          <div className="w-full md:w-1/2 h-110">
            <div className="h-full flex items-center justify-center bg-gradient-to-br ">
              <div className="w-full max-w-md h-full bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  Welcome Back
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                  Login to your account
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(loginHandler)}
                  className="flex gap-5 flex-col"
                >
                  {/* Email */}
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={inputSX}
                      />
                    )}
                  />

                  {/* Password */}
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type="password"
                        label="Password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={inputSX}
                      />
                    )}
                  />

                  {/* Button */}
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      height: "45px",
                      borderRadius: "10px",
                      backgroundColor: "#149949",
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#117d3b",
                      },
                    }}
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
