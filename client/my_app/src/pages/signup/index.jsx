import { Controller, useForm } from "react-hook-form";
import ExitHeader from "../../components/ExitHeader";
import LoginContent from "../../components/loginContent";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../store/features/auth/auth.thunk";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      bankName: "",
      bankId: "",
    },
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.authReducer);

  let role = watch("role");
  console.log(role);

  const loginHandler = async (obj) => {
    try {
      console.log(obj);

      //   dispatch(loginThunk(obj));
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
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

          <div className="w-full md:w-1/2 min-h-110">
            <div className="h-full flex items-center justify-center bg-gradient-to-br ">
              <div className="w-full max-w-md h-full bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  Create Account
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                  Signup to your account
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(loginHandler)}
                  className="flex gap-5 flex-col"
                >
                  {/* Name */}
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type="text"
                        label="Full Name"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={inputSX}
                      />
                    )}
                  />

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

                  <FormControl error={!!errors.choice}>
                    <FormLabel
                      sx={{
                        color: "#149949",
                        "&.Mui-focused": { color: "#149949" },
                      }}
                    >
                      Role
                    </FormLabel>

                    <Controller
                      name="role"
                      control={control}
                      rules={{ required: "Please select your role" }}
                      render={({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel
                            value="customer"
                            label="Customer"
                            control={
                              <Radio
                                sx={{
                                  color: "#149949",
                                  "&.Mui-checked": {
                                    color: "#149949",
                                  },
                                }}
                              />
                            }
                          />

                          <FormControlLabel
                            value="bank_officer"
                            label="Bank Officer"
                            control={
                              <Radio
                                sx={{
                                  color: "#149949",
                                  "&.Mui-checked": {
                                    color: "#149949",
                                  },
                                }}
                              />
                            }
                          />
                        </RadioGroup>
                      )}
                    />

                    <FormHelperText>{errors.choice?.message}</FormHelperText>
                  </FormControl>

                  {role === "bank_officer" && (
                    <Controller
                      name="bankId"
                      control={control}
                      rules={{
                        required: "Bank Id is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          type="text"
                          label="Bank Id"
                          error={!!errors.bankId}
                          helperText={errors.bankId?.message}
                          sx={inputSX}
                        />
                      )}
                    />
                  )}

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
                    {loading ? "Loading" : "SignUp"}
                  </Button>
                </form>
                <p className="text-[#149949] text-center mt-5 text-[14px]">
                  OR
                </p>
                <p className="text-center mt-3 text-[17px]">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#149949] underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
