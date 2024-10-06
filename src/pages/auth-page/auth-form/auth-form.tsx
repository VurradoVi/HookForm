import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import "./auth-form.css";

interface ISignInForm {
  login: string;
  password: string;
}

export const AuthForm: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();

  const {errors} = useFormState()

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="auth-form">
      <Typography variant="h4">Войдите</Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className="auth-form__subtitle"
      >
        Чтобы получить доступ
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form__form">
        <Controller
          control={control}
          name="login"
          rules={{required:true}}
          render={({ field }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth
              onChange={(e) => field.onChange(e)}
              value={field.value}
              helperText
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              label="Пароль"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disableElevation
          sx={{ marginTop: 2 }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
